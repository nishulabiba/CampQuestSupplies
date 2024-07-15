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