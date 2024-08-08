import React, { useState } from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import ProductList from './ProductList';
import Cart from './Cart';

const ProductRouter = () => {
    const [cartItems, setCart] = useState([]);

    const addToCart = (product) => {
        setCart([...cartItems, product]);
    };

    const removeFromCart = (product) => {
        setCart(cartItems.filter((item) => item.id !== product.id));
    };

    return (
        <div>
            <nav class="bg-pink-100 p-3 flex items-center justify-between shadow-xl sticky top-0 z-10">
                <h1 class="text-2xl">SHOPPING</h1>

                <ul class="flex gap-5 text-gray-600 hidden md:flex">

                    <li>
                        <Link className="hover:text-black" to="/productlist">Home</Link>
                    </li>

                    
                    <li>
                        <Link className="hover:text-black" to="/cart">Cart ({cartItems.length})</Link>
                    </li>
                </ul>
            </nav>

            <Routes>
                <Route path="/productlist" element={<ProductList addToCart={addToCart} removeFromCart={removeFromCart} />} />
                <Route path="/cart" element={<Cart cart={cartItems} removeFromCart={removeFromCart} />} />
            </Routes>
        </div>
    );
};

export default ProductRouter;


