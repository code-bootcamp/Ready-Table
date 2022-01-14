import styled from "@emotion/styled";
import { useRouter } from "next/router";
import Header from "./header";
import Sidebar from "./sidebar/sidebar.container";

const Wrapper = styled.div`
  width: 1910px;
`;

const SideWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;
const Body = styled.div`
  width: 1620px
  display: flex;
  background-color: white;
  
`;

const MainBody = styled.div`
  background-color: yellow;
`;

const HiddenLayout = ["/", "/login", "/signup"];

export default function Layout(props) {
  const router = useRouter();
  const isHiddenLayout = HiddenLayout.includes(router.pathname);
  return (
    <Wrapper>
      {!isHiddenLayout ? (
        <>
          <Header />
          <SideWrapper>
            <Sidebar />
            <Body>{props.children}</Body>
          </SideWrapper>
        </>
      ) : (
        <>
          <Header />
          <MainBody>{props.children}</MainBody>
        </>
      )}
    </Wrapper>
  );
}
