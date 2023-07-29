import { ProductType } from "@/pages/api/ProductItems.types";

export interface ProductsPropType {
  productList: ProductType[];
}

export interface ProductsToContPropsType extends ProductsPropType {
  onClickShopIcon: (item: ProductType) => void;
}
