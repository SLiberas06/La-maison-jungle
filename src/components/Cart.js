import '../styles/Cart.css'
import { useState } from 'react'

function Cart(){
    const [cart, updateCart] = useState(0)
    const [isOpen, setIsOpen] = useState(false)
    const monsteraPrice = 8

    return isOpen ? (
        <div className= 'lmj-cart'>
            <h2>Panier</h2>
            <div>
                Monstera: {monsteraPrice}€
                <button onClick={()=> updateCart(cart + 1)}>
                    Ajouter
                </button>
            </div>
            <h3>Total : {monsteraPrice * cart}</h3>
            <button onClick={()=> updateCart(0)}>Vider le panier</button>
        </div>
       
    ) : (
        <button onClick = {()=> setIsOpen(true)}>Ouvrir le panier</button>

    )
}
export default Cart