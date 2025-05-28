export interface WorkflowProject {
  name: string;
  isActive: boolean;
  url: string;
  id: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  date: string;
}