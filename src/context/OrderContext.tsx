import {
	type ReactNode,
	createContext,
	useCallback,
	useContext,
	useReducer,
} from "react";
import type { ICoffee } from "../@types/coffee";
import {
	addProductAction,
	decrementProductAction,
	incrementProductAction,
	removeProductAction,
} from "../reducers/order/actions";
import { type OrderDetails, orderReducer } from "../reducers/order/reducer";
import { INITIAL_ORDER_STATE } from "../reducers/order/utils";

interface OrderContextType {
	products: ICoffee[];
	orderDetails: OrderDetails | null;
	handleAddNewProduct: (product: ICoffee) => void;
	handleRemoveProduct: (id: number) => void;
	handleIncrementProduct: (id: number) => void;
	handleDecrementProduct: (id: number) => void;
}

interface OrderContextProviderProps {
	children: ReactNode;
}

export const OrderContext = createContext({} as OrderContextType);

export const OrderProvider = ({ children }: OrderContextProviderProps) => {
	const [orderState, dispatch] = useReducer(orderReducer, INITIAL_ORDER_STATE);

	const { products, orderDetails } = orderState;

	const handleAddNewProduct = useCallback((product: ICoffee) => {
		dispatch(addProductAction(product));
	}, []);

	const handleRemoveProduct = useCallback((id: number) => {
		dispatch(removeProductAction(id));
	}, []);

	const handleIncrementProduct = useCallback((id: number) => {
		dispatch(incrementProductAction(id));
	}, []);
	const handleDecrementProduct = useCallback((id: number) => {
		dispatch(decrementProductAction(id));
	}, []);

	return (
		<OrderContext.Provider
			value={{
				products,
				orderDetails,
				handleAddNewProduct,
				handleRemoveProduct,
				handleIncrementProduct,
				handleDecrementProduct,
			}}
		>
			{children}
		</OrderContext.Provider>
	);
};

export function useOrderContext() {
	const context = useContext(OrderContext);

	if (!context) {
		throw new Error("useOrderContext must be used within an OrderProvider");
	}

	return context;
}
