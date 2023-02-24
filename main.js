const productList = document.querySelector(".product--list");
function getItems() {
  fetch("https://fakestoreapi.com/products")
    .then((data) => data.json())
    .then((data) => {
      data.forEach((item) => {
        const cartItem = document.createElement("div");
        cartItem.classList = "product";
        cartItem.innerHTML = `
            <div class="product__img">
              <img
                src="${item.image}"
                alt=""
              />
            </div>
            <p class="product__category">${item.category}</p>
            <div class="product__details">
              <p class="product__details--desc">
                ${item.description}
              </p>
              <div class="product__details--cart">
                <button>Add to cart</button>
                <p>$ <span class="product__details--price">${item.price}</span></p>
              </div>
            </div>
            `;
        productList.appendChild(cartItem);
      });
    });
}

getItems();
fetch("https://fakestoreapi.com/products")
  .then((data) => data.json())
  .then((data) => console.log(data));
