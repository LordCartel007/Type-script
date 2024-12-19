-- Users/Customers
CREATE TABLE users (
    user_id INT PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    first_name VARCHAR(100),
    last_name VARCHAR(100),
    phone VARCHAR(20),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    last_login TIMESTAMP
);



-- Product Categories
CREATE TABLE categories (
    category_id INT PRIMARY KEY,
    parent_category_id INT REFERENCES categories(category_id),
    name VARCHAR(100),
    description TEXT,
    is_active BOOLEAN
);

-- Products
CREATE TABLE products (
    product_id INT PRIMARY KEY,
    category_id INT REFERENCES categories(category_id),
    name VARCHAR(255),
    description TEXT,
    price DECIMAL(10,2),
    cost_price DECIMAL(10,2),
    stock_quantity INT,
    is_active BOOLEAN,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Product Images
CREATE TABLE product_images (
    image_id INT PRIMARY KEY,
    product_id INT REFERENCES products(product_id),
    image_url VARCHAR(255),
    alt_text VARCHAR(255),
    is_primary BOOLEAN,
    display_order INT
);

-- Product Variants (for different sizes, colors, etc.)
CREATE TABLE product_variants (
    variant_id INT PRIMARY KEY,
    product_id INT REFERENCES products(product_id),
    sku VARCHAR(100) UNIQUE,
    attributes JSON, -- {color: "red", size: "XL"}
    price DECIMAL(10,2),
    stock_quantity INT
);

-- Orders
CREATE TABLE orders (
    order_id INT PRIMARY KEY,
    user_id INT REFERENCES users(user_id),
   order_status VARCHAR(50),
    payment_status VARCHAR(50),
    total_amount DECIMAL(10,2),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Order Items
CREATE TABLE order_items (
    order_item_id INT PRIMARY KEY,
    order_id INT REFERENCES orders(order_id),
    product_id INT REFERENCES products(product_id),
    variant_id INT REFERENCES product_variants(variant_id),
    quantity INT,
    unit_price DECIMAL(10,2),
    subtotal DECIMAL(10,2)
);

-- Shopping Cart
CREATE TABLE cart (
    cart_id INT PRIMARY KEY,
    user_id INT REFERENCES users(user_id),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    last_modified TIMESTAMP
);

-- Cart Items
CREATE TABLE cart_items (
    cart_item_id INT PRIMARY KEY,
    cart_id INT REFERENCES cart(cart_id),
    product_id INT REFERENCES products(product_id),
    variant_id INT REFERENCES product_variants(variant_id),
    quantity INT,
    added_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Reviews
CREATE TABLE reviews (
    review_id INT PRIMARY KEY,
    product_id INT REFERENCES products(product_id),
    user_id INT REFERENCES users(user_id),
    rating INT CHECK (rating BETWEEN 1 AND 5),
    comment TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Coupons


-- Inventory Tracking
CREATE TABLE inventory_transactions (
    transaction_id INT PRIMARY KEY,
    product_id INT REFERENCES products(product_id),
    variant_id INT REFERENCES product_variants(variant_id),
    transaction_type VARCHAR(50), -- in/out
    quantity INT,
    reference_id VARCHAR(100), -- order_id or purchase_id
    transaction_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

