import type { ICoffee } from "../../@types/coffee";
import { ActionTypes } from "./actions";

interface Address {
	areaCode: string;
	street: string;
	number: string;
	complement: string;
	neighborhood: string;
	city: string;
	state: string;
}

export interface OrderDetails {
	address: Address;
	paymentMethod: "credit" | "debit" | "cash";
}

interface OrderState {
	products: ICoffee[];
	orderDetails: OrderDetails | null;
}

type actionType<T = any> = {
	type: string;
	payload: T;
};

export function orderReducer(state: OrderState, action: actionType<any>) {
	switch (action.type) {
		case ActionTypes.ADD_PRODUCT: {
			const isAlreadyChoosed = state.products.find(
				(product) => product.id === action.payload.product.id,
			);

			if (isAlreadyChoosed) {
				const newProduct = state.products.map((product) => {
					if (product.id === action.payload.product.id) {
						const qtd = product.quantity;

						return {
							...product,
							quantity: qtd + action.payload.product.quantity,
						};
					}
					return product;
				});

				return {
					orderDetails: state.orderDetails,
					products: newProduct,
				};
			}
			return {
				orderDetails: state.orderDetails,
				products: [...state.products, action.payload.product],
			};
		}
		case ActionTypes.REMOVE_PRODUCT: {
			const newProducts = state.products.filter((product) => {
				return product.id !== action.payload.id;
			});

			return {
				...state,
				products: newProducts,
			};
		}

		default: {
			return state;
		}
	}
}
