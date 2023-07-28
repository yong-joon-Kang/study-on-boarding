const productItems = [
  {
    item_no: 1,
    item_name: "양식",
    detail_image_url: "/productImages/hors-doeuvre-ge5d8b6f13_640.jpg",
    price: "75000",
    score: "4.9",
  },
  {
    item_no: 2,
    item_name: "소고기",
    detail_image_url: "/productImages/meal-g8f209df67_640.jpg",
    price: "15000",
    score: "4.8",
  },
  {
    item_no: 3,
    item_name: "팬케잌",
    detail_image_url: "/productImages/pancakes-gac75eab9d_640.jpg",
    price: "25000",
    score: "4.9",
  },
  {
    item_no: 4,
    item_name: "파스타1",
    detail_image_url: "/productImages/pasta-gcf99e241b_640.jpg",
    price: "30000",
    score: "5.0",
  },
  {
    item_no: 5,
    item_name: "파스타2",
    detail_image_url: "/productImages/pasta-gda624a4d1_640.jpg",
    price: "45000",
    score: "4.6",
  },
  {
    item_no: 6,
    item_name: "피자",
    detail_image_url: "/productImages/pizza-gb4da5d02d_640.jpg",
    price: "55000",
    score: "4.8",
  },
  {
    item_no: 7,
    item_name: "연어",
    detail_image_url: "/productImages/salmon-g575027d18_640.jpg",
    price: "65000",
    score: "4.3",
  },
  {
    item_no: 8,
    item_name: "소세지",
    detail_image_url: "/productImages/sausage-g66ad426a6_640.jpg",
    price: "95000",
    score: "4.4",
  },
  {
    item_no: 9,
    item_name: "스시",
    detail_image_url: "/productImages/shish-kebab-gc8bf40500_640.jpg",
    price: "105000",
    score: "4.9",
  },
  {
    item_no: 10,
    item_name: "야채전골",
    detail_image_url: "/productImages/vegetable-pan-gdc239436b_640.jpg",
    price: "215000",
    score: "5.0",
  },
  // ... 추가 데이터
];

export default function handler(req: any, res: any) {
  res.status(200).json(productItems);
}
