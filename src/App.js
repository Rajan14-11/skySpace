import { Route,Routes} from "react-router-dom";
import Home from "./Components/Home/Home";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ScrollToTop from "react-scroll-to-top";
import Login from "./Components/Login-Reg/Login/Login";
import SignUp from "./Components/Login-Reg/SignUp/SignUp";
import AuthProvider from "./context/AuthProvider/AuthProvider";
import MobilePost from "./Components/AdminRoute/MobilePost/MobilePost";
import Mobile from "./Components/Products/Mobile/Mobile";
import MobileDetails from "./Components/MobileDetails/MobileDetails";
import DetailCart from "./Components/Cart/DetailCart";
import Checkout from "./Components/Checkout/Checkout";
import NewCart from "./Components/Cart/NewCart";
import Filter from "./Components/Filter/Filter";
import OrderComplete from "./Components/OrderComplete/OrderComplete";
import ProductDetails from "./Components/ProductDetails/ProductDetail";
import Navbar from "./Shared/Header/Navbar";

function App() {
  return (
    <>
    <AuthProvider>
          <ScrollToTop smooth color="#6f00ff" />
          <Navbar/>

      <Routes>

      <Route path='/' element={<Home/>}/>
      <Route path='home' element={<Home/>}/>
      <Route path='login' element={<Login/>}/>
      <Route path='signup' element={<SignUp/>}/>
      <Route path='mobileProduct' element={<Mobile/>}/>
      <Route path='/mobileDetails/:id' element={<MobileDetails/>}/>

      {/* admin route */}
      <Route path='mobilePost' element={<MobilePost/>}/>

      <Route path="cart" element={<NewCart/>}/>
      <Route path="checkout" element={<Checkout/>}/>
      <Route path="filter" element={<Filter/>}/>
      <Route path="ordercomplete" element={<OrderComplete/>}/>
      <Route path="productdetail/:id" element={<ProductDetails/>}/>
      <Route path="detailcart" element={<DetailCart/>}/>
      {/* <Route path="navbar" element={<Navbar/>}/> */}
      </Routes>

      </AuthProvider>
    </>
  );
}

export default App;
