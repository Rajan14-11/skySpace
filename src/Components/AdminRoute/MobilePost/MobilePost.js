import React, { useRef, useState } from 'react';
import './MobilePost.css';


const MobilePost = () => {
    
            // sucess message
            const [sucess,setSucess]=useState(false)
            // error message
            const [error,setError]=useState('')
  

            const nameRef=useRef()
            const titleRef=useRef()
            const price1Ref=useRef()
            const price2Ref=useRef()
            const ram1Ref=useRef()
            const ram2Ref=useRef()
            const color1Ref=useRef()
            const color2Ref=useRef()
            const videoLinkRef=useRef()
            const img1LinkRef=useRef()
            const img2LinkRef=useRef()
            const img3LinkRef=useRef()
            const img4LinkRef=useRef()

          
            const mobileHandle=e=>{
               
                const mobileName=nameRef.current.value;
                const mobileTitle=titleRef.current.value;
                const mobilePrice1=price1Ref.current.value;
                const mobilePrice2=price2Ref.current.value;
                const mobileRam1=ram1Ref.current.value;
                const mobileRam2=ram2Ref.current.value;
                const mobileColor1=color1Ref.current.value;
                const mobileColor2=color2Ref.current.value;
                const mobileVideoLink=videoLinkRef.current.value;
                const mobileImg1Link=img1LinkRef.current.value;
                const mobileImg2Link=img2LinkRef.current.value;
                const mobileImg3Link=img3LinkRef.current.value;
                const mobileImg4Link=img4LinkRef.current.value;

                    // all data
                    const allMobileData={
                        mobileName,
                        mobileTitle,
                        mobilePrice1,
                        mobilePrice2,
                        mobileRam1,
                        mobileRam2,
                        mobileColor1,
                        mobileColor2,
                        mobileVideoLink,
                        mobileImg1Link,
                        mobileImg2Link,
                        mobileImg3Link,
                        mobileImg4Link,
                    }
               console.log(allMobileData)
              
              
              
               fetch('https://theskyaural.herokuapp.com/mobileDetailsPost',{
                        method:'POST',
                        headers:{
                            'content-type':'application/json'
                        },
                        body:JSON.stringify(allMobileData)
                     })
                     .then(res=>res.json())
                     .then(data=>{
                         if(data.insertedId){
                             setSucess(true)
                           e.target.reset()
                         }
                     }).catch((error)=>{
                         setError(error)
                     })
           
                     e.preventDefault()
                
           

           
            }


    return (
        <div>

            <form onSubmit={mobileHandle}>
            <input ref={nameRef} type="text" required   name='name' placeholder='Mobile Name'/>
            <br/>
            <input ref={titleRef} type='text' required  name='title' placeholder='Title' />
            <br/>
            <input ref={price1Ref} type='number' required  name='price1' placeholder='Price-1'/>
            <br/>
            <input ref={price2Ref} type='number'  name='price2' placeholder='Price-2'/>          
            <br/>
            <input ref={ram1Ref} type='number'required  name='RAM1' placeholder='RAM-1'/>          
            <br/>
            <input ref={ram2Ref} type='number'  name='RAM2' placeholder='RAM-2'/>          
            <br/>
            <input ref={color1Ref} type='text' required  name='color1' placeholder='Color-1' />
            <br/>
            <input ref={color2Ref} type='text'  name='color2' placeholder='Color-2' />
            <br/>
            <input ref={videoLinkRef} type='text'  name='videoLink' placeholder='Video link' />
            <br/>
            <input ref={img1LinkRef} required type='url'  name='img1Link' placeholder='Image-link-1' />
            <br/>
            <input ref={img2LinkRef} type='url'  name='img2Link' placeholder='Image-link-2' />
            <br/>
            <input ref={img3LinkRef} type='url'  name='img3Link' placeholder='Image-link-3' />
            <br/>
            <input ref={img4LinkRef} type='url'  name='img4Link' placeholder='Image-link-4' />
            <br/>
           
        <input type='submit'  value='Submit'/>
            </form>
            
        </div>
    );
};

export default MobilePost;