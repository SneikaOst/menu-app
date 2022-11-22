import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { products } from "./menuList";
import { useDispatch } from "react-redux";
import { addProductListAction } from "./store/reducers/productStore";
import Products from "./pages/Products/Products.js";
import Basket from "./pages/Basket/Basket.js";
import ProductDetails from "./pages/ProductDetails/ProductDetails.js";
import NotFound from "./pages/NotFound/404";
import AuthPage from "./pages/Auth/Auth.js";


function App() {
  const dispatch = useDispatch();
  const addProductList = (list) => dispatch(addProductListAction(list));

  useEffect(() => {
    addProductList(products);
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/details/:productId" element={<ProductDetails />} />
        <Route path="/basket" element={<Basket />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
