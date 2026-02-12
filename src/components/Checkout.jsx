import CartContext from "../Store/CartContext";
import UserProgressContext from "../Store/UserProgressContext";
import Button from "./UI/Button";
import Input from "./UI/Input";
import Modal from "./UI/Modal";
import { useContext } from "react";



export default function Checkout() {
    const cartCtx = useContext(CartContext);
    const userProgressCtx =useContext(UserProgressContext);

    const cartTotal= cartCtx.items.reduce(
        (totalPrice,item) => totalPrice + item.quantity*item.price,
        0
        )
    function handleClose(){
            userProgressCtx.hideCheckout()
           }
    
    function handleSubmit(event) {
        event.preventDefault()
        const fd = new FormData(event.target)
        //entredFullName=fd.get('full-name') also for the athor entries email street ....
        const entredData=  Object.fromEntries(fd.entries())
        console.log(entredData)
    }


    return <Modal open={userProgressCtx.progress==='checkout'} onClose={handleClose} >
        <form onSubmit={handleSubmit}>
            <h2>Checkout</h2>
            <p>Total Amount:{cartTotal}</p>
            <Input label="Full Name" type="text" id="full-name" />
            <Input label="E-mail Adress" type="email" id="email" />
            <Input label="Street" type="text" id="street" />
            <div>
                <Input label="Postale Code" type="text" id="postal-code"/>
                <Input label="City" type="text" id="city" />
            </div>

            <p className="modal-actions">
                <Button  type="button" textOnly onClick={handleClose}>
                    Close
                </Button>
                <Button>Submit Order</Button>
            </p>
        </form>
    </Modal>
}