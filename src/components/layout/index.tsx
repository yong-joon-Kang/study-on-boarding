import styled from "@emotion/styled";
import Footer from "./footer";
import Header from "./header";
import NavMenu from "./navMenu";
import { width } from "../../commons/styles/styles";

interface IPropsLayout {
  children: JSX.Element;
}

const Content = styled.div`
  ${width.contentWrap}
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 1000px;
`;

function Layout(props: IPropsLayout) {
  return (
    <>
      <Header />
      <Content>{props.children}</Content>
      <Footer />
    </>
  );
}

export default Layout;
