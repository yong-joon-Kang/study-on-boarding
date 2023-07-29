import CartPresenter from "./Cart.presenter";
import { useSelector } from "react-redux";
import { RootState } from "../../commons/library/redux/store"; // RootState를 가져옴

function CartContainer() {
  const cart = useSelector((state: RootState) => state.cart);
  return <CartPresenter cart={cart} />;
}

export default CartContainer;
