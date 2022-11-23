import Cart from "./pages/Cart";
import { Routes, Route, Navigate} from 'react-router-dom';
import Arrivals from "./components/Arrivals";
import ProductList from "./pages/ProductList";
import Product from "./pages/Product";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Sustainability from "./pages/Sustainability";
import Company from "./pages/Company";
import Shipping from "./pages/Shipping";
import Refunds from "./pages/Refunds";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import Contact from "./pages/Contact";
import { useSelector } from 'react-redux';
import FAQ from "./pages/FAQ";


const App = () => {
  const user = useSelector(state => state.user.currentUser)
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/products/:category" element={<ProductList/>} />
      <Route path="/product/:id" element={<Product/>} />
      <Route path="/products" element={<Arrivals />}/>
      <Route path="/cart" element={<Cart />}/>
      <Route path="/login" element={ user ? <Navigate to="/" /> : <Login />} />
      <Route path="/register" element={ user ? <Navigate to="/" /> : <Register />} />
      <Route path="/sustainability" element={<Sustainability />}/>
      <Route path="/company" element={<Company />}/>
      <Route path="/shipping" element={<Shipping />}/>
      <Route path="/refunds" element={<Refunds />}/>
      <Route path="/terms-of-use" element={<Terms />}/>
      <Route path="/privacy-policy" element={<Privacy />}/>
      <Route path="/contact" element={<Contact />}/>
      <Route path="/faq" element={<FAQ />}/>
    </Routes>
  )
};

export default App;