import { NodeType } from "@/services/idea-validation/api";

export interface ReportSection {
  bulletPoints: string[];
  completeDescription: string;
  sourceLinks: string[];
  type: string; 
}

export interface Report {
  id?: string;
  workflowId: string;
  createdAt: string;
  updatedAt: string;
  sections: {
    summaryIdeas: ReportSection;
    identified_problem: ReportSection;
    target_audience: ReportSection;
    target_existing_solutions: ReportSection;
    why_now: ReportSection;
    early_signs_of_interest: ReportSection;
    risk_of_false_positive: ReportSection;
    key_advice_before_next_step: ReportSection;
    simplest_mvp_version: ReportSection;
    core_feature_to_build: ReportSection;
    what_to_ignore_initially: ReportSection;
    where_to_find_target: ReportSection;
    hook_to_test: ReportSection;
    where_to_launch: ReportSection;
    marketing_strategy: ReportSection;
    direct_outreach_strategy: ReportSection;
    pricing_strategy: ReportSection;
    natural_business_model: ReportSection;
    psychological_pricing: ReportSection;
    key_purchase_trigger: ReportSection;
    existing_solutions_comparison: ReportSection;
    expected_user_feedback: ReportSection;
    adoption_barriers: ReportSection;
    what_to_keep_or_kill: ReportSection;
    minimal_feedback_tracking: ReportSection;
    light_pivot_idea: ReportSection;
    mid_term_vision: ReportSection;
  };
}

// Fonction pour convertir un document Firestore en objet Report
export function toReport(id: string, data: Record<string, unknown>): Report {
  return {
    id,
    workflowId: data.workflowId as string,
    createdAt: data.createdAt as string,
    updatedAt: data.updatedAt as string,
    sections: data.sections as Report['sections']
  };
}

// Crée une section de rapport vide
export function createEmptyReportSection(type: string): ReportSection {
  return {
    bulletPoints: [],
    completeDescription: '',
    sourceLinks: [],
    type
  };
}

// Crée un rapport vide avec toutes les sections initialisées
export function createEmptyReport(workflowId: string): Report {
  return {
    workflowId,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    sections: {
      summaryIdeas: createEmptyReportSection(NodeType.summaryIdeas),
      identified_problem: createEmptyReportSection(NodeType.identified_problem),
      target_audience: createEmptyReportSection(NodeType.target_audience),
      target_existing_solutions: createEmptyReportSection(NodeType.target_existing_solutions),
      why_now: createEmptyReportSection(NodeType.why_now),
      early_signs_of_interest: createEmptyReportSection(NodeType.early_signs_of_interest),
      risk_of_false_positive: createEmptyReportSection(NodeType.risk_of_false_positive),
      key_advice_before_next_step: createEmptyReportSection(NodeType.key_advice_before_next_step),
      simplest_mvp_version: createEmptyReportSection(NodeType.simplest_mvp_version),
      core_feature_to_build: createEmptyReportSection(NodeType.core_feature_to_build),
      what_to_ignore_initially: createEmptyReportSection(NodeType.what_to_ignore_initially),
      where_to_find_target: createEmptyReportSection(NodeType.where_to_find_target),
      hook_to_test: createEmptyReportSection(NodeType.hook_to_test),
      where_to_launch: createEmptyReportSection(NodeType.where_to_launch),
      marketing_strategy: createEmptyReportSection(NodeType.marketing_strategy),
      direct_outreach_strategy: createEmptyReportSection(NodeType.direct_outreach_strategy),
      pricing_strategy: createEmptyReportSection(NodeType.pricing_strategy),
      natural_business_model: createEmptyReportSection(NodeType.natural_business_model),
      psychological_pricing: createEmptyReportSection(NodeType.psychological_pricing),
      key_purchase_trigger: createEmptyReportSection(NodeType.key_purchase_trigger),
      existing_solutions_comparison: createEmptyReportSection(NodeType.existing_solutions_comparison),
      expected_user_feedback: createEmptyReportSection(NodeType.expected_user_feedback),
      adoption_barriers: createEmptyReportSection(NodeType.adoption_barriers),
      what_to_keep_or_kill: createEmptyReportSection(NodeType.what_to_keep_or_kill),
      minimal_feedback_tracking: createEmptyReportSection(NodeType.minimal_feedback_tracking),
      light_pivot_idea: createEmptyReportSection(NodeType.light_pivot_idea),
      mid_term_vision: createEmptyReportSection(NodeType.mid_term_vision)
    }
  };
}