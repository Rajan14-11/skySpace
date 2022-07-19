import React, { useEffect, useRef } from 'react';
import './Banner.css';


const Banner = () => {
    const videoEl = useRef(null);
   
  const attemptPlay = () => {
    videoEl &&
      videoEl.current &&
      videoEl.current.play().catch(error => {
        console.error("Error attempting to play", error);
      });
  };

  useEffect(() => {
    attemptPlay();
  }, []);

    return (
        <div className='mainBanner'>


            <div className='pt-5 pb-5 secondBanner'>
       
       <div className='container pb-5 text-center'>
         <video
           style={{ maxWidth: "100%", width: "800px", margin: "0 auto" }}
           playsInline
           loop
           muted
           className='rounded img-fluid pb-5'
           alt="All the devices"
           src="Alpha.mp4"
           ref={videoEl}
         />
       </div>
         </div>
        </div>
    );
};

export default Banner;