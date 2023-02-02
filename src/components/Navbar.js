import { CartIcon } from "../icons";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { calculateAmount } from "../features/cart/cartSlice";

const Navbar = () => {

    const dispatch = useDispatch()
    const { amount, cartItems } = useSelector((store) => {
        return store.cart;
    })

    useEffect(() => {
        dispatch(calculateAmount())
    }, [cartItems, dispatch])
    return (
        <nav>
            <div className="nav-center">
                <h3>Redux Toolkit</h3>
                <div className="nav-container">
                    <CartIcon />
                    <div className="amount-container">
                        <p className="total-amount">{amount}</p>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;