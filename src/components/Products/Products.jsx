import { useLoaderData } from "react-router-dom";

const Products = () => {
    const almost = useLoaderData()
    console.log(almost)
    return (
    <div>
        <div><h2>mere rasker kalmal</h2></div>
    </div>
    );
};

export default Products;