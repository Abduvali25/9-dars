const container = document.querySelector(".card-item");


async function fetchProducts() {
    const response = await fetch("https://fakestoreapi.com/products");
    const products = await response.json();
     
    return products;
}


 async function init() {
     const products =  await fetchProducts();
     render(products)
 }


 function render(products) {
    products.forEach(function(prodact){
       const li = document.createElement("li");
       const a = document.createElement("a");
       a.href =`http://127.0.0.1:5500/product.html?id=${prodact.id}`
       const img = document.createElement("img");
       img.src = prodact.image;
       li.append(img);
       container.append(li)
       li.classList.add("item-list");

       const p = document.createElement("p");
       p.textContent = prodact.title;
       a.append(p);
       li.append(a);

       const strong = document.createElement("strong");
       strong.textContent = prodact.price;
       li.append(strong);

       const reyting = document.createElement("p");
       reyting.textContent =prodact.rating.rate;
       li.append(reyting);


       const jsButton = document.createElement("button");
       jsButton.textContent = "Add to Card";
       li.append(jsButton);
       jsButton.classList.add("card-button");
       jsButton.onclick = function () {
        jsButton.style.background = "#eee"
       };
       
       
    })
 }

 init();


