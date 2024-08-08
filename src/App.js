import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AuthRouter from './AuthRouter';
import ProductRouter from './ProductRouter';



const App = () => {
    return (
        <Router>
            <div>
                <AuthRouter />
                <ProductRouter />
               
                
            </div>
        </Router>
    );
};

export default App;
