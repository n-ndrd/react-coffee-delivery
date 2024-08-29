import { Bank, CreditCard, CurrencyDollar, Money } from "phosphor-react";
import { useState } from "react";
import { PaymentMethod } from "./components/paymentMethod";
import {
	FormContainer,
	Header,
	MethodContainer,
	Subtitle,
	Title,
} from "./styles";

type PaymentMethodType = "credit" | "debit" | "cash";

export function Payment() {
	const [focusedMethod, setFocusedMethod] = useState<PaymentMethodType | null>(
		"credit",
	);

	const selectingMethod = (method: PaymentMethodType) =>
		setFocusedMethod(method);

	return (
		<FormContainer>
			<Header>
				<CurrencyDollar size={22} />
				<div>
					<Title>Pagamento</Title>
					<Subtitle>
						O pagamento é feito na entrega. Escolha a forma que deseja pagar
					</Subtitle>
				</div>
			</Header>

			<MethodContainer>
				<PaymentMethod
					icon={<CreditCard />}
					title="CARTÃO DE CRÉDITO"
					focused={focusedMethod === "credit"}
					onFocus={() => selectingMethod("credit")}
				/>

				<PaymentMethod
					icon={<Bank />}
					title="CARTÃO DE DÉBITO"
					focused={focusedMethod === "debit"}
					onFocus={() => selectingMethod("debit")}
				/>

				<PaymentMethod
					icon={<Money />}
					title="DINHEIRO"
					focused={focusedMethod === "cash"}
					onFocus={() => selectingMethod("cash")}
				/>
			</MethodContainer>
		</FormContainer>
	);
}
