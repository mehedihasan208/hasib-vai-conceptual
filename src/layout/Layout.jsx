import { Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <div>
            <section className="flex justify-between p-5 my-8 shadow-xl">
                <div className="text-2xl font-bold">Amazon</div>
      <nav >
        <ul className="flex gap-5">
            <li className="text-lg font-bold"><a href='/'>Home</a></li>
            <li className="text-lg font-bold"><a href='/about'>About</a></li>
            <li className="text-lg font-bold"><a href='/product'>Product</a></li>
        </ul>
      </nav>
    </section>
      <Outlet></Outlet>
        </div>
    );
};

export default Layout;