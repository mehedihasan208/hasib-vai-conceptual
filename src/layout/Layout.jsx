import { Link, NavLink, Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <div>
            <section className="flex justify-between p-5 my-8 shadow-xl">
                <div className="text-2xl font-bold">Amazon</div>
      <nav >
<ul className="flex gap-5">

<NavLink to="/" className={({isPending,isActive})=>isPending ? "pending" : isActive ? "bg-green-500 p-1" : " "}><li className="text-lg font-bold">Home</li></NavLink>

<NavLink to="/about" className={({isPending,isActive})=>isPending ? "pending" : isActive ? "bg-green-500 p-1" : " "}><li className="text-lg font-bold">About</li></NavLink>

<NavLink to="/product" className={({isPending,isActive})=>isPending ? "pending" : isActive ? "bg-green-500 p-1" : " "}><li className="text-lg font-bold">Product</li></NavLink>

</ul>
      </nav>
    </section>
      <Outlet></Outlet>
        </div>
    );
};

export default Layout;