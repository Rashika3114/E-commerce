import React from 'react';

const Cart = ({ cart, removeFromCart }) => {
    return (
        <div className="p-4">
            <h2 className="text-2xl font-bold "> Your Favorite Cart</h2>
            {cart.length === 0 ? (
            <p>Your cart is empty.</p>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
                    {cart.map((item, index) => (
                        <div key={item.id}>
                            <img src={item.image} alt={item.name} className="w-80 h-64 mb-4" />
                            <h2 className="text-xl font-bold">{item.name}</h2>
                            <p>Category: {item.category}</p>
                            <p>Price: ${item.price}</p>
                            <button
                                className="bg-red-500 text-white px-2 py-2 rounded mt-4"
                                onClick={() => removeFromCart(item)}>
                                Remove
                            </button>
                        </div>
                    ))}
                </div>

            )}
        </div>
    );
};

export default Cart;
