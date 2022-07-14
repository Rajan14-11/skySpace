import React from 'react'
import "./AlsoLike.css"
function AlsoLike() {
  return (
   <>

        <h1 className='also-heading'>You make also like</h1>
     <div className='content1'>

        <div className="products">

          <div className='product1'>
            <div className='image'>
                <img src='/imgs/bg.jpg'/>
            </div>
            <div className='product-name'>
                <h3>Iphone</h3>
            </div>
            <div className='product-price'>
                <strong>$</strong>
                <strong>{33}</strong>
            </div>
            <div className='adcbtn'>
                <button className='btn'>Add To Cart</button>
            </div>
          </div>

          <div className='product1'>
            <div className='image'>
                <img src='/imgs/bg3.jpg'/>
            </div>
            <div className='product-name'>
                <h3>Iphone</h3>
            </div>
            <div className='product-price'>
                <strong>$</strong>
                <strong>{33}</strong>
            </div>
            <div className='adcbtn'>
                <button className='btn'>Add To Cart</button>
            </div>
          </div>

          <div className='product1'>
            <div className='image'>
                <img src='/imgs/bg3.jpg'/>
            </div>
            <div className='product-name'>
                <h3>Iphone</h3>
            </div>
            <div className='product-price'>
                <strong>$</strong>
                <strong>{33}</strong>
            </div>
            <div className='adcbtn'>
                <button className='btn'>Add To Cart</button>
            </div>
          </div>
        </div>
     </div>
   </>
  )
}

export default AlsoLike