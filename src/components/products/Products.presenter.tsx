import { useSelector } from "react-redux";
import { RootState } from "../../commons/library/redux/store"; // RootState를 가져옴
import * as S from "./Products.styles";

const ProductsPresenter = () => {
  const productItems = useSelector((state: RootState) => state.products);
  return (
    <S.Wrap>
      <h1>Product List</h1>
      <ul>
        {productItems?.map((item: any) => (
          <li key={item.item_no}>
            {item.item_name} - Price: {item.price}, Score: {item.score}
          </li>
        ))}
      </ul>
    </S.Wrap>
  );
};

export default ProductsPresenter;
