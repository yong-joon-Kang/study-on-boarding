import PaginationPresenter from "./Pagination.presenter";
import { PagePropType } from "./Pagination.types";

function PaginationContainer(props: PagePropType) {
  return (
    <PaginationPresenter
      productLength={props.productLength}
      onClickPageNum={props.onClickPageNum}
    />
  );
}

export default PaginationContainer;
