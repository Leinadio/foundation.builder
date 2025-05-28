import { NextResponse } from 'next/server';
import openai from '@/lib/openai';
import { NodeType } from '@/services/idea-validation/api';
import { zodResponseFormat } from "openai/helpers/zod";
import { z } from "zod";

export async function POST(request: Request) {
  try {
    const validationData = await request.json();
    console.log('validationData', validationData);

    const systemMessage = `
Vous êtes expert en stratégie business et validation d’idées, spécialisé dans l’accompagnement des porteurs de projet en phase de démarrage (solopreneurs, développeurs, indie hackers).
Votre rôle est de générer une analyse claire, utile et concrète à partir des informations fournies par l'utilisateur.

L’objectif est d’aider la personne à :
- Prendre du recul sur son idée
- Identifier des pistes d’action
- Repérer les signaux positifs ou les points de vigilance
- Avancer rapidement avec des conseils adaptés à son contexte
`;

    const userMessage = `
Génère une analyse complète pour la section suivante de mon projet : "${validationData.section}"

Détails du projet :
- Nom : ${validationData.ideaName}
- Description : ${validationData.businessIdea}
- Marché ou zone géographique : ${validationData.region}
- Problème adressé : ${validationData.problemSolved}
- Clientèle cible : ${validationData.targetCustomers}
- Modèle de revenus : ${validationData.revenueGeneration}

## Langue de rédaction :
${validationData.language === 'fr' ? 'Français' : 'Anglais'}

## Format de réponse obligatoire :
Retourne un objet JSON structuré comme ceci :
{
  "completeDescription": "Trois paragraphes développés, chacun avec au moins 3 à 4 phrases complètes. Le texte doit être clair, concret, et utile pour une personne qui lance seule son projet. Il ne doit pas contenir de markdown.\n\nChaque paragraphe développe une idée précise avec des exemples, nuances ou conseils directement liés au projet.\n\nLe ton doit être bienveillant, pragmatique, sans jargon, et orienté vers l’action ou la stratégie.",
  
  "bulletPoints": [
    "Cinq points clés, chacun formulé comme un conseil ou une action concrète, spécifique au projet"
  ]
}

## Règles à respecter :
- La section demandée doit être traitée en profondeur dans les 3 paragraphes.
- Les bulletPoints doivent être pratiques, synthétiques et applicables.
- Aucun champ ne doit être vide ou générique.
- Respecte strictement la langue spécifiée.

`;

    const IdeaResponse = z.object({
      completeDescription: z.string(),
      bulletPoints: z.array(z.string()),
    });

    const completion = await openai.beta.chat.completions.parse({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: systemMessage }, 
        { role: "user", content: userMessage }
      ],
      response_format: zodResponseFormat(IdeaResponse, "idea_response"),
    });
    
    if (!completion.choices[0].message.content) {
      return NextResponse.json({ error: "Pas de réponse générée" }, { status: 500 });
    }

    const response = completion.choices[0].message.parsed;
    
    if (!response) {
      return NextResponse.json({ error: "Pas de réponse générée" }, { status: 500 });
    }
    
    try {
      return NextResponse.json({
        completeDescription: response.completeDescription,
        bulletPoints: response.bulletPoints,
        type: validationData.section as NodeType
      });
    } catch (error) {
      console.error("Erreur lors du parsing de la réponse:", error);
      return NextResponse.json({ error: "Format de réponse invalide" }, { status: 500 });
    }

  } catch (error) {
    console.error("Erreur lors de la génération des composants:", error);
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}
