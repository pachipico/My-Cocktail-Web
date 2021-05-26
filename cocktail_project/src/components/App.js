import { BrowserRouter, Switch, Link, Route } from "react-router-dom";
import Home from "../routes/Home";
import Popular from "../routes/Popular";
import Latest from "../routes/Latest";
import Details from "../routes/Details";
import NavBar from "./NavBar";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
	return (
		<BrowserRouter>
			<NavBar />

			<Switch>
				<Route path='/' exact component={Home}></Route>
				<Route path='/details/:id' exact component={Details}></Route>
				<Route path='/popular' component={Popular}></Route>
				<Route path='/Latest' component={Latest}></Route>
			</Switch>
		</BrowserRouter>
	);
}

export default App;
