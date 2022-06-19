import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from '../Components/index';
import Mytasks from '../Components/Mytasks';
const RouterDOM = () => {
	return (
		<Router>
			<Switch>
				<Route exact path="/"><HomePage /></Route>
				<Route exact path="/mytasks"><Mytasks /></Route>
			</Switch>
		</Router>
	);
}
export default RouterDOM;