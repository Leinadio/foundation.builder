import AuthFormHook from "@/components/AuthFormHook";
import AuthFormApi from "@/components/AuthFormApi";

export default function AuthDemoPage() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        gap: 32,
        justifyContent: "center",
        alignItems: "flex-start",
        minHeight: "100vh",
        padding: 32,
      }}
    >
      <AuthFormHook />
      <AuthFormApi />
    </div>
  );
}
