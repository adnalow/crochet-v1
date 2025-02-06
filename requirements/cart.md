# Add to Cart Functionality

## Overview

This feature allows users to add products to a cart, view their selected items in a new window, and generate a PDF receipt listing all added products along with the total cost. The cart data will be saved locally for persistent access.

## Features

1. **Add to Cart**
   - Users can add products to their cart.
   - A visual indicator (e.g., cart icon with a badge) updates to reflect the number of items in the cart.

2. **Cart Overview Window**
   - Users can open a new window displaying all added products.
   - The cart page will show product details (name, quantity, price, total per item).
   - Option to remove items or update quantity.

3. **Generate Receipt**
   - A "Get Your Receipt" button will generate a PDF.
   - The PDF will list all products, their prices, quantities, and the total cost.
   - The receipt will be downloadable and viewable.

4. **Local Storage Persistence**
   - The cart data will be stored locally to maintain state even after page refresh.
   - The receipt history can be accessed later.

## Tasks

### 1. UI Design
- Create an "Add to Cart" button for each product.
- Display a cart icon with a dynamic badge showing the number of items.
- Design a separate cart page to show selected products.
- Include a "Get Your Receipt" button.

### 2. Cart Functionality
- Implement an event listener for adding items to the cart.
- Store cart data in local storage.
- Create a function to update the cart view dynamically.
- Allow users to modify or remove cart items.

### 3. PDF Generation
- Implement a function to generate a PDF listing all cart items.
- Include product details and total cost in the PDF.
- Enable PDF download or preview.

### 4. Local Storage Management
- Save the cart state in local storage.
- Retrieve cart data when the user revisits the site.
- Store and retrieve receipt history.

### 5. Testing and Optimization
- Ensure all features work across different devices.
- Optimize local storage handling to prevent performance issues.
- Test edge cases such as empty carts, large item quantities, and PDF formatting.