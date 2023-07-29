import { ProductType } from "@/pages/api/ProductItems.types";
import ProductsPresenter from "./Products.presenter";
import { ProductsPropType } from "./Products.types";
import { useDispatch, useSelector } from "react-redux";
import { setCart } from "../../commons/library/redux/action"; // 액션 생성자 함수
import { RootState } from "@/commons/library/redux/store";

function ProductsContainer(props: ProductsPropType) {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart); // 현재 장바구니 상태 가져오기

  const onClickShopIcon = (item: ProductType) => {
    // 새로운 상품을 기존 장바구니 리스트에 추가하기
    const updatedCart = [...cartItems, item];
    dispatch(setCart(updatedCart));
  };
  return (
    <ProductsPresenter
      productList={props.productList}
      onClickShopIcon={onClickShopIcon}
    />
  );
}

export default ProductsContainer;
