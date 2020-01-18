import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import List from './screens/List';
import Characters from './screens/Characters';
import Home from './screens/Home';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const MyApp = () => (
    <Router>
        <div>
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/list'>List</Link>
                </li>
                <li>
                    <Link to='/characters'>Characters</Link>
                </li>
            </ul>

            <hr />

            <Route exact path="/" component={Home} />
            <Route path="/list" component={List} />
            <Route path="/characters" component={Characters} />
        </div>
    </Router>
);

ReactDOM.render(<MyApp />, document.getElementById('root'));
