import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import { ItemCount } from "./ItemCount"

export const ItemDetail = ({item}) => {
    const {addItem} = useContext(CartContext);

    const add = (quantity) => addItem(item, quantity);

    return (
        <div className="itemDetail">
        <img className="imgDetail" src={item.image}></img>
        <div className="cardDesc">
        <h3>{item.name}</h3>
        <h3>{item.description}</h3>
        <h4>{item.category}</h4>
        <h4>${item.price}</h4>
        <h6>Stock:{item.stock}</h6>
        </div>
        <div className="cardButtons">
        <ItemCount onAdd={add} stock={item.stock} />
        </div>
    </div>
    )
}