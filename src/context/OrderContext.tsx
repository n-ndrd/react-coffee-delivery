import { Children, type ReactNode, createContext, useContext } from "react";
import type { ICoffee } from "../@types/coffee";

interface OrderContextType {
	products: ICoffee[];
	orderDetails: null; //OrderDetails |
	handleAddNewProduct: (product: ICoffee) => void;
	handleRemoveProduct: (id: number) => void;
	handleIncrementProduct: (id: number) => void;
	handleDecrementProduct: (id: number) => void;
}

interface OrderContextProviderProps {
	children: ReactNode;
}

export const OrderContext = createContext({} as OrderContextType);

export const OrderProvider = ({ children }: OrderContextProviderProps) => {};
