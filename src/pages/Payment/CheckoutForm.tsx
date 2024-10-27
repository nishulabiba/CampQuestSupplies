import { CardElement, useStripe } from "@stripe/react-stripe-js";
import { Link } from "react-router-dom";


const CheckoutForm = ({ price, cart }) => {
    
    
    const stripe = useStripe()

const handleSubmit = (event: any)=>{
   console.log(event);




}

    return (
        <div>
            <form className="w-2/3 mx-auto" onSubmit={handleSubmit}>
                <CardElement className=" bg-slate-100 h-8 pt-2 shadow-2xl rounded-lg"
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <Link to='/' className="btn btn-primary btn-outline mt-4" type="submit" disabled={!stripe}>
                    Pay
                </Link>
            </form>

            




        </div >
    );
};

export default CheckoutForm;