import axios from "axios";
import React from "react";

const Products = () => {
  const [products, setProducts] = React.useState([]);
  React.useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((result) => {
      setProducts(result.data);
    });
  }, []);
  return (
    <div>
      <div className="overflow-x-auto overflow-y-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Title</th>
              <th>Category</th>
              <th>Price</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product?.id}>
                <th></th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={product?.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{product?.title}</div>
                    </div>
                  </div>
                </td>
                <td>
                  <span className="badge badge-ghost flex h-full badge-sm">
                    {product?.category}
                  </span>
                </td>
                <td>${product?.price}</td>
                <th>
                  <button className="btn btn-info btn-xs">Delete</button>
                </th>
              </tr>
            ))}
          </tbody>
          {/* foot */}
          <tfoot>
            <tr>
              <th></th>
              <th>Title</th>
              <th>Category</th>
              <th>Price</th>
              <th></th>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default Products;
