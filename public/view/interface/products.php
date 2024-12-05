<!-- section 1 - single section  -->
<section class="pp-s1 ">
    <div class="container d-flex justify-content-center align-items-center">
        <div class="col-lg-8 text-center">
            <div class="cey-bg-light-secondary">

                <img src="${product.images[0]}" alt="${product.name}">
                <div class="product-info">
                    <h2>${product.name}</h2>
                    <p>${product.description}</p>
                    <p class="price">Now $${product.price} <span class="original-price">Was $${product.originalPrice} (${product.discount})</span></p>
                    <a href="product-details?id=${product.id}">View Details</a>
                </div>

            </div>

            <!-- javaScript model -->
            <!-- <div id="product-list" class="cey-bg-light-secondary">
            </div> -->

        </div>
    </div>
</section>