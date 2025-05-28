import Link from 'next/link';
import Image from 'next/image';

export default async function PrivacyPage({ params }: { params: Promise<{ lang: 'en' | 'fr' }> }) {
  const { lang } = await params;
  
  const privacyContent = {
    en: {
      title: "Privacy Policy",
      lastUpdated: "Last updated: April 27, 2025",
      content: `Your privacy matters to us. It is our policy to respect your privacy regarding any information we may collect on our website and AI business idea validation service.\n\n
            We only ask for personal information when we truly need it to provide a service to you. We collect it by fair and lawful means, with your knowledge and consent. We also let you know why we're collecting it and how it will be used.\n\n
            You can sign up with your Google account, which will pre-fill your username with your name and public profile picture. You can also sign up with your email address, in which case we will only collect your email address and the password you choose.\n\n
            We only retain collected information for as long as necessary to provide you with your requested service. What data we store, we'll protect within commercially acceptable means to prevent loss and theft, as well as unauthorized access, disclosure, copying, use or modification.
            We don't share any personally identifying information publicly or with third-parties, except when required to by law.\n\n
            We act in the capacity of a data controller and a data processor with regard to the personal data processed through our service in terms of the applicable data protection laws, including the EU General Data Protection Regulation (GDPR).\n\n
            Our website may link to external sites that are not operated by us. We have no control over the content and practices of these sites, and cannot accept responsibility or liability for their respective privacy policies.\n\n
            You are free to refuse our request for your personal information, with the understanding that we may be unable to provide you with some of your desired services.\n\n
            Your continued use of our website will be regarded as acceptance of our practices around privacy and personal information. If you have any questions about how we handle user data and personal information, feel free to contact us.`
    },
    fr: {
      title: "Politique de Confidentialité",
      lastUpdated: "Dernière mise à jour : 27 avril 2025",
      content: `Votre vie privée nous importe. Notre politique est de respecter votre vie privée concernant toute information que nous pouvons collecter sur notre site web et service de validation d'idées de business par IA.\n\n
            Nous ne demandons des informations personnelles que lorsque nous en avons vraiment besoin pour vous fournir notre service. Nous les collectons de manière équitable et légale, avec votre consentement. Nous vous informons pourquoi nous les collectons et comment elles seront utilisées.\n\n
            Vous pouvez vous inscrire avec votre compte Google, ce qui pré-remplira votre nom d'utilisateur avec votre nom et votre photo de profil publique. Vous pouvez également vous inscrire avec votre adresse email, auquel cas nous collecterons uniquement votre adresse email et le mot de passe que vous choisirez.\n\n
            Nous ne conservons les informations collectées que le temps nécessaire pour vous fournir le service demandé. Les données que nous stockons sont protégées par des moyens commercialement acceptables pour prévenir leur perte, vol, ainsi que tout accès, divulgation, copie, utilisation ou modification non autorisés.\n\n
            Nous ne partageons aucune information personnellement identifiable publiquement ou avec des tiers, sauf lorsque la loi l'exige.\n\n
            Nous agissons en tant que responsable du traitement et sous-traitant des données personnelles traitées via notre service, conformément aux lois applicables sur la protection des données, notamment le Règlement Général sur la Protection des Données (RGPD) de l'UE.\n\n
            Notre site web peut contenir des liens vers des sites externes que nous n'exploitons pas. Nous n'avons aucun contrôle sur le contenu et les pratiques de ces sites, et ne pouvons accepter aucune responsabilité concernant leurs politiques de confidentialité respectives.\n\n
            Vous êtes libre de refuser notre demande d'informations personnelles, sachant que nous pourrions ne pas être en mesure de vous fournir certains services souhaités.\n\n
            Votre utilisation continue de notre site web sera considérée comme une acceptation de nos pratiques en matière de confidentialité et d'informations personnelles. Si vous avez des questions sur la façon dont nous traitons les données des utilisateurs et les informations personnelles, n'hésitez pas à nous contacter.`
    }
  };

  const content = lang === 'fr' ? privacyContent.fr : privacyContent.en;

  return (
    <main className="min-h-screen w-full p-0 flex flex-col relative">
      <header className="flex justify-between items-center px-4 md:px-5 py-4 border-b border-gray-200">
        {/* Logo */}
        <Link href={`/${lang}`} className="flex items-center">
          <Image 
            src="/icon/logo.svg" 
            alt="Womi logo" 
            width={60} 
            height={60} 
          />
          <div className="flex flex-col">
            <span className="text-2xl font-bold ml-2">Womi</span>
          </div>
        </Link>
      </header>

      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">{content.title}</h1>
        <p className="text-gray-500 mb-8">{content.lastUpdated}</p>

        <div className="space-y-8">
          <p className="whitespace-pre-line">
            {content.content}
          </p>
        </div>

        <div className="mt-12 text-center">
          <Link href={`/${lang}`} className="text-primary hover:underline">
            {lang === 'fr' ? 'Retour à l\'accueil' : 'Back to home'}
          </Link>
        </div>
      </div>

      <footer className="bg-gray-800 text-white py-8 mt-auto">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; {new Date().getFullYear()} Womi. {lang === 'fr' ? 'Tous droits réservés.' : 'All rights reserved.'}</p>
          <div className="mt-4 flex justify-center space-x-4">
            <Link href={`/${lang}/terms`} className="hover:text-primary transition-colors">
              {lang === 'fr' ? 'Conditions d\'utilisation' : 'Terms of use'}
            </Link>
            <Link href={`/${lang}/privacy`} className="hover:text-primary transition-colors">
              {lang === 'fr' ? 'Politique de confidentialité' : 'Privacy policy'}
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
} 