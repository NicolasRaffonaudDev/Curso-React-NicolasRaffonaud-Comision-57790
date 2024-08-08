import { useState } from "react"

const ItemCount = ({ initial = 1, stock, onAdd }) => {
    const [count, setCount] = useState(initial);

    const increment = () => {
        if (count < stock) {
            setCount((prev) => prev + 1);
        }
    };

    const decrement = () => {
        if (count > 1) {
            setCount((prev) => prev - 1);
        }
    };
  
    return (
    <div>
        <h1>{count}</h1>
        <button className="btn btn-primary m-3" onClick={decrement}>-</button>
        <button className="btn btn-success w-25" onClick={() => onAdd(count)}>Agregar al carrito</button>
        <button className="btn btn-primary m-3" onClick={increment}>+</button>
    </div>
  )
}

export default ItemCount