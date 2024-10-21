import { useEffect } from "react";
import { useState } from "react";
import Bottle from "../bottle/Bottle";
import './bottels.css'
import  { Addls,storedData,removels} from "../../utilites/localstorage";
import Cart from "../cart/Cart";



const Bottels = () => {
    const [bottles, setbottles] =useState([])
    const [cart,setcart] =useState([])
    useEffect(()=>{
        fetch('/public/bottels.json')
        .then(res=>res.json())
        .then(data => setbottles(data))
    },[])
    useEffect(()=>{
        console.log(bottles.length)
        if(bottles.length >0){
            const storedata = storedData()
        console.log(storedata,bottles)
        const savebotlle =[]
        for(const id of storedata){
            console.log(id)
            const bottle = bottles.find(bottle => bottle.id === id)
           if(bottle){
            savebotlle.push(bottle)
            
           }
        }
        console.log(savebotlle)
        setcart(savebotlle)
        }
    },[bottles])
    const handlecart = (bottle) =>{
        const newcart = [...cart,bottle]
        setcart(newcart)
        Addls(bottle.id)
        
    }
    const handleremove = (id) =>{
        const remaingcard = cart.filter(bottle => bottle.id !==id)
        setcart(remaingcard)
        removels(id)
    }
    return (
        <div>
            <p>explore bottles:{bottles.length}</p>
           {
             <Cart cart ={cart} handleremove={handleremove}></Cart>
           }
           <div className="bottles-container">
           {
              bottles.map(bottle => <Bottle 
                key={bottle.id} 
                bottle={bottle}
                handlecart={handlecart}
              ></Bottle>)  
            }
            
           </div>
        </div>
    );
};

export default Bottels;