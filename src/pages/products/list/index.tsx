// import ProductsContainer from "@/components/products/Products.container";
import { GetServerSideProps } from "next";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

import { setProducts } from "../../../commons/library/redux/action"; // 액션 생성자 함수
import ProductsPresenter from "@/components/products/Products.presenter";

function Index({ productItems }: any) {
  const dispatch = useDispatch();

  useEffect(() => {
    // 서버에서 받아온 상품 데이터를 Redux 스토어에 업데이트
    dispatch(setProducts(productItems));
  }, [dispatch, productItems]);

  return <ProductsPresenter />;
}

export const getServerSideProps: GetServerSideProps = async () => {
  // 서버에서 데이터를 가져온 후 props로 전달하는 로직
  const res = await fetch("http://localhost:3000/api/ProductItems");
  const productItems = await res.json();

  console.log("API Response:", productItems); // 서버 로그 출력

  return {
    props: {
      productItems,
    },
  };
};

export default Index;
