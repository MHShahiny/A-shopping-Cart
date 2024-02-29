// Define UI Elements
document.addEventListener('DOMContentLoaded', function () {
    const productList = document.querySelector('#product_list');
    const cart = document.querySelector('#cart');
    const removeButton = document.querySelector('#remove_from_cart');

    // Event listener for the Add to Cart buttons
    productList.addEventListener('click', function (event) {
        if (event.target.classList.contains('add_to_cart')) {
            addToCart(event.target.parentNode);
        }
    });

    // Event listener for the Remove from Cart button
    removeButton.addEventListener('click', function () {
        removeAllItemsFromCart();
    });

    // Function to add product to the cart
    function addToCart(productNode) {
        const productName = productNode.textContent.split(' - ')[0];
        const productPrice = parseInt(productNode.textContent.split(' - ')[1].slice(1)); // Remove $ and convert to number
        const cartItem = document.createElement('li');
        cartItem.textContent = productName + " - $" + productPrice;
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.addEventListener('click', function () {
            cart.removeChild(cartItem);
        });
        cartItem.appendChild(removeButton);
        cart.appendChild(cartItem);
    }

    // Function to remove all items from the cart
    function removeAllItemsFromCart() {
        while (cart.firstChild) {
            cart.removeChild(cart.firstChild);
        }
    }
});
