import { useLoaderData } from "react-router-dom";
import ProductCards from "./ProductCards";

const Product = () => {


   



    const {products} = useLoaderData()
    return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
       {
        products.map(product=><ProductCards key={product.id} product={product}></ProductCards>)
       }
    </div>
    );
};

export default Product;