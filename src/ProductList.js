import React, { useState } from 'react';
import one from './components/assets/c1.jpg'
import eight from './components/assets/c8.jpg'
import book1 from './components/assets/book1.jfif'
import book2 from './components/assets/book2.jfif'
import men1 from './components/assets/men1.jfif'
import men2 from './components/assets/men2.jfif'
import women1 from './components/assets/women1.jfif'
import women2 from './components/assets/women2.jfif'
import shoes1 from './components/assets/shoes1.jfif'
import shoes2 from './components/assets/shoes2.jfif'
import accessories from './components/assets/accessories.jfif'
import accessories1 from './components/assets/accessories1.jfif'

const product = [
    { id: 1, name: 'Python', category: 'Courses', price: 1999, image: one },
    { id: 2, name: 'Tamil Story Book', category: 'Books', price: 599, image: book1 },
    { id: 3, name: 'Frog gown', category: 'Women', price: 999, image: women1 },
    { id: 4, name: 'Ajio shoe', category: 'Shoes', price: 1500, image: shoes1 },
    { id: 5, name: 'Party gown', category: 'Women', price: 490, image: women2 },
    { id: 6, name: 'English Story Book', category: 'Books', price: 299, image: book2 },
    { id: 7, name: 'Necklace', category: 'Accessories', price: 300, image: accessories },
    { id: 8, name: 'Headphones', category: 'Accessories', price: 500, image: accessories1 },
    { id: 9, name: 'React', category: 'Courses', price: 2999, image: eight },
    { id: 10, name: 'Ubuy', category: 'Men', price: 600, image: men1 },
    { id: 11, name: 'Winter jackets', category: 'Men', price: 800, image: men2 },
    { id: 12, name: 'Nike shoe', category: 'Shoes', price: 899, image: shoes2 },
        // Add more products here
    ];


const ProductList = ({ addToCart }) => {

    const [searchTerm, setSearchTerm] = useState('');
    const [filterCategory, setFilterCategory] = useState('');
    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleFilterChange = (event) => {
        setFilterCategory(event.target.value);
    };

    const filteredProducts = product.filter((product) => {
        return (
            product.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
            (filterCategory === '' || product.category === filterCategory)
        );
    });

    return (
        <div>
            <div className="p-4">
                <div className="flex space-x-4 mb-4">
                    <input
                        type="text"
                        value={searchTerm}
                        onChange={handleSearchChange}
                        placeholder="Search products..."
                        className="border p-1 rounded  w-80 border-current"
                    />
                    <select
                        value={filterCategory}
                        onChange={handleFilterChange}
                        className="border p-2 rounded"
                    >
                        <option value="">All Categories</option>
                        <option value="Courses">Courses</option>
                        <option value="Books">Books</option>                        
                        <option value="Women">Women</option>
                        <option value="Men">Men</option>
                        <option value="Shoes">Shoes</option>
                        <option value="Accessories">Accessories</option>
                        {/* Add more categories as needed */}
                    </select>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {filteredProducts.map((product) => (
                        <div key={product.id} className="border p-4 rounded">
                            <img src={product.image} alt={product.name} className="w-full h-64 object-cover mb-4" />
                            <h2 className="text-xl font-bold">{product.name}</h2>
                            <p>Category: {product.category}</p>
                            <p>Price: ${product.price}</p>
                            <button
                                className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
                                onClick={() => addToCart(product)}>
                                Add to Cart
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
export default ProductList


