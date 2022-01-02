
import './App.css';
import Navbar from './components/Navbar/bar';
import Product from './components/Product/product'
import Cart from './components/cart/cart'
import { useState,useEffect } from 'react';
 function App() {
   const [state, setstate] = useState([])
   const [render, setrender] = useState(0)
   
  const addItems=(image,name,price)=>{
    state.push({
      image:image,
      name:name,
      price:price

  })
  setstate(state)
  setrender(render+1)

alert(`Your ${name} is added into bucket succesfully!`)

  }
  useEffect(() => {

   
  }, [render])
  
  return (
    <div className="App">
     <div className="main-div">
    <Navbar/>
    <Product addItems={addItems}/>
     </div>
     <div className="side-div">
      <Cart productdata={state}/>
       </div>     
    </div>
  );
}

export default App;
