import React from 'react'
import Header from '../../Shared/Header/Header'
import NewHeader from '../../Shared/Header/NewHeader';
import './AddToCart.css'
import AlsoLike from './AlsoLike/AlsoLike';
import LeftSection from './LeftSection/LeftSection';
import RightSection from './RightSection/RightSection';
function AddToCart() {
  return (
    <>
      <NewHeader />
      <div className="container">
        <div className="home-line">
          <a className="heading" href='/'>Home</a>
          <span className="heading">&gt;</span>
          <h6 className="heading">Productname</h6>
        </div>

        <div className="main-section">

          <LeftSection/>

          <RightSection/>

        </div>

          <AlsoLike/>
      </div>
    </>
  );
}

export default AddToCart