import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Header from '../../Shared/Header/Header'
import NewHeader from '../../Shared/Header/NewHeader';
// import './AddToCart.css'
import AlsoLike from './AlsoLike/AlsoLike';
import LeftSection from './LeftSection/LeftSection';
import RightSection from './RightSection/RightSection';
function AddToCart() {

   const{id}=useParams()

    const[productDetails,setProductDetails]=useState({});
    const [details,setDetails]=useState([ ])
    const [alsoLike,setAlsoLike]=useState()
    const [error,setError]=useState('')

    useEffect(()=>{

      const getProductDetails = async()=>{
        await fetch('https://theskyaural.herokuapp.com/mobileDetailsPost')
        .then(res=>res.json())
        .then(data=>{
          setDetails(data)
          if (details && details.length > 0) {
            const matchDetails = details.find((detail) => detail._id === id);

            setProductDetails(matchDetails)

            const alsoLikeProducts = details.filter((detail)=>
                 detail._id!==id
            )

            setAlsoLike(alsoLikeProducts)
          }
        })
        .catch((error)=>{
            setError("reload now",error)
        })}

        return()=>{
          getProductDetails()
        }

    },[details,id]);

  return (
    <>
      {/* <NewHeader /> */}
      <div className="container">
        <div className="home-line">
          <a className="heading" href="/">
            Home
          </a>
          <span className="heading">&gt;</span>
          <h6 className="heading">Productname</h6>
        </div>

        <div
          className="main-section"
          key={productDetails && productDetails._id}
        >
          <LeftSection
            mobilePic1={productDetails && productDetails.mobileImg1Link}
            mobilePic2={productDetails && productDetails.mobileImg2Link}
            mobilePic3={productDetails && productDetails.mobileImg3Link}
            mobilePic4={productDetails && productDetails.mobileImg4Link}
          />

          <RightSection
            title={productDetails && productDetails.mobileName}
            price={productDetails && productDetails.mobilePrice1}
          />
        </div>

        <AlsoLike
          mobDetails={alsoLike && alsoLike}
        />
      </div>
    </>
  );
}

export default AddToCart