function CartPresenter(props) {
  console.log(props.cart);
  return <div>{props.cart.map((el, index) => el.item_no)}</div>;
}

export default CartPresenter;
