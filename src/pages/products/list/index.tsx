// import ProductsContainer from "@/components/products/Products.container";
import { GetServerSideProps } from "next";

import ProductsContainer from "@/components/products/Products.container";
import PaginationContainer from "@/components/commons/pagination/Pagination.container";
import { useState } from "react";
import { ProductItemsType } from "@/pages/api/ProductItems.types";

function Index({ productItems }: ProductItemsType) {
  // ssr csr 개념 공부
  // redux recoil 차이점
  // props로 데이터 넘긴다

  const [productList, setProductList] = useState(productItems);

  const onClickPageNum = (pageNum: number) => {
    const page = (pageNum || 1) * 5;
    setProductList(productItems.slice(page - 5, page));
  };

  return (
    <>
      <ProductsContainer productList={productList} />
      <PaginationContainer
        productLength={productItems.length}
        onClickPageNum={onClickPageNum}
      />
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  // 서버에서 데이터를 가져온 후 props로 전달하는 로직
  const res = await fetch(`http://localhost:3000/api/ProductItems`);
  const productItems = await res.json();

  console.log("API Response:", productItems); // 서버 로그 출력

  return {
    props: {
      productItems,
    },
  };
};

export default Index;
