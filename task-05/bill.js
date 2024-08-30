document.addEventListener('DOMContentLoaded', function() {
    const billContents = document.getElementById('bill-contents');
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

    cartItems.forEach(item => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td><img src="${item.imageUrl}" alt="${item.productName}" class="product-image"></td>
            <td>${item.productId}</td>
            <td>${item.productName}</td>
            <td>${item.quantity}</td>
            <td>${item.price.toFixed(2)}</td>
            <td>${(item.price * item.quantity).toFixed(2)}</td>
        `;
        billContents.appendChild(row);
    });

    // Clear the cart after showing the bill
    localStorage.removeItem('cartItems');
});

