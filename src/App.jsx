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
import Account from "./pages/Account";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import CollectionsList from "./pages/CollectionsList";
import Information from './pages/Information';
import SubmitReview from './pages/SubmitReview';
import GetReset from './pages/GetReset';
import PostReset from './pages/PostReset';
import Rehash from './pages/Rehash';
import EmailMarketingSuccess from './pages/EmailMarketingSuccess';
import NewProduct from './pages/Admin/NewProduct';
import AdminHome from './pages/Admin/Home';
import NewCategory from './pages/Admin/NewCategory';
import NewUGC from './pages/Admin/NewUGC';

const App = () => {
  const user = useSelector(state => state.user.currentUser);
  return (
    <Routes>
      <Route exact path="/" element={<Home />}/>
      <Route path="/collections" element={<CollectionsList />}/>
      <Route path="/products/:category" element={<ProductList/>} />
      <Route path="/product/:id" element={<Product/>} />
      <Route path="/submit-review/:id" element={<SubmitReview />} />
      <Route path="/products" element={<Arrivals />}/>
      <Route path="/checkout" element={ user && user.address !== undefined ? <Checkout /> : <Navigate to="/checkout/information" /> } />
      <Route path="/checkout/information" element={<Information />} />
      <Route path="/cart" element={<Cart />}/>
      <Route path="/login" element={ user ? <Navigate to="/account" /> : <Login />} />
      <Route path="/register" element={ user ? <Navigate to="/account" /> : <Register />} />
      <Route path='/reset' element={<GetReset />} />
      <Route path='/reset/:token' element={<PostReset />} />
      <Route path="/account" element= { user ? <Account /> : <Navigate to="/login" /> } />
      <Route path="/sustainability" element={<Sustainability />}/>
      <Route path="/company" element={<Company />}/>
      <Route path="/shipping" element={<Shipping />}/>
      <Route path="/refunds" element={<Refunds />}/>
      <Route path="/terms-of-use" element={<Terms />}/>
      <Route path="/privacy-policy" element={<Privacy />}/>
      <Route path="/contact" element={<Contact />}/>
      <Route path="/pages/rehash" element={<Rehash />} />
      <Route path="/faq" element={<FAQ />}/>
      <Route path="/email-subscribe/success" element={<EmailMarketingSuccess />}/>
      <Route path="/admin/" element={ user && user.isAdmin ? <AdminHome /> : <Navigate to="/" />} />
      <Route path="/admin/newproduct" element={ user && user.isAdmin ? <NewProduct /> : <Navigate to="/" />} />
      <Route path="/admin/newcategory" element={ user && user.isAdmin ? <NewCategory /> : <Navigate to="/" />} />
      <Route path="/admin/newugc" element={ user && user.isAdmin ? <NewUGC /> : <Navigate to="/" />} />
    </Routes>
  )
};

export default App;