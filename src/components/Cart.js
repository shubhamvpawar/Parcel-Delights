import { useSelector } from "react-redux";
import ItemList from "./itemList";
import { clearCart } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const Cart = () => {

    const cartItems = useSelector((store) => store.cart.items);

    const dispatch = useDispatch();
    const handleClearCart = () => {
        dispatch(clearCart());
    }

    return (
        <div className="text-center m-5 p-50">
            <h1 className="font-bold text-xl">Cart</h1>
            <div className="mx-auto w-9/12">
                <button
                    className="p-2 m-2 bg-black text-white rounded-lg"
                    onClick={handleClearCart}
                >Clear Cart</button>
                {cartItems.length === 0 && <h1>Cart is empty. Add items to cart</h1>}
                <ItemList items={cartItems} />
            </div>
        </div>
    )
}

export default Cart;