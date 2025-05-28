import { IdeaComponentInput } from './api-type';
import { db } from '@/lib/firebase';
import { 
  collection, 
  addDoc, 
  DocumentReference, 
  query, 
  where, 
  getDocs, 
  QueryDocumentSnapshot, 
  QuerySnapshot,
  DocumentData,
  Query
} from 'firebase/firestore';

export interface ComponentResponse {
  title: string;
  completeDescription: string;
  bulletPoints?: Array<string>;
  sourceLink?: Array<{
    title: string;
    url: string;
  }>;
  workflowId: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface ComponentBase extends ComponentResponse {
  id: string;
}

export async function apiGetComponent({
  workflowId,
  type
}: {
  workflowId: string;
  type: NodeType;
}): Promise<ComponentBase | null> {
  try {
    const q: Query<DocumentData> = query(
      collection(db, "nodes"), 
      where("workflowId", "==", workflowId),
      where("type", "==", type)
    );

    const querySnapshot: QuerySnapshot<DocumentData> = await getDocs(q);
    if (querySnapshot.empty) {
      return null;
    }
    const doc: QueryDocumentSnapshot<DocumentData>  = querySnapshot.docs[0];
    const data: ComponentResponse = doc.data() as ComponentResponse;
    
    return { 
      id: doc.id,
      ...data
    };
    
  } catch (error) {
    throw error;
  }
}

export interface IdeaResponse {
  completeDescription: string;
  sourceLink?: Array<{
    title: string;
    url: string;
  }>;
  bulletPoints: Array<string>;
  type: NodeType;
}

export interface IdeasComponents {
  target?: IdeaResponse;
  limitsAndRisks?: IdeaResponse;
}

export enum NodeType {
  summaryIdeas = 'summaryIdeas',
  target = 'target',
  limitsAndRisks = 'limitsAndRisks',
  concurrence = 'concurrence',
  market = 'market',
  salesStrategy = 'salesStrategy',
  distributionChannels = 'distributionChannels',
  alternateBehavior = 'alternateBehavior',
  target_existing_solutions = 'target_existing_solutions',
  identified_problem = 'identified_problem',
  target_audience = 'target_audience',
  why_now = 'why_now',
  urgency_level = 'urgency_level',
  early_signs_of_interest = 'early_signs_of_interest',
  risk_of_false_positive = 'risk_of_false_positive',
  key_advice_before_next_step = 'key_advice_before_next_step',
  simplest_mvp_version = 'simplest_mvp_version',
  core_feature_to_build = 'core_feature_to_build',
  what_to_ignore_initially = 'what_to_ignore_initially',
  where_to_find_target = 'where_to_find_target',
  hook_to_test = 'hook_to_test',
  where_to_launch = 'where_to_launch',
  marketing_strategy = 'marketing_strategy',
  direct_outreach_strategy = 'direct_outreach_strategy',
  pricing_strategy = 'pricing_strategy',
  natural_business_model = 'natural_business_model',
  psychological_pricing = 'psychological_pricing',
  key_purchase_trigger = 'key_purchase_trigger',
  existing_solutions_comparison = 'existing_solutions_comparison',
  expected_user_feedback = 'expected_user_feedback',
  adoption_barriers = 'adoption_barriers',
  what_to_keep_or_kill = 'what_to_keep_or_kill',
  minimal_feedback_tracking = 'minimal_feedback_tracking',
  light_pivot_idea = 'light_pivot_idea',
  mid_term_vision = 'mid_term_vision'
}

export async function generateIdeasComponents(validationData: IdeaComponentInput): Promise<IdeaResponse | null> {
  try {
    const response = await fetch('/api/generate-idea', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(validationData),
    });

    if (!response.ok) {
      const error = await response.json();
      console.error("Erreur lors de la génération des composants:", error);
      return null;
    }

    const responseData = await response.json() as IdeaResponse;
    return responseData;
  } catch (error) {
    console.error("Erreur lors de la génération des composants:", error);
    return null;
  }
}

export async function apiCreateComponent({
  title,
  completeDescription,
  bulletPoints,
  sourceLink,
  workflowId,
  type
}: {
  title: string;
  completeDescription: string;
  bulletPoints: Array<string>;
  sourceLink: Array<{
    title: string;
    url: string;
  }>;
  workflowId: string;
  type: string;
}): Promise<ComponentBase | null> {
  try {
    const componentData = {
      title,
      completeDescription,
      bulletPoints,
      sourceLink,
      workflowId,
      createdAt: new Date(),
      updatedAt: new Date(),
      type
    };
    
    const docRef: DocumentReference = await addDoc(
      collection(db, "nodes"),
      componentData
    );
    
    return {
      id: docRef.id,
      ...componentData,
      createdAt: new Date(),
      updatedAt: new Date()
    };
  } catch {
    return null;
  }
}
