const productItems = [
  {
    item_no: 1,
    item_name: "상품명1",
    detail_image_url: {},
    price: "75000",
    score: "200",
  },
  {
    item_no: 2,
    item_name: "상품명2",
    detail_image_url: {},
    price: "15000",
    score: "300",
  },
  {
    item_no: 3,
    item_name: "상품명3",
    detail_image_url: {},
    price: "25000",
    score: "100",
  },
  {
    item_no: 4,
    item_name: "상품명4",
    detail_image_url: {},
    price: "30000",
    score: "600",
  },
  {
    item_no: 5,
    item_name: "상품명5",
    detail_image_url: {},
    price: "45000",
    score: "800",
  },
  {
    item_no: 6,
    item_name: "상품명6",
    detail_image_url: {},
    price: "55000",
    score: "200",
  },
  {
    item_no: 7,
    item_name: "상품명7",
    detail_image_url: {},
    price: "65000",
    score: "900",
  },
  {
    item_no: 8,
    item_name: "상품명8",
    detail_image_url: {},
    price: "95000",
    score: "300",
  },
  {
    item_no: 9,
    item_name: "상품명9",
    detail_image_url: {},
    price: "105000",
    score: "1200",
  },
  {
    item_no: 10,
    item_name: "상품명10",
    detail_image_url: {},
    price: "215000",
    score: "2200",
  },
  // ... 추가 데이터
];

export default function handler(req: any, res: any) {
  res.status(200).json(productItems);
}
