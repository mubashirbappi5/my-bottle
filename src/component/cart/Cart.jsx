
import './cart.css'
const Cart = ({cart,handleremove}) => {
    return (
        <div className='main-cont'>
            
            <div className="cart-cont">
                {
                    cart.map(bottle =><div key={bottle.id}>
                        <img  src={bottle.img}></img>
                        <button onClick={()=>handleremove(bottle.id)}>remove</button>
                        </div> )
                }

            </div>
            
        </div>
    );
};

export default Cart;