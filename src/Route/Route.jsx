import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Layout from '../layout/Layout';
import Home from '../components/Home/Home';
import About from '../components/About/About';
import Product from '../components/Product/Product';
import Products from '../components/Products/Products';

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
            },
            {
                path:"/products/:id",
                element:<Products></Products>,
                loader:({params})=>fetch(`https://dummyjson.com/products/${params.id}`)
            }
        ]
    }
    
])

export default creatRouter;