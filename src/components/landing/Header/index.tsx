import { Header as HeaderComponent, HeaderProps } from "@/components/ui/header";
import { HeaderUserActions } from "@/components/common/HeaderUserActions";

export async function Header(props: HeaderProps) {
  return (
    <HeaderComponent {...props}>
      <HeaderComponent.AuthSection>
        <HeaderUserActions />
      </HeaderComponent.AuthSection>

      <HeaderComponent.AuthSectionMobile>
        <HeaderUserActions />
      </HeaderComponent.AuthSectionMobile>
    </HeaderComponent>
  );
}
