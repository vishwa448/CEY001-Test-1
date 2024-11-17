
class Example {
    @json
    product;

    constructor(product) {
        this.product = product;
    }
}


document.addEventListener("DOMContentLoaded", () => {
  //  after html is loaded (after page is loaded)
  console.log("test main");
 

  const swiper = new swiper(".swiper-container", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  const product = [
    {
      id: "1",
      name: "Morgan sleeveless buckle belt detail mini blazer dress in black",
      images: [
        "public/resources/images/products/1.png",
        "public/resources/images/products/2.png",
        "public/resources/images/products/3.png",
      ],
      description:
        "Detailed description of the product, highlighting its features and benefits.",
      price: 62.5,
      original_price: 78.0,
      additionalInfo: {
        category: "Dress",
        color: "Black",
        size: ["S", "M", "L"],
        stock: "In Stock",
        likes: 211,
      },
    },
  ];
});
