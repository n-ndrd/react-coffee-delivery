import { Route, Routes } from "react-router-dom";
import { DefaultLayout } from "./layout/DefaultLayout";
import { Details } from "./pages/Details";
import { Home } from "./pages/Home";
import { Order } from "./pages/Order";

export function Router() {
	return (
		<Routes>
			<Route path="/" element={<DefaultLayout />}>
				<Route path="/home" element={<Home />} />
				<Route path="/details" element={<Details />} />
				<Route path="/order" element={<Order />} />
			</Route>
		</Routes>
	);
}
