<!-- section 1 - single section  -->
<section class="pp-s1">
    <div class="container d-flex justify-content-center align-items-center">
        <div class=" text-center mt-5">
            <!-- Image Slider -->
            <!-- Slider main container -->
            <div class="swiper">
                <!-- Additional required wrapper -->
                <div class="swiper-wrapper">
                    <!-- Slides -->
                    <div class="swiper-slide">Slide 1</div>
                    <div class="swiper-slide">Slide 2</div>
                    <div class="swiper-slide">Slide 3</div>
                    ...
                </div>
                <!-- If we need pagination -->
                <div class="swiper-pagination"></div>

                <!-- If we need navigation buttons -->
                <div class="swiper-button-prev"></div>
                <div class="swiper-button-next"></div>

                <!-- If we need scrollbar -->
                <div class="swiper-scrollbar"></div>
            </div>
            <!-- Product Information  -->
            <div class="product-info">
                <h2 data-field="name">Product Name</h2>
                <p class="price">Now $ <span data-field="price">price</span></p>
                <p class="original-price">Was $ <span data-field="originalPrice">original price</span></p>
                <p data-field="description">description</p>
                <p>Color: <span data-field="additionalInfo.color">color</span></p>
               
                <p>Category: <span data-field="additionalInfo.category">category</span></p>
                <p>Stock: <span data-field="additionalInfo.stock">stock</span></p>
                <p>Likes: <span data-field="additionalInfo.likes">Likes</span></p>
            </div>

            <!-- <div class="row mt-5" id="product-detail">poduct detalis </div> -->
 
        </div>


    </div>
</section>