import { Route, Routes } from "react-router-dom";
import Layout from "./components/shared/Layout";
import Overview from "./components/pages/admin/overview";
import Customers from "./components/pages/admin/customers";
import Orders from "./components/pages/admin/orders";
import Products from "./components/pages/admin/products";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Overview />} />
          <Route path="customers" element={<Customers />} />
          <Route path="orders" element={<Orders />} />
          <Route path="products" element={<Products />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
