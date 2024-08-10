//import logo from "../../assets/react.svg"
import { useCart } from "../../Hooks/useCart";
import cart from "../../assets/cart.svg"
import "./CardWidget.css"
import { Link } from "react-router-dom";

function CardWidget() {
  const {totalQuantity} = useCart()
  return (
  <Link className="CartWidget nav-link" to="/cart" alt='cart-widget'>

    <img className="CartImg" src={cart} style={{width: 25}}/>
    {totalQuantity}
  </Link>
);

}

export default CardWidget