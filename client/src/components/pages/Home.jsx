import React from "react";
import TopCarousel from "../TopCarousel";
import axios from "axios";
import { useNavigate } from "react-router";
import useUtil from "../../hooks/useUtil";

const Home = () => {
  const { cartDetails, setCartDetails, setDataToLocalStorage } = useUtil();
  const [products, setProducts] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const navigate = useNavigate();

  const addToCartHandler = (id) => {
    const newCartCount = { ...cartDetails };
    newCartCount[id] = newCartCount[id] ? newCartCount[id] + 1 : 1;
    setCartDetails(newCartCount);
    setDataToLocalStorage("cartDetails", newCartCount);
  };

  const navigateHandler = (id) => {
    navigate(`product/${id}`);
  };

  React.useEffect(() => {
    setIsLoading(true);
    axios.get("https://fakestoreapi.com/products").then((result) => {
      setProducts(result?.data);
      setIsLoading(false);
    });
  }, []);

  return (
    <div className="lg:w-9/12 p-5 m-auto">
      <TopCarousel />
      <div className="flex flex-col items-center my-14">
        <b className="text-xl">Featured Products</b>
        <p>Check & Get Your Desired Product!</p>
      </div>
      <div className="m-auto flex flex-wrap justify-center gap-10">
        {isLoading ? (
          <span className="loading loading-spinner loading-lg"></span>
        ) : (
          products.map((product) => (
            <div key={product?.id} className="card w-80 bg-white shadow-xl">
              <figure
                className="p-10 pb-0 hover:cursor-pointer"
                onClick={() => navigateHandler(product?.id)}
              >
                <img
                  src={product?.image}
                  alt={product?.title}
                  className="h-[150px]"
                />
              </figure>
              <div className="card-body">
                <h2
                  className="card-title hover:text-light-green-800 cursor-pointer"
                  onClick={() => navigateHandler(product?.id)}
                >
                  {product?.title}
                </h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-between items-center">
                  <span>${product?.price}</span>
                  <button
                    className="btn btn-secondary"
                    onClick={() => addToCartHandler(product?.id)}
                  >
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Home;
