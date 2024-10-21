const storedData = () =>{
    const storedatastr = localStorage.getItem('cart')
    if(storedatastr){
       return JSON.parse(storedatastr)
    }
    return [];
}
const savecart = (cart) =>{
    const cartstringify = JSON.stringify(cart)
    localStorage.setItem('cart',cartstringify)
}
const Addls = (id) =>{
    const cart = storedData()
    cart.push(id)
    savecart(cart)

}
const removels =(id) =>{
    const cart = storedData()
    const remaing = cart.filter(idx => idx !== id)
    savecart(remaing)

}
export {Addls,storedData,removels} ;
