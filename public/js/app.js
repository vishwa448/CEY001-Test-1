document.addEventListener("DOMContentLoaded", function() {
    // console.log("DOM fully loaded and parsed");

    fetch('public/resources/json/products.json')
        .then(response => response.json())
        .then(products => {
            const productList = document.getElementById("product-list");

            products.forEach(product => {
                const productDiv = document.createElement("div");
                productDiv.classList.add("product-item");

                productDiv.innerHTML = `
                    <img src="${product.images[0]}" alt="${product.name}">
                    <div class="product-info">
                        <h2>${product.name}</h2>
                        <p>${product.description}</p>
                        <p class="price">Now $${product.price} <span class="original-price">Was $${product.originalPrice} (${product.discount})</span></p>
                        <a href="product-details?id=${product.id}">View Details</a>
                    </div>
                `;

                productList.appendChild(productDiv);
            });
        });
});
