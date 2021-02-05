//exporting the UI class function.

export default class UI {
    static getProductsToUI(products) {
        products.map(product => {
            //percentage calculation
            const percent = (Math.round(((product.oldPrice - product.price) / product.price) * 100));
            //use queryselectorAll method to use slider library everywhere at once.
            let productWrappers = document.querySelectorAll(".product-wrapper")

            productWrappers.forEach(productWrapper => {
                productWrapper.innerHTML += `
                <div class="splide__slide" id="${product.productId}">
                    <a href="${product.url}" class="nav-link" target="_blank">
                        <div class="image-wrapper">
                            <img src="${product.image}" alt="#">
                        </div>
                        <div class="product-detail">
                            <h5 class="product-title">${product.name}</h5>
                            <div class="category">
                                <p>${product.params.rebsorte}</p>
                            </div>
                            <div class="price-container">
                                <span class="product-price">${product.priceText}</span>
                                &nbsp;&nbsp;
                                ${product.oldPriceText != "" ? `<del class="product-old-price">${product.oldPriceText}</del>`
                                :""
                            }                                
                            </div>
                            <div class="best-price">
                                <span>${product.params.basePrice}</span>
                            </div>
                        </div>
                    </a>
                    <div class="badges-wrapper">
                        ${!isNaN(percent) ? `<div class="discount-badge">
                                                <span>${percent}</span><small>%</small>
                                            </div>` : ""}

                        ${product.params.likeCount != "" ? `<div class="likeCount-badge">
                                                                <small><i class="far fa-heart"></i></small>&nbsp;<span>${product.params.likeCount}</span>
                                                            </div>` : ""}

                        ${(product.params.isNew === "true") ? `<div class="isNew-badge">
                                                                    <span>NEU</span>
                                                                </div>` : ""}
                    </div>
                </div>
    `
            });
        });
    }
}