import { pageRenderConfig } from "../../page-render-config";
import { DynamicRenderer } from "@/components/config/dynamic-renderer";

export default async function Home() {
  return <DynamicRenderer sections={pageRenderConfig} />;
}
