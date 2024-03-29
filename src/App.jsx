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
import NewBanner from './pages/Admin/NewBanner';
import NewDiscount from './pages/Admin/NewDiscount';
import AdminProductList from './pages/Admin/ProductList';
import Success from './pages/Success';
import NotFound from './pages/NotFound';
import EditProduct from './pages/Admin/EditProduct';
import OrderList from './pages/Admin/OrderList';
import EditOrder from './pages/Admin/EditOrder';
import OrderDetail from './pages/Admin/OrderDetail';
import ThankYou from './pages/ThankYou';
import FeedForm from './pages/FeedForm';
import EmailMarketingSuccessV2 from './pages/EmailMarketingSuccessV2';
import NewAnnouncement from './pages/Admin/NewAnnouncement';
import UsersList from './pages/Admin/UsersList';
import EditUser from './pages/Admin/EditUser';
import EditBanner from './pages/Admin/EditBanner';
import BannerList from './pages/Admin/BannerList';
import EditCategory from './pages/Admin/EditCategory';
import CategoryList from './pages/Admin/CategoryList';
import UGCList from './pages/Admin/UGCList';
import EditUGC from './pages/Admin/EditUGC';
import DiscountsList from './pages/Admin/DiscountsList';
import EditDiscount from './pages/Admin/EditDiscount';
import Announcements from './pages/Admin/Announcements';
import EditAnnouncement from './pages/Admin/EditAnnouncement';
import EmailV1SubscribersList from './pages/Admin/EmailV1SubscribersList';
import EmailV2SubscribersList from './pages/Admin/EmailV2SubscribersList';

const App = () => {
  const user = useSelector(state => state.user.currentUser);
  return (
    <Routes>
      <Route exact path="/" element={<Home />}/>
      <Route path="/collections" element={<CollectionsList />}/>
      <Route path="/products/:category" element={<ProductList/>} />
      <Route path="/product/:slug" element={<Product/>} />
      <Route path="/submit-review/:id" element={<SubmitReview />} />
      <Route path="/products" element={<Arrivals />}/>
      <Route path="/checkout" element={ user && user.address !== undefined ? <Checkout /> : <Navigate to="/checkout/information" /> } />
      <Route path="/checkout/information" element={user ? <Information /> : <Navigate to="/login" />} />
      <Route path="/cart" element={<Cart />}/>
      <Route path="/payment/success" element={<Success />} />
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
      <Route path="/thank-you" element={<ThankYou />} />
      <Route path="/feedback" element={<FeedForm />} />
      <Route path="/email/:subscriber/signup/success" element={<EmailMarketingSuccessV2 />} />
      <Route path="/email-subscribe/success" element={<EmailMarketingSuccess />}/>
      <Route path="/admin/" element={ user && user.isAdmin ? <AdminHome /> : <Navigate to="/" />} />
      <Route path="/admin/newproduct" element={ user && user.isAdmin ? <NewProduct /> : <Navigate to="/" />} />
      <Route path="/admin/newcategory" element={ user && user.isAdmin ? <NewCategory /> : <Navigate to="/" />} />
      <Route path="/admin/newugc" element={ user && user.isAdmin ? <NewUGC /> : <Navigate to="/" />} />
      <Route path="/admin/newbanner" element={ user && user.isAdmin ? <NewBanner /> : <Navigate to="/" />} />
      <Route path="/admin/newannouncement" element={ user && user.isAdmin ? <NewAnnouncement /> : <Navigate to="/" />} />
      <Route path="/admin/newdiscount" element={ user && user.isAdmin ? <NewDiscount /> : <Navigate to="/" />} />
      <Route path="/admin/products" element={ user && user.isAdmin ? <AdminProductList /> : <Navigate to="/" />} />
      <Route path="/admin/categories" element={ user && user.isAdmin ? <CategoryList /> : <Navigate to="/" />} />
      <Route path="/admin/banners" element={ user && user.isAdmin ? <BannerList /> : <Navigate to="/" />} />
      <Route path="/admin/notifications" element={ user && user.isAdmin ? <Announcements /> : <Navigate to="/" />} />
      <Route path="/admin/users" element={ user && user.isAdmin ? <UsersList /> : <Navigate to="/" />} />
      <Route path="/admin/orders" element={ user && user.isAdmin ? <OrderList /> : <Navigate to="/" />} />
      <Route path="/admin/ugclist" element={ user && user.isAdmin ? <UGCList /> : <Navigate to="/" />} />
      <Route path="/admin/discounts" element={ user && user.isAdmin ? <DiscountsList /> : <Navigate to="/" />} />
      <Route path="/admin/email-v1" element={ user && user.isAdmin ? <EmailV1SubscribersList /> : <Navigate to="/" />} />
      <Route path="/admin/email-v2" element={ user && user.isAdmin ? <EmailV2SubscribersList /> : <Navigate to="/" />} />
      <Route path="/admin/orders/:orderId" element={ user && user.isAdmin ? <OrderDetail /> : <Navigate to="/" />} />
      <Route path="/admin/products/edit/:productId" element={ user && user.isAdmin ? <EditProduct /> : <Navigate to="/" />} />
      <Route path="/admin/orders/edit/:orderId" element={ user && user.isAdmin ? <EditOrder /> : <Navigate to="/" />} />
      <Route path="/admin/users/edit/:userId" element={ user && user.isAdmin ? <EditUser /> : <Navigate to="/" />} />
      <Route path="/admin/notification/edit/:notificationId" element={ user && user.isAdmin ? <EditAnnouncement /> : <Navigate to="/" />} />
      <Route path="/admin/banners/edit/:bannerId" element={ user && user.isAdmin ? <EditBanner /> : <Navigate to="/" />} />
      <Route path="/admin/categories/edit/:categoryId" element={ user && user.isAdmin ? <EditCategory /> : <Navigate to="/" />} />
      <Route path="/admin/usercontent/edit/:contentId" element={ user && user.isAdmin ? <EditUGC /> : <Navigate to="/" />} />
      <Route path="/admin/discount/edit/:discountId" element={ user && user.isAdmin ? <EditDiscount /> : <Navigate to="/" />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
};

export default App;