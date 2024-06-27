import { MapPin, ShoppingCart } from "phosphor-react";
import imgLogo from "../../assets/Logo.png";
import { Button } from "../Button";
import { Container, Location } from "./styles";

export function Header() {
	return (
		<Container>
			<img src={imgLogo} alt="Logo Coffee Delivery" />
			<div>
				<Location>
					<MapPin weight="fill" size={25} />
					<span>Aracaju, SE</span>
				</Location>

				<Button
					icon={<ShoppingCart weight="fill" size={22} />}
					buttonType="cart"
				/>
			</div>
		</Container>
	);
}
