import { Header, HeaderProps } from "@/blocks/landing-page/header/ui";
import { HeaderUserActionsContainer } from "@/components/auth/header-user-actions";

export async function HeaderContainer(props: HeaderProps) {
  return (
    <Header {...props}>
      <Header.AuthSection>
        <HeaderUserActionsContainer />
      </Header.AuthSection>
    </Header>
  );
}
