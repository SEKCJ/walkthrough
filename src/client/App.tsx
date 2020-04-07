import * as React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import Navigation from './Components/Navigation';
import Home from './Components/home';
import Veggies from './Components/veggies';

const App: React.FC<IAppProps> = props => {

	return (
		<Router>
			<Navigation />
			<Switch>
				<Route exact path="/veggies" component={Veggies} />
				<Route path="/" component={Home} />
			</Switch>
		</Router >
	)
}

export interface IAppProps { }



export default App;
