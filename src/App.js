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
import AddToCart from "./Components/AddToCart/AddToCart";
import NewHeader from "./Shared/Header/NewHeader";
import Cart from "./Components/Cart/Cart";

function App() {
  return (
    <>
    <AuthProvider>
          <ScrollToTop smooth color="#6f00ff" />

      <Routes>

      <Route path='/' element={<Home/>}/>
      <Route path='home' element={<Home/>}/>
      <Route path='login' element={<Login/>}/>
      <Route path='signup' element={<SignUp/>}/>
      <Route path='mobileProduct' element={<Mobile/>}/>
      <Route path='/mobileDetails/:id' element={<MobileDetails/>}/>

      {/* admin route */}
      <Route path='mobilePost' element={<MobilePost/>}/>


      <Route path="addtocart/:id" element={<AddToCart/>}/>
      <Route path="newheader" element={<NewHeader/>}/>
      <Route path="cart" element={<Cart/>}/>
      </Routes>

      </AuthProvider>
    </>
  );
}

export default App;
