import { ShoppingCartOutlined } from "@ant-design/icons";
import styled from "@emotion/styled";

export const Wrap = styled.div`
  width: 1280px;
  margin: 0 auto;
  height: 100%;
`;

export const ProductWrap = styled.div`
  border: 1px solid #ddd;
  width: 244px;
  height: 330px;
  display: inline-block;
  margin: 5px;
  cursor: pointer;
  :hover {
    border: 1px solid #fd7424;
  }
`;

export const Top = styled.div`
  width: 100%;
  height: 200px;
  position: relative;
`;

export const ShopIcon = styled(ShoppingCartOutlined)`
  position: absolute;
  right: 10px;
  bottom: 10px;
  font-size: 25px;
  border-radius: 100%;
  padding: 5px 8px 5px 5px;
  background-color: rgba(0, 0, 0, 0.25);
  color: #eee;
  :hover {
    font-size: 30px;
    transition: 0.15s;
    margin: -2px;
  }
`;

export const Bottom = styled.div`
  width: 100px;
  height: 100px;
  margin: 15px;
`;

export const ItemName = styled.div`
  font-size: 14px;
  margin-bottom: 20px;
`;

export const Price = styled.div`
  font-weight: bold;
  font-size: 14px;
  margin-bottom: 5px;
`;

export const Score = styled.div`
  font-size: 12px;
  color: #6f6f6f;
`;
