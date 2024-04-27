import { getFirestore, addDoc, collection } from "firebase/firestore";
import { useContext, useState } from "react"
import { CartContext } from "../context/CartContext";
import { useCalculator } from "../hooks/useCalculator";
import { Form } from "./Form";
import swal from "sweetalert";

export const Checkout = () => {
    const { cart, restItem, clearCart } = useContext(CartContext);
    const { subtotal, totalPriceCart} = useCalculator();

    const [user, setUser] = useState({name:"", lastName:"", phone:"", email:"", confEmail:""})
    const handleUser = (e) => {
        const {id, value} = e.target;
        setUser({...user, [id]: value})
    }

    const handleTicket = (e) => {
        e.preventDefault();
        if(user.email !== user.confEmail){
            swal({
                title:"Error",
                text:`Los emails no coinciden`,
                icon:"warning",
                button: "Aceptar"
            })
        } else {
            const {confEmail, ...userData} = user
            const ticketUser = {...userData}
            const priceCart = totalPriceCart(cart)
            const ticket = {buy:cart , buyer:ticketUser, total:priceCart }
            if (ticket) {
                const db = getFirestore();
                const refDoc = collection(db, "orders")
                addDoc(refDoc, ticket).then(({id}) => {
                    if (id) {
                        swal({
                            title:"Tu compra ha sido exitosa",
                            text:`El ID de la compra es ${id}`,
                            icon:"success",
                            button: "Aceptar"
                        })
                    }
                })
            }
        }
    }

    return (
        <div>
            {cart.map(itemsCart => (
                <ul key={itemsCart.id}>
                    <li>
                        <h3>{itemsCart.name}</h3>
                        <h3>{itemsCart.quantity}</h3>
                        <h3>${itemsCart.price}</h3>
                        <h3>Subtotal:${subtotal(itemsCart.quantity, itemsCart.price)}</h3>
                        <button onClick={() => restItem(itemsCart.id)}>Quitar 1 del carrito</button>
                    </li>
                </ul>
            ))}
            <h2>Total:${totalPriceCart(cart)}</h2>
            <button onClick={clearCart}>Vaciar Carrito</button>
            <Form user={user} handleUser={handleUser} handleTicket={handleTicket} />
        </div>
    )
}