import { Route, Routes } from "react-router-dom";
import Layout from "./components/shared/Layout";
import Overview from "./components/pages/admin/overview";
import Customers from "./components/pages/admin/customers";
import Orders from "./components/pages/admin/orders";
import Products from "./components/pages/admin/products";
import Home from "./components/pages/Home";
import Login from "./components/pages/Login";
import NavBar from "./components/shared/NavBar";
import Product from "./components/pages/Product";
import Registration from "./components/pages/Registration";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route index element={<Home />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="login" element={<Login />} />
          <Route path="registration" element={<Registration />} />
        </Route>
        <Route path="/dashboard" element={<Layout pathname="/dashboard" />}>
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
