export const cart = [];

export function addToCart(productId){
    let matchingItem;

    cart.forEach((cartItem) => {
        if(productId === cartItem.productId){ //checks if item is in the cart
            matchingItem=cartItem;
        }
    });

    let quantity= Number(document.querySelector(`.js-quantity-selector-${productId}`).value);
    if(matchingItem){ //increase the quantity
        matchingItem.quantity += quantity
    } else {
        cart.push({
            productId,
            quantity
            });
    }
}