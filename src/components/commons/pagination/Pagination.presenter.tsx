import { useEffect, useState } from "react";
import * as S from "./Pagination.styles";
import { PagePropType } from "./Pagination.types";

function PaginationPresenter(props: PagePropType) {
  const [pageAmount, setPageAmount] = useState(0);

  useEffect(() => {
    setPageAmount(Math.ceil((props.productLength - 1) / 5));
  }, [props.productLength]);

  return (
    <>
      <div>
        <S.PageWrap>
          <span>이전</span>
          <span>
            {new Array(pageAmount).fill(1).map((_el, index) => (
              <S.PageNum
                key={index}
                onClick={() => {
                  props.onClickPageNum(index + 1);
                }}
              >
                {index + 1}
              </S.PageNum>
            ))}
          </span>
          <span>다음</span>
        </S.PageWrap>
      </div>
    </>
  );
}

export default PaginationPresenter;
