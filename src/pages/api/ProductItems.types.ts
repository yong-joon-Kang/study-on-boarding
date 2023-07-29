export interface ProductType {
  item_no: number;
  item_name: string;
  detail_image_url: string;
  price: number;
  score: number;
}

export interface ProductItemsType {
  productItems: ProductType[];
}
