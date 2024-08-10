import { useState } from "react"
//import "./ItemCount.css"

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
        <button className="btn fs-4 fw-bold rounded-circle btn-primary m-3 text-black" onClick={decrement}>-</button>
        <button className="btn fs-5 fw-bold rounded-circle btn-success m-3 text-black" onClick={() => onAdd(count)}>Add</button>
        <button className="btn fs-4 fw-bold rounded-circle btn-primary m-3 text-black" onClick={increment}>+</button>
    </div>
  )
}

export default ItemCount