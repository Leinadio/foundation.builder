import { NodeType } from "@/services/idea-validation/api";

export interface NodeBaseProps {
  nodeType: NodeType;
  workflowId?: string;
  isLock?: boolean;
  isLoading?: boolean;
  isCurrentlyFetching?: boolean;
  completeDescription?: string;
  bulletPoints?: Array<string>;
  onLoaded?: (nodeType: NodeType) => void;
  nextComponentLoading?: NodeType;
}
