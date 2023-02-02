import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

import CartItem from "./CartItem"

import { calculateTotals } from "../features/cart/cartSlice"
import { openModal } from "../features/modal/modalSlice"

const CartContainer = () => {
    const dispatch = useDispatch()
    const { cartItems, amount, total } = useSelector((state) => state.cart)

    useEffect(() => {
        dispatch(calculateTotals())
    }, [cartItems, dispatch])

    if (amount < 1) {
        return <section className="cart">
            <header>
                <h2>Your cart</h2>
                <h4 className="empty-cart">is currently empty</h4>
            </header>
        </section>
    }



    return (
        <section className="cart">
            <header>
                <h2>Your cart</h2>
            </header>
            <div>
                {cartItems.map((item) => (
                    <CartItem key={item.id} {...item} />
                ))}
            </div>
            <footer>
                <hr />
                <div className="cart-total">
                    <h4>Total <span>${total.toFixed(2)}</span></h4>
                </div>
                <button onClick={() => { dispatch(openModal()) }} className="btn clear-btn">Clear cart</button>
            </footer>
        </section>
    )
}
export default CartContainer