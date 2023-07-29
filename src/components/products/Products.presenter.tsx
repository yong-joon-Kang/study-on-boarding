import * as S from "./Products.styles";
import Image from "next/image";
import { getComma } from "@/commons/library/utils";
import { ProductsToContPropsType } from "./Products.types";

const ProductsPresenter = (props: ProductsToContPropsType) => {
  return (
    <S.Wrap>
      <h1>Product List</h1>
      {props.productList?.map((item: any, index: number) => (
        <>
          <S.ProductWrap key={item.no}>
            <S.Top>
              <Image
                src={item.detail_image_url}
                alt={"hors-doeuvre-ge5d8b6f13_640"}
                layout="fill"
                objectFit="cover"
              />
              <S.ShopIcon onClick={() => props.onClickShopIcon(item)} />
            </S.Top>
            <S.Bottom>
              <S.ItemName>{item.item_name}</S.ItemName>
              <S.Price>{getComma(item.price)}원</S.Price>
              <S.Score>평점 {item.score}</S.Score>
            </S.Bottom>
          </S.ProductWrap>
          {(index + 1) % 5 === 0 && <br />}
        </>
      ))}
    </S.Wrap>
  );
};

export default ProductsPresenter;
