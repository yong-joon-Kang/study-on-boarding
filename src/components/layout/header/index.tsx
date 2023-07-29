import styled from "@emotion/styled";
import { width } from "../../../commons/styles/styles";
import { ShoppingFilled } from "@ant-design/icons";
import { useRouter } from "next/router";

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
  font-size: 12px;
  display: flex;
  align-items: center;
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
  position: relative;
  z-index: 1;
  color: #fff;
`;

const RightWrap = styled.div`
  /* width: 300px; */
  justify-content: flex-end;
  display: flex;
`;

const CartDiv = styled.div`
  display: flex;
`;

const CartText = styled.span`
  margin-left: 5px;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const CartIcon = styled(ShoppingFilled)`
  font-size: 20px;
`;

const LoginText = styled.span`
  display: flex;
  align-items: center;
  &::before {
    display: inline-block;
    width: 1px;
    height: 12px;
    background-color: rgba(255, 255, 255, 0.2);
    content: "";
    margin: 0 10px;
  }
  cursor: pointer;
`;

function Header() {
  const router = useRouter();
  return (
    <Wrap>
      <TopWrap>
        <Top>
          <RightWrap>
            <CartDiv>
              <CartIcon />
              <CartText
                onClick={() => {
                  router.push("/cart");
                }}
              >
                장바구니
              </CartText>
              <LoginText>로그인</LoginText>
            </CartDiv>
          </RightWrap>
        </Top>
      </TopWrap>
    </Wrap>
  );
}

export default Header;
