document.addEventListener("DOMContentLoaded", function () {
  const urlParams = new URLSearchParams(window.location.search);
  const productId = urlParams.get("id");

  fetch("public/resources/json/products.json")
    .then((response) => response.json())
    .then((products) => {
      const product = products.find((p) => p.id === productId);

      if (product) {
        const productDetail = document.getElementById("product-detail");
        let imageIndex = 0;

        productDetail.innerHTML = `
              <div class="container mt-5">
    <div class="row">
        <!-- Product Details -->
        <div class="col-md-8 mb-4">
            <h1>${product.name}</h1>
            <div class="slider d-flex align-items-center">
                <button id="prev" class="btn btn-outline-secondary">&lt;</button>
                <div id="image-slider" class="flex-grow-1 text-center">
                    <img id="current-image" class="img-fluid" src="${product.images[imageIndex]}" alt="${product.name}">
                </div>
                <button id="next" class="btn btn-outline-secondary">&gt;</button>
            </div>
        </div>
        <!-- Additional Info -->
        <div class="col-md-4">
            <p>${product.description}</p>
            <p class="price">
                Now $${product.price} 
                <span class="original-price">
                    Was $${product.originalPrice} (${product.discount})
                </span>
            </p>
            <p><strong>Color:</strong> ${product.additionalInfo.color}</p>
            <p><strong>Stock:</strong> ${product.additionalInfo.stock}</p>
            <p><strong>Likes:</strong> <span id="likes">${product.additionalInfo.likes}</span> ❤️</p>
        </div>
    </div>
</div>

                    `;

        // Image slider functionality
        document.getElementById("next").onclick = () => {
          imageIndex = (imageIndex + 1) % product.images.length;
          document.getElementById("current-image").src =
            product.images[imageIndex];
        };

        document.getElementById("prev").onclick = () => {
          imageIndex =
            (imageIndex - 1 + product.images.length) % product.images.length;
          document.getElementById("current-image").src =
            product.images[imageIndex];
        };
      } else {
        document.getElementById("product-detail").innerHTML =
          "<p>Product not found.</p>";
      }
    });
});
