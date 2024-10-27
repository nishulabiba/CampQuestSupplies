export type Heading = {
    heading: string,
    subHeading: string
}
export type Inventory = {
    quantity: number;
    inStock: boolean;
  };
export type Product = {
    _id: string;
    name: string;
    image: string;
    description: string;
    price: number;
    category: string;
    inventory: Inventory;
  };


  export interface ApiResponse {
    success: boolean;
    message: string;
    data: Product[];
  }
  export interface ApiResponse1 {
    success: boolean;
    message: string;
    data: Product;
  }
  export interface FavoriteItem {
    id: string;
  }

  export interface CartItem {
    _id: string;
    quantity: number;
  }
  export type ProductType = {
    data?: Product[]
    products?: Product[]
  }
 export interface CheckoutFormValues {
    name: string;
    email: string;
    phone: string;
    address: string;
    paymentMethod: "cod" | "stripe";
  }
  export interface CartContextType {
    cartItems: CartItem[];
    setCartItems: React.Dispatch<React.SetStateAction<CartItem[]>>;
    favoriteItems: FavoriteItem[];
    addToCart: (id: string) => void;
    increaseQuantity: (id: string) => void;
    decreaseQuantity: (id: string) => void;
    removeItem: (id: string) => void;
    addFavorite: (id: string) => void;
    deleteFavorite: (id: string) => void;
    calculateTotalPrice: () => number;
    totalQuantity: number;
    totalPrice: number;
    cartProducts: ()=> (Product | undefined)[] ;
  }