// Question #4
const inventory = [
  { name: "Apple", price: 35, quantity: 100 },
  { name: "Banana", price: 10, quantity: 50 },
  { name: "Orange", price: 30, quantity: 60 },
];
// เริ่มเขียนโค้ดตรงนี้

let leastFruit = inventory[0]["name"];
let leastFruitCount = inventory[0]["quantity"];

for (let fruit of inventory) {
  if (fruit["quantity"] < leastFruitCount) {
    leastFruit = fruit["name"];
    leastFruitCount = fruit["quantity"];
  }
}

console.log(
  `สินค้าที่มีจำนวนต่ำที่สุดในคลังสินค้าคือ ${leastFruit} ซึ่งมี ${leastFruitCount} ชิ้น`
);
