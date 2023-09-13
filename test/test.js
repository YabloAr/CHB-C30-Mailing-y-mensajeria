const cart = [10, 15, 20, 40];
const stock = [10, 12, 25, 32];
const purchased = [];
const backToCart = [];

console.log("Cart:", cart)
console.log("Stock:", stock)

for (let i = 0; i < cart.length; i++) {
    if (cart[i] <= stock[i]) {
        // Full stock is available
        stock[i] -= cart[i]; // Subtract cart quantity from stock
        purchased.push(cart[i]); // Add the purchased quantity to the purchased array
        cart[i] = 0; // Remove all products from the cart
    } else {
        // Not enough stock available
        purchased.push(stock[i]); // Add available stock to the purchased array
        backToCart.push(cart[i] - stock[i]); // Add the remaining quantity to the out of stock array
        cart[i] -= stock[i]; // Remove available stock from the cart
        stock[i] = 0; // Set stock to 0 as it's all sold
    }
}

console.log("Purchased:", purchased);
console.log("Out of Stock:", backToCart);
console.log("Updated Stock:", stock);
console.log("Updated Cart:", cart);
