import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './MobileDetails.css';


const MobileDetails = () => {
    const{id}=useParams()

    const[productDetails,setProductDetails]=useState({});
    const [details,setDetails]=useState([ ])
    const [error,setError]=useState('')
    
    useEffect(()=>{
        fetch('https://theskyaural.herokuapp.com/mobileDetailsPost')
        .then(res=>res.json())
        .then(data=>{setDetails(data);setError('')})
        .catch((error)=>{
            setError("reload now",error)
        })
    },[]);

    useEffect(()=>{
        if(details.length>0){
            const matchDetails=details.find(detail=>(detail._id===id))
            setProductDetails(matchDetails)
        }
    },[details,id]);
    



    return (
        <div>
            {error}
            <img src={productDetails.mobileImg1Link} alt='mobile'/>
            <h1>Name: {productDetails.mobileName}</h1>
            <h2>RAM:{productDetails.mobileRam1} </h2>
            <h4>RAM:${productDetails.mobilePrice1} </h4>
        </div>
    );
};

export default MobileDetails;