import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './components/Home/Home'
import About from './components/About/About'
import Product from './components/Product/Product'
import creatRouter from './Route/Route'


// const creatRouter = createBrowserRouter([
//   {
//     path:"/",
//     element:<div>Single page creat Browser.</div>
//   },
//   {
//     path:"/product",
//     element:<div>Please Bye some Product.</div>
//   },
//   {
//     path:"/about",
//     element:<div>Do you about Myself</div>
//   }
// ])



// const creatRouter = createBrowserRouter([
//   {
//     path:"/",
//     element: <section>
//       <div className='my-10 shadow-xl'>i am well</div>
//       <Outlet></Outlet>
//     </section>,
//     children:[
//       {
//         path:"/",
//         element:<Home></Home>
//       },
//       {
//         path:"/about",
//         element:<About></About>
//       },
//       {
//         path:'/product',
//         element: <Product></Product>
//       }
//     ]
//   }
// ])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={creatRouter}></RouterProvider>
  </React.StrictMode>,
)
