# Stationery Shop

## Overview

The Stationery Shop is a web-based API Service Application. It Provides API for managing stationery shop. This application used Node.js, Express, TypeScript, MongoDB and Mongoose. It offer easy-to-use features for adding, updating, and deleting items. It also helps to order and manage inventroy stocks.

## Features:

### Features for Products:

1. **Add Product** : Add product with details (eg. Name, Brand Name, Price , Category, Description, Quantity and inStock),
2. **Get Product**: Get all the products are already added with full details.
3. **Get Specific Product By Id**: Can get specific product by Id with full product details.
4. **Get Product By Query**: Can get Product by query with Name or Brand or Categroy .
5. **Update Product**: Can update specific product by product id.
6. **Delete Product**: Can delete product by specific product id.

### Features for Order:

1. **Create Order**: Can create a order with user email and write product quantity . It will create a product in Orders collection. Also the quantity of product will reduce from specific product.
2. **Calculate Revenue**: Calculate revenue by summation all total price from all orders.

### Error Handlings:

#### Proper error handling for invalid input, invalid email, missing data, and insufficient stock.

### Technology Used:

1. Node.js and express - As backend framework.
2. Mongodb with mongoose - For Database Management .
3. Typescript - As programming language.

## Project installation Locally .

1. Clone the repository:

```bash
git clone https://github.com/mirzanahid/stationery-shop
```

2.  Go to the project directory and Install npm:

```bash
cd stationery-shop;
npm install;
```

3. To run this project you need Environment Variables. First create .env file in stationery-shop main directory and add these variables.

```env
NODE_ENV=development
PORT=5000
DATABASE_URL=mongodb+srv://<USERNAME>:<PASSWORD>@cluster0.vsmf7bv.mongodb.net/stationery-shop?retryWrites=true&w=majority&appName=Cluster0
```

### Scripts for manage this application.

1. To run this application in development:

```bash
npm run start:dev
```

2. To build this application:

```bash
npm run build
```

3. To Use lint to find problem:

```bash
npm run lint
```

4. To Use lint fix to auto fix problem:

```bash
npm run lint:fix
```

5. To format codes:

```bash
npm run format
```

## API Endpoints:

# For Product Management:

1. **Create a Product**:

```bash
/api/products
Method: POST
```

2. **Get all Products**:

```bash
/api/products
Method: GET
```

3. **Get Product by Query Search**:

```bash
/api/products?searchTerm=category
Method: GET
```
*SearchTerm can be name, brand, category

4. **Get specific Product by productId**:

```bash
/api/products/productId
Method: GET
```

5. **Update Product**:

```bash
/api/products/productId
Method: PUT
```
6. **Delete Product**:

```bash
/api/products/productId
Method: DELETE
```
# For Order Management:

1. **Create a Order**:

```bash
/api/orders
Method: POST
```

2. **Get Revenue from Orders**:

```bash
/api/orders/revenue
Method: GET
```


## Necessary Links:

1. **Github Link**: https://github.com/mirzanahid/stationery-shop
2. **Live Links**: https://stationery-shop-git-main-mirzanahids-projects.vercel.app/
3. **Video Explanation Links**:  
