import React, { useEffect } from 'react';
import Swal from 'sweetalert2';

interface CartWarningProps {
  cartItems: unknown[];
}

const CartWarning: React.FC<CartWarningProps> = ({ cartItems }) => {
  useEffect(() => {
    const handleBeforeUnload = (event: BeforeUnloadEvent) => {
      if (cartItems.length > 0) {
        event.preventDefault();
        event.returnValue = '';
        Swal.fire({
            text: "You have items in your cart. You're about to reload this page.",
            icon: 'warning',
            position: 'top',
            timer: 1500

          });
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [cartItems]);

  return null; 
};

export default CartWarning;
