import ProductsPresenter from "./Products.presenter";

function ProductsContainer(props: any) {
  return <ProductsPresenter productItems={props.productItems} />;
}

export default ProductsContainer;
