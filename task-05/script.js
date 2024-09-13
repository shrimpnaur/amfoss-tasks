const terminalOutput = document.querySelector('.terminal-output');
const terminalInput = document.querySelector('input[type="text"]');

// Initialize cartItems
let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];


window.addEventListener('load', function() {
    // Ensuring user interaction to play the audio
    document.body.addEventListener('click', playAudioOnce);
});

function playAudioOnce() {
    var audio = document.getElementById('welcome-audio');
    audio.play();
    
    document.body.removeEventListener('click', playAudioOnce);
}





function handleInput(command) {
    const action = command.trim().toLowerCase();
    const args = action.split(" ");

    switch (args[0]) {
        case 'help':
            viewCommand();
            break;
        case 'list':
            list();
            break;
        case 'clear':
            clearTerminal();
            break;
        case 'search':
            searchProduct(args.slice(1).join(" "));
            break;
        case 'sort':
            if (args[1] === 'price') {
                sortProducts('price');
            } else if (args[1] === 'name') {
                sortProducts('title');
            } else {
                terminalOutput.innerHTML += "Invalid sort option. Use 'sort price' or 'sort name'.<br>";
            }
            break;
        case 'details':
            if (args[1]) {
                fetchProductDetails(args[1]);
            } else {
                terminalOutput.innerHTML += "Please provide a product ID.<br>";
            }
            break;
        case 'add':
            addProductToCart(args[1]);
            break;
        case 'remove':
            if (args[1]) {
                removeProductById(args[1]);
            } else {
                terminalOutput.innerHTML += "Please provide a product ID.<br>";
            }
            break;
        case 'cart':
            viewCart();
            break;
        case 'buy':
            // Store the current cart items in local storage and redirect to the bill page
            localStorage.setItem('cartItems', JSON.stringify(cartItems));
            window.location.href = 'bill.html';
            break;
        default:
            terminalOutput.innerHTML += `Invalid command: ${command}<br>`;
            break;
    }

    terminalInput.value = '';
}

// Display commands
function viewCommand() {
    terminalOutput.innerHTML += "Available Commands:<br>";
    terminalOutput.innerHTML += "- <strong>help</strong>: Show available commands<br>";
    terminalOutput.innerHTML += "- <strong>list</strong>: Fetch products from the API<br>";
    terminalOutput.innerHTML += "- <strong>clear</strong>: Clear the terminal<br>";
    terminalOutput.innerHTML += "- <strong>search [product_name]</strong>: Search for a product by name<br>";
    terminalOutput.innerHTML += "- <strong>sort [price|name]</strong>: Sort products by price or name<br>";
    terminalOutput.innerHTML += "- <strong>details [product_id]</strong>: Get product details by ID<br>";
    terminalOutput.innerHTML += "- <strong>add [product_id]</strong>: Add a product to the cart by ID<br>";
    terminalOutput.innerHTML += "- <strong>remove [product_id]</strong>: Remove a product by ID<br>";
    terminalOutput.innerHTML += "- <strong>cart</strong>: View all products in the cart<br>";
}

// Fetch products from API 
function list() {
    fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(json => {
            displayProducts(json);
        })
        .catch(error => {
            terminalOutput.innerHTML += `<br>Error fetching products: ${error.message}<br>`;
        });
}

// Display 
function displayProducts(products) {
    terminalOutput.innerHTML += "<br>Products:<br>";
    products.forEach(product => {
        terminalOutput.innerHTML += `<div><strong>${product.title}</strong> - $${product.price}</div>`;
    });
}

// Clear terminal
function clearTerminal() {
    terminalOutput.innerHTML = '';
}

// Search for a product by name
function searchProduct(productName) {
    if (!productName) {
        terminalOutput.innerHTML += "Please provide a product name to search.<br>";
        return;
    }
    fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(json => {
            const filteredProducts = json.filter(product =>
                product.title.toLowerCase().includes(productName.toLowerCase())
            );
            if (filteredProducts.length > 0) {
                displayProducts(filteredProducts);
            } else {
                terminalOutput.innerHTML += `<br>No products found with name "${productName}".<br>`;
            }
        })
        .catch(error => {
            terminalOutput.innerHTML += `<br>Error searching products: ${error.message}<br>`;
        });
}

// Sort products by price or name
function sortProducts(key) {
    fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(json => {
            const sortedProducts = json.sort((a, b) => {
                if (key === 'price') {
                    return a.price - b.price;
                } else if (key === 'title') {
                    return a.title.localeCompare(b.title);
                }
            });
            displayProducts(sortedProducts);
            updateProductCatalog(sortedProducts);
        })
        .catch(error => {
            terminalOutput.innerHTML += `<br>Error sorting products: ${error.message}<br>`;
        });
}


// Update the product catalog UI
function updateProductCatalog(products) {
    const catalogContainer = document.querySelector('.product-catalog');
    catalogContainer.innerHTML = ''; // Clear the current catalog

    products.forEach(product => {
        const productItem = document.createElement('div');
        productItem.className = 'product-item';
        productItem.setAttribute('data-product-name', product.title); // Store product name for sorting
        productItem.setAttribute('data-price', product.price);
        productItem.setAttribute('data-discounted-price', product.discountedPrice || product.price);

        productItem.innerHTML = `
            <img src="${product.image}" alt="${product.title}">
            <div class="product-icons">
                <img src="heart-regular.svg" class="icon-heart" alt="Heart"/>
                <img src="cart-shopping-solid.svg" class="icon-cart" alt="Cart"/>
            </div>
            <div class="product-details">
                <div class="price">Price: $${product.price}</div>
                <div class="discounted-price">Discounted: $${product.discountedPrice || product.price}</div>
            </div>
        `;
        
        catalogContainer.appendChild(productItem);
    });
}

// Fetch product details by ID
function fetchProductDetails(productId) {
    fetch(`https://fakestoreapi.com/products/${productId}`)
        .then(res => res.json())
        .then(product => {
            terminalOutput.innerHTML += `<br>Product Details:<br>`;
            terminalOutput.innerHTML += `<div><strong>${product.title}</strong><br>`;
            terminalOutput.innerHTML += `Price: $${product.price}<br>`;
            terminalOutput.innerHTML += `Description: ${product.description}<br>`;
            terminalOutput.innerHTML += `Category: ${product.category}</div>`;
        })
        .catch(error => {
            terminalOutput.innerHTML += `<br>Error fetching product details: ${error.message}<br>`;
        });
}

// Add a product
function addProductToCart(productId) {
    fetch(`https://fakestoreapi.com/products/${productId}`)
        .then(res => res.json())
        .then(product => {
            let existingItem = cartItems.find(item => item.productId === parseInt(productId));
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                cartItems.push({
                    productId: parseInt(productId),
                    productName: product.title,
                    price: product.price,
                    quantity: 1
                });
            }
            localStorage.setItem('cartItems', JSON.stringify(cartItems));
            terminalOutput.innerHTML += `<br>Product ID ${productId} added to cart.<br>`;
        })
        .catch(error => {
            terminalOutput.innerHTML += `<br>Error adding product to cart: ${error.message}<br>`;
        });
}

// Remove a product 
function removeProductById(productId) {
    cartItems = cartItems.filter(item => item.productId !== parseInt(productId));
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    terminalOutput.innerHTML += `<br>Product ID ${productId} removed from cart.<br>`;
}

// View all products 
function viewCart() {
    terminalOutput.innerHTML += "<br>Cart Contents:<br>";
    if (cartItems.length > 0) {
        cartItems.forEach(item => {
            terminalOutput.innerHTML += `Product ID: ${item.productId}, Quantity: ${item.quantity}<br>`;
        });
    } else {
        terminalOutput.innerHTML += "No items in the cart.<br>";
    }
}




terminalInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        handleInput(terminalInput.value);
    }
});
