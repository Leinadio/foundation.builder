import { db } from '@/lib/firebase';
import { 
  collection, 
  addDoc, 
  query, 
  where, 
  getDocs, 
  doc,
  updateDoc
} from 'firebase/firestore';
import { Report, ReportSection, toReport, createEmptyReport } from '@/models/Node';
import { IdeaResponse } from '../idea-validation/api';

// Récupère un rapport par workflowId
export async function getReportByWorkflowId(workflowId: string): Promise<Report | null> {
  try {
    const q = query(
      collection(db, "reports"), 
      where("workflowId", "==", workflowId)
    );

    const querySnapshot = await getDocs(q);
    if (querySnapshot.empty) {
      return null;
    }

    const doc = querySnapshot.docs[0];
    return toReport(doc.id, doc.data());
  } catch (error) {
    console.error("Erreur lors de la récupération du rapport:", error);
    return null;
  }
}

// Crée un nouveau rapport
export async function createReport(workflowId: string): Promise<Report | null> {
  try {
    const report = createEmptyReport(workflowId);
    
    const docRef = await addDoc(
      collection(db, "reports"),
      report
    );
    
    return {
      ...report,
      id: docRef.id
    };
  } catch (error) {
    console.error("Erreur lors de la création du rapport:", error);
    return null;
  }
}

// Met à jour une section d'un rapport
export async function updateReportSection(
  reportId: string, 
  sectionKey: keyof Report['sections'], 
  sectionData: ReportSection
): Promise<boolean> {
  try {
    const reportRef = doc(db, "reports", reportId);
    
    await updateDoc(reportRef, {
      [`sections.${sectionKey}`]: sectionData,
      updatedAt: new Date().toISOString()
    });
    
    return true;
  } catch (error) {
    console.error("Erreur lors de la mise à jour de la section:", error);
    return false;
  }
}

// Fonction qui gère la création ou mise à jour d'une section de rapport
export async function getOrCreateReportSection(
  workflowId: string,
  sectionKey: keyof Report['sections'],
  generateContent: () => Promise<IdeaResponse | null>
): Promise<ReportSection | null> {
  try {
    // Récupérer le rapport existant ou en créer un nouveau
    let report = await getReportByWorkflowId(workflowId);
    
    if (!report) {
      report = await createReport(workflowId);
      if (!report) {
        return null;
      }
    }
    
    // Vérifier si la section existe déjà et a du contenu
    const section = report.sections[sectionKey];
    if (section && section.completeDescription) {
      return section;
    }
    
    // Générer le contenu pour la section
    const content = await generateContent();
    if (!content) {
      return null;
    }
    
    // Créer la section mise à jour
    const updatedSection: ReportSection = {
      bulletPoints: content.bulletPoints || [],
      completeDescription: content.completeDescription,
      sourceLinks: content.sourceLink?.map(link => link.url) || [],
      type: sectionKey
    };
    
    // Mettre à jour la section dans le rapport
    if (report.id) {
      await updateReportSection(report.id, sectionKey, updatedSection);
    }
    
    return updatedSection;
  } catch (error) {
    console.error("Erreur lors de la récupération/création de la section:", error);
    return null;
  }
} 