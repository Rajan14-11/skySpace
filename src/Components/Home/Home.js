import React from 'react';
import Header from '../../Shared/Header/Header';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import Responsive from '../TopProducts/TopProducts';
import Footer from '../../Shared/Footer/Footer';
import './Home.css';
import { Link } from 'react-router-dom';
import UseAuth from '../../Hooks/useAuth';
import OurServices from '../OurServices/OurServices';
import NewHeader from '../../Shared/Header/NewHeader';
import { signOut } from 'firebase/auth';
import { auth } from '../../Firebase/FirebaseInitialize';
import { useSelector } from 'react-redux';
import { selectUser } from '../../redux/userSlice';




const Home = () => {
     const user = useSelector(selectUser);
  // const {user ,logOut}=UseAuth()

  const logOut = ()=>{
    signOut(auth)
  }

    return (
        <>
        <button onClick={logOut}>Logout</button>
           <div  className='loginContainer'>
        <h1 className='text-center'>{user?user.email:""}</h1>
        <div className='var1'> </div>

          <div className="d-flex flex-row-reverse">
  <div className="p-2">
    <Link to='/signup'>Sign In</Link>
  </div>
  <div className="p-2">
    <Link to='/login'>Login</Link>

    </div>
  <div className="p-2">Help</div>
</div>
          </div>

            <NewHeader/>
            <Banner/>
            <About/>
            <Responsive/>
            <br/>
            <OurServices/>
            <Contact/>
            <Footer/>
        </>
    );
};

export default Home;