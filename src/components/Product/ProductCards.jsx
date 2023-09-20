import { Link } from "react-router-dom";

const ProductCards = ({product}) => {
    const {brand,category,id,images,price,rating,stock
,title} = product
    return (
        <div>
            <div className="card h-96 card-compact w-full bg-base-100 shadow-xl">
  <figure><img className="h-52 w-full p-5" src={images[0]} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    {/* <p><div className="rating rating-xs">
  <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" checked />
  <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
</div> {rating}</p> */}
    <div className="card-actions flex justify-around">
        <h1 className="text-3xl font-bold">{price}</h1>
     <Link to={`/products/${id}`}> <button className="btn btn-primary">Buy Now</button></Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default ProductCards;