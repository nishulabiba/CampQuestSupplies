import { Helmet } from "react-helmet-async";
import { useCart } from "../../hooks/useCart";
import Title from "../../utils/Title";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";



const Payment = () => {
    
    const { cartProducts, calculateTotalPrice} = useCart()
    const prod = cartProducts()
    const total = calculateTotalPrice()
    const price: number = parseFloat(total.toFixed(2))
    const publishable_key = import.meta.env.VITE_publishable_key ;
    const stripePromise= loadStripe(publishable_key)
    
    return (
        <div className="w-full mx-auto">
        <Helmet title="CampQuest | Payment" />
            <Title heading='Payment' subHeading='Please, process'></Title>

            <Elements stripe={stripePromise}>
                {
                prod? <CheckoutForm prod={prod}  price={price} />:""
                }
            </Elements>
        </div>
        
    );
};

export default Payment;