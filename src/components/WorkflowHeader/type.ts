export type WorkflowHeaderProps = {
  onSave: () => Promise<void>;
  hasUnsavedChanges: boolean;
};