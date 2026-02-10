import Modal from "./UI/Modal.jsx";
import CartContext from '../Store/CartContext.jsx'
import { useContext } from "react";
import { currencyFormatter} from '../util/'
import Button from "./UI/Button";


export default function Cart({}){
    const cartCtx = useContext(CartContext);
   cartCtx.items.reduce((totalPrice,item)=>{

    return totalPrice+(item.totalPrice*item.quantity)},0
)

    return (
    <Modal className="cart">
        <h2>Your Cart</h2>
        <ul>
            {cartCtx.items.map((item) => (
                <li key={item.id}>
                    {item.name} _ {item.quantity}
                </li>))}
        </ul>
        <p className="cart-total">{currencyFormatter.format(cartTotal)}</p>
        <p className="modal-actions">
            <Button textOnly={true}>Close</Button>
            <Button>Go to Checkout</Button>
        </p>
    </Modal>
    );
}