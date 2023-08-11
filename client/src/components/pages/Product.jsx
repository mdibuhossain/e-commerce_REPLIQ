import axios from "axios";
import React from "react";
import { useParams } from "react-router";

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = React.useState({});
  const [cartCount, setCartCount] = React.useState(0);
  React.useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${id}`).then((result) => {
      setProduct(result?.data);
    });
  }, [id]);
  console.log(product);
  return (
    <div className="lg:w-9/12 p-5 m-auto">
      <div className="flex w-full bg-white rounded-lg shadow-xl p-10 overflow-hidden flex-wrap">
        <div className="max-w-[320px] overflow-hidden">
          <figure className="p-10">
            <img src={product?.image} alt={product?.title} />
          </figure>
        </div>
        <div className="md:block hidden w-[5vw]" />
        <div className="flex-grow">
          <div className="w-full">
            <h1 className="md:text-2xl text-lg font-bold">{product?.title}</h1>
            <div className="badge badge-ghost">{product?.category}</div>
            <div className="flex items-center gap-1">
              {product?.rating?.rate}
              <div className="rating w-5">
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
              </div>
            </div>
            <p className="font-extrabold text-2xl py-7 text-green-800">
              ${product?.price}
            </p>
          </div>
          <div className="flex flex-col items-center gap-3 w-[10rem] overflow-hidden">
            <div className="join join-vertical join-horizontal w-full">
              <button
                className="btn btn-circle join-item"
                onClick={() => setCartCount(Math.max(0, cartCount - 1))}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                >
                  <path d="M0 10h24v4h-24z" />
                </svg>
              </button>
              <input
                type="text"
                readOnly
                value={cartCount}
                className="input join-item text-center focus:outline-none w-full max-w-xs"
              />
              <button
                className="btn btn-circle join-item"
                onClick={() => setCartCount(cartCount + 1)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z" />
                </svg>
              </button>
            </div>
            <button className="btn btn-success w-full">Add to cart</button>
          </div>
          <div className="py-5 xl:w-[512px] text-justify">
            <p>{product?.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
