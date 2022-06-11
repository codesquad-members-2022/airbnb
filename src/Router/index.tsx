import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "Component/NotFound";
import MainDesc from "Component/MainDesc";
import SearchDesc from "Component/SearchDesc/SearchDesc";
import Main from "Component/Main";

const Router = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="*" element={<NotFound />} />
				<Route path="/" element={<Main />}>
					<Route index element={<MainDesc />} />
					<Route path="search" element={<SearchDesc />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
};

export default Router;
