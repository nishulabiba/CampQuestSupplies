import { CardElement, useStripe } from "@stripe/react-stripe-js";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { useCart } from "../../hooks/useCart";


const CheckoutForm = ({ price, prod }: { price: number; prod: unknown[] } ) => {
    const stripe = useStripe();
    const navigate = useNavigate();
    const {setCartItems}= useCart()

    const handleSubmit = (event: any) => {
        event.preventDefault();
        console.log(event);

        console.log(event.target);
    };
    const handleClick = ()=>{
        Swal.fire({
            text: "Payment successful! ",
            color: "green"
        })
        navigate("/");
        setCartItems([]);
    }

    return (
        <div>
            <form className="w-2/3 mx-auto" onSubmit={handleSubmit}>
            <p className="">{price}</p>
            <p className="">{prod?.length}</p>
                <CardElement
                    className="bg-slate-100 h-8 pt-2 shadow-2xl rounded-lg"
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
                <button onClick={handleClick} className="btn btn-primary btn-outline mt-4" type="submit" disabled={!stripe} >
                    <Link to="/">Pay</Link>
                </button>
            </form>
        </div>
    );
};

export default CheckoutForm;
