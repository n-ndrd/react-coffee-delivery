import type { ICoffee } from "../../@types/coffee";
import { ActionTypes } from "./actions";

interface OrderState {
	products: ICoffee[];
	orderDetails: null; //OrderDetails |
}

type actionType = {
	type: string;
	payload: any;
};

export function orderReducer(state: OrderState, action: actionType) {
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
	}
}
