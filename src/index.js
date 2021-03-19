//use the import method to use functions and webpack.
import UI from "./ui";
import {
    products
} from "./request";

console.log(products);

//send a get request with the request method from the request file.
//created a sync structure with .then.

const getProducts = () => {
    console.log(products);
    //send the incoming data as a parameter to the ui function to use.
    UI.getProductsToUI(products)
}
getProducts()

//use queryselectorAll method to use slider library everywhere at once.
const productWrappers = document.querySelectorAll(".product-wrapper")

productWrappers.forEach(productWrapper => {
    $(productWrapper).slick({
        infinite: true,
        speed: 100,
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: false,
        nextArrow: '<a style="font-size: 1rem;\
            position: absolute;\
            top: 50%;\
            right: -.6rem;\
            cursor: pointer;\
            color: #ffffff;\
            "\
            type="button" class="fas fa-chevron-right"></a>',
        prevArrow: '<a style="font-size: 1rem;\
            position: absolute;\
            top: 50%;\
            left: -.6rem;\
            cursor: pointer;\
            color: #ffffff;\
            "\
            type="button" class="fas fa-chevron-left"></a>',
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
});