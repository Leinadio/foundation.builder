import { Header as HeaderComponent, HeaderProps } from "@/blocks/landing-page/header/ui";
import { HeaderUserActionsContainer } from "@/components/header-user-actions";

export async function Header(props: HeaderProps) {
  return (
    <HeaderComponent {...props}>
      <HeaderComponent.AuthSection>
        <HeaderUserActionsContainer />
      </HeaderComponent.AuthSection>
    </HeaderComponent>
  );
}
