const items = [
  { name: "Book", Brand: "Classmate", price: 50, rating: 4.5 },
  { name: "Laptop", Brand: "HP", price: 50000, rating: 3.5 },
  { name: "Bench", price: 10000, rating: 3.5 },
  { name: "Phone", Brand: "Samsung", price: 25000, rating: 4.2 },
  { name: "Headphones", Brand: "Sony", price: 3000, rating: 4.0 },
  { name: "Watch", Brand: "Casio", price: 2500, rating: 4.3 },
  { name: "Keyboard", Brand: "Logitech", price: 1500, rating: 4.1 },
  { name: "Mouse", Brand: "Dell", price: 800, rating: 3.8 },
  { name: "Monitor", Brand: "LG", price: 15000, rating: 4.4 },
  { name: "Chair", Brand: "IKEA", price: 5000, rating: 3.9 },
  { name: "Desk", price: 8000, rating: 4.0 },
  { name: "Printer", Brand: "Canon", price: 7000, rating: 3.7 },
  { name: "Tablet", Brand: "Apple", price: 30000, rating: 4.6 },
  { name: "Camera", Brand: "Nikon", price: 45000, rating: 4.5 },
  { name: "Speaker", Brand: "JBL", price: 4000, rating: 4.2 },
  { name: "Backpack", Brand: "Nike", price: 2000, rating: 4.1 },
  { name: "Shoes", Brand: "Adidas", price: 3500, rating: 4.3 },
  { name: "Shirt", Brand: "Zara", price: 1200, rating: 3.6 },
  { name: "Jeans", Brand: "Levi's", price: 2800, rating: 4.0 },
  { name: "Wallet", Brand: "Leather", price: 1000, rating: 3.9 },
  { name: "Sunglasses", Brand: "Ray-Ban", price: 8000, rating: 4.4 },
  { name: "Water Bottle", price: 300, rating: 4.0 },
  { name: "Notebook", Brand: "Moleskine", price: 800, rating: 4.2 }
];

const table = document.getElementById("product_list");
const sorter = document.getElementById("sorter");


function sortPriceASC(a, b) { return a.price - b.price; }
function sortPriceDSC(a, b) { return b.price - a.price; }
function sortRatingASC(a, b) { return a.rating - b.rating; }
function sortRatingDSC(a, b) { return b.rating - a.rating; }


function renderTable(data) {
  table.innerHTML = "";

  const headerRow = document.createElement("tr");
  headerRow.innerHTML =
    "<th>Name</th><th>Brand</th><th>Price</th><th>Rating</th>";
  table.append(headerRow);

  data.forEach(item => {
    const row = document.createElement("tr");

    row.innerHTML = `
      <td>${item.name}</td>
      <td>${item.Brand || "-"}</td>
      <td>${item.price}</td>
      <td>${item.rating}</td>
    `;

    table.append(row);
  });
}


renderTable(items);


sorter.addEventListener("change", function () {
  const selection = sorter.value;
  let sortedItems = [...items]; 

  if (selection === "price-asc")
    sortedItems.sort(sortPriceASC);
  else if (selection === "price-dsc")
    sortedItems.sort(sortPriceDSC);
  else if (selection === "rating-asc")
    sortedItems.sort(sortRatingASC);
  else if (selection === "rating-dsc")
    sortedItems.sort(sortRatingDSC);

  renderTable(sortedItems);
});
