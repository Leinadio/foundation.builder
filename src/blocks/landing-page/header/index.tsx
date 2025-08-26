import { Header, HeaderProps } from "@/blocks/landing-page/header/ui";
import { HeaderUserActionsContainer } from "@/components/auth/header-user-actions";

export type HeaderContainerProps = HeaderProps;

export async function HeaderContainer(props: HeaderContainerProps) {
  return (
    <Header {...props}>
      <Header.AuthSection>
        <HeaderUserActionsContainer />
      </Header.AuthSection>
    </Header>
  );
}
