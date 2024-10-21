import './bottle.css'

const Bottle = ({bottle,handlecart}) => {
    
    const { img,name} =bottle;
    return (
        <div className="bottle-container">
            <img src={img} alt="" />
            <h3>{name}</h3>
            <button onClick={()=>handlecart(bottle)}>Add to cart</button>
            
        </div>
    );
};

export default Bottle;