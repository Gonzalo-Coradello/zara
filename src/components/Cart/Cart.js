import './Cart.css'
import { useContext } from "react"
import CartItem from '../CartItem/CartItem'
import { CartContext } from '../../context/CartContext'

const Cart = () => {

    const { cart, addItem, removeItem } = useContext(CartContext)

    return (
            <>
                <h2 className="cart__title">Carrito de compras</h2>
                <div className="cart__products">
                    {cart.map(item => <CartItem {...item} addItem={addItem} removeItem={removeItem} key={item.id.concat(item.selectedColor)} />)}
                </div>
            </>
    )
}

export default Cart