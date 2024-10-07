// Question #5
const products = [
  {
    name: "เสื้อยืด",
    price: 10,
    quantity: 2,
  },
  {
    name: "กางเกงยีนส์",
    price: 5,
    quantity: 3,
  },
  {
    name: "เสื้อเชิ้ต",
    price: 10,
    quantity: 5,
  },
];

const promotionCode = "";
// เริ่มเขียนโค้ดตรงนี้

function calculateTotalPrice(products, promotionCode) {
  let totalPrice = 0;
  let discount = 0;

  for (let item of products) {
    totalPrice += item["price"] * item["quantity"];
  }

  if (promotionCode === "SALE50") {
    discount = 50 / 100;
  } else if (promotionCode === "SALE20") {
    discount = 20 / 100;
  } else {
    discount = 0;
  }

  return totalPrice - totalPrice * discount;
}
