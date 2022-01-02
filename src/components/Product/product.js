import React from 'react'
import './product.css';
import productdata from '../../constant'

function Product({addItems}) {
    
    const selectItem=(data)=>{

addItems( data.image,
    data.name,
    data.price)

    }
  
    return (
        <div className="product-div">
              <div className="grid">

         {
             productdata.map((data)=>(
                <div key={data.id} className="cell" onClick={()=>{selectItem(data)}}>
                <div className="product-img">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbRpjPIeiyvrigT3_D6OSgZE3BqEaXQ_sMmQ&usqp=CAU" alt=""/>
    
                </div>
                <div className="product-detail">
                    <h2  >{data.name}</h2>
                    <h4 style={{color: 'green',position: 'relative',top:-30}}>${data.price}<br></br>
                    In stock({data.price})
                    </h4>
                    

                    </div>
                </div>
             ))
         }         
      
      
     
      
      </div>
   

        </div>
 
    )
}

export default Product
