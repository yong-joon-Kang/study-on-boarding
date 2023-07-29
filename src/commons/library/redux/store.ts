import { ProductType } from "@/pages/api/ProductItems.types";
import { createStore, Store, AnyAction } from "redux";

// 상태 타입 정의
export interface RootState {
  products: ProductType[]; // products의 타입은 알맞게 지정해주세요.
  cart: ProductType[];
}

// 초기 상태 설정
const initialState: RootState = {
  products: [],
  cart: [],
};

// 리듀서 함수
const reducer = (state = initialState, action: AnyAction): RootState => {
  switch (action.type) {
    case "SET_PRODUCTS":
      return {
        ...state,
        products: action.payload,
      };
    case "SET_CART":
      return {
        ...state,
        cart: action.payload,
      };
    default:
      return state;
  }
};

// 스토어 생성
const store: Store<RootState, AnyAction> = createStore(reducer);

export default store;
