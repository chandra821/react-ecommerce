import { BrowserRouter, Route } from "react-router-dom";
import HomePage from "./components/Home-page";
import "./App.scss";
// import NotFound from "./components/Not-found";
import Shop from "./components/pages/shop/Shop";
import SingleProduct from "./components/single-product/Single-product";
import CartPage from "./components/pages/cart-page/Cart-page";
import Checkout from "./components/checkout/checkout";
import Success from "./components/checkout/stripe-checkout/Success";
import Canceled from "./components/checkout/stripe-checkout/Canceled";
import { Provider, useDispatch } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./store";
import Login from "./components/Login/Login";
import SignupPage from "./components/Signup/Signup";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import Contact from "./components/Contact/Contact";
import Products from "./components/Products/Products";
import Details from "./components/Details/Details";
import Profile from "./components/Profile/Profile";
// import AddProduct from "./components/AddProduct/AddProduct";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useState } from "react";
import PrivateRoute from "./PrivateRoute";
import { AuthProvider } from "./AuthContext";
// import SerchMenu from "./components/ProductSearch/SerchMenu";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem("isAuthenticated") === "true"
  );

  useEffect(() => {
    localStorage.setItem("isAuthenticated", isAuthenticated);
  }, [isAuthenticated]);

  return (
    <div className="App">
      <AuthProvider>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <BrowserRouter>
              <Route exact path="/" component={HomePage} />

              <Route path="/login">
                <Login setIsAuthenticated={setIsAuthenticated} />
              </Route>
              <PrivateRoute
                path="/cart"
                component={CartPage}
                isAuthenticated={isAuthenticated}
              />

              <Route path="/details/:id" component={Details} />
              {/* <Route path="/searchmenu" component={SerchMenu} /> */}
              <Route path="/about" component={About} />
              {/* <Route path="/addproduct" component={AddProduct} /> */}
              <Route path="/services" component={Services} />
              <Route path="/contact" component={Contact} />
              <Route path="/products/:slug" component={Products} />
              <Route path="/signup" component={SignupPage} />
              <Route path="/shop" component={Shop} />
              <Route path="/product/:id" component={SingleProduct} />
              {/* <PrivateRoute path="/cart" component={CartPage} /> */}
              <Route path="/checkout" component={Checkout} />
              <Route path="/profile" component={Profile} />
              <Route path="/success" component={Success} />
              <Route path="/canceled" component={Canceled} />
              {/* <Route path="*" component={NotFound} /> */}
              <ToastContainer />
            </BrowserRouter>
          </PersistGate>
        </Provider>
      </AuthProvider>
    </div>
  );
}

export default App;
