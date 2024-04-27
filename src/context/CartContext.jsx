import { createContext } from "react";
import { useState } from "react";

export const CartContext = createContext()

export function CartProvider({children}){
    const [cart, setCart] = useState([])

    const clearCart = () => {
        setCart([]); 
    }

    const addItem = (item, quantity) => {
        const exist = cart.some(i => i.id === item.id);

        if(exist){
            const newCart = cart.map(product => { 
                if(product.id === item.id) {
                    return {
                        ...product, quantity: product.quantity + quantity,
                    };
            } else {
                return product;
            }
        });
        setCart(newCart);
        } else {
        setCart((prev) => {
            return [...prev, {...item, quantity}]
        })
        }
    };

    const restItem = (id) => {
        const index = cart.findIndex(item => item.id === id);
        if(index !== -1){
            const copyCart = [...cart]
            copyCart[index].quantity -= 1;
            if(copyCart[index].quantity === 0){
                copyCart.splice(index, 1);
            }
            setCart(copyCart);
        }
    }

    

    return (
        <CartContext.Provider value={{ cart, clearCart, addItem, restItem}}>
            {children}
        </CartContext.Provider>
    )
}