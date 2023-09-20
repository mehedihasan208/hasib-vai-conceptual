import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Layout from '../layout/Layout';
import Home from '../components/Home/Home';
import About from '../components/About/About';
import Product from '../components/Product/Product';

const creatRouter = createBrowserRouter([
    {
        path:"/",
        element:<Layout></Layout>,
        children:[
            {
                path:"/",
                element:<Home></Home>
            },
            {
                path:"/about",
                element:<About></About>
            },
            {
                path:"/product",
                element:<Product></Product>,
                loader:()=>fetch( `https://dummyjson.com/products`)
            }
        ]
    }
    
])

export default creatRouter;