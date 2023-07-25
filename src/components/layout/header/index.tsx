import styled from "@emotion/styled";
import { width } from "../../../commons/styles/styles";

const Wrap = styled.div`
  position: relative;
  background: #01c73c
    url(https://shopv.pstatic.net/web/modules/gnb/p/static/20210605_1730/img/sv/global/bg_gheader.jpg)
    no-repeat 100% 0;
  height: 102px;
  &::before {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    height: 102px;
    background-color: rgba(0, 0, 0, 0.12);
    content: "";
  }
`;

const TopWrap = styled.div`
  height: 36px;
  &::after {
    position: absolute;
    right: 0;
    top: 36px;
    left: 0;
    height: 1px;
    background-color: rgba(0, 0, 0, 0.1);
    content: "";
  }
`;

const Top = styled.div`
  ${width.contentWrap}
`;

function Header() {
  return (
    <Wrap>
      <TopWrap>
        <Top></Top>
      </TopWrap>
    </Wrap>
  );
}

export default Header;
