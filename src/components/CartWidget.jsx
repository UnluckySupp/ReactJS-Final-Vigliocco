import { Link } from "react-router-dom";
import CartShopping from "../assets/img/cartShoppingSolid.png"
import { useContext } from "react";
import { CartContext } from "../context/CartContext";


export const CartWidget = () => {

  const { cart } = useContext(CartContext); 

  const total = cart.reduce((total, products) => total + products.quantity, 0)

    return (
      <div className="">
        <Link to="/checkout"><img src={CartShopping} alt="" height={24} />
        <span>{total}</span>
        </Link>
      </div>
    );
  };