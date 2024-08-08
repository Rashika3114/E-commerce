import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Signup from './Signup';
import Login from './Login';
// import ProductRouter from './ProductRouter';
import { useState } from 'react';

const AuthRouter = () => {
    const [users, setuser] = useState([
        {
            emailid: "rasika@gmail.com",
            pwd: "2024"
        }
    ])
    return (
        <Routes>
            <Route path='/' element={<Login users={users} setuser={setuser} />}></Route>
            <Route path='/signup' element={<Signup users={users} setuser={setuser} />}></Route>
            {/* <Route path='/productrouter' element={<ProductRouter />}></Route> */}
            
        </Routes>
    );
};

export default AuthRouter;
