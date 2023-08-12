import { RiDeleteBin6Line } from "react-icons/ri";
import axios from "axios";
import React from "react";

const CartView = () => {
  const getCartDetails = () => {
    const data = JSON.parse(localStorage.getItem("cartDetails"));
    return data || {};
  };
  const [cartDetails, setCartDetails] = React.useState(getCartDetails());
  console.log(Object.keys(cartDetails));
  return (
    <div className="lg:w-5/12 lg:p-5 p-0 m-auto">
      <div className="w-full bg-white rounded-lg shadow-xl py-10 lg:px-8 overflow-hidden">
        <h1 className="text-2xl font-semibold text-center mb-5">Checkout</h1>
        <div className="flex flex-col justify-center items-center gap-5">
          {Object.keys(cartDetails).map((id) => (
            <SingleCartProduct
              key={id}
              id={id}
              setCartDetails={setCartDetails}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const SingleCartProduct = ({ id, qnt, setCartDetails }) => {
  const [cartProduct, setCartProduct] = React.useState({});
  React.useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${id}`).then((result) => {
      setCartProduct(result.data);
    });
  }, [id]);
  console.log(cartProduct);
  const deleteCartHandler = () => {
    const newCartDetails = JSON.parse(localStorage.getItem("cartDetails"));
    delete newCartDetails[id];
    setCartDetails(newCartDetails);
    localStorage.setItem("cartDetails", JSON.stringify(newCartDetails));
  };
  return (
    <div className="flex sm:flex-row flex-col justify-start gap-3 p-3 shadow-lg">
      <figure className="w-2/12">
        <img src={cartProduct?.image} alt={cartProduct?.title} />
      </figure>
      <div className=" flex-1 flex flex-row justify-between">
        <h1>{cartProduct?.title}</h1>
        <button
          className="btn btn-circle text-xl btn-error"
          onClick={deleteCartHandler}
        >
          <RiDeleteBin6Line />
        </button>
      </div>
    </div>
  );
};

export default CartView;
