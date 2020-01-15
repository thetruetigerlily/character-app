import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import About from './screens/About';
import Characters from './screens/Characters';
import Home from './screens/Home';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const App = () => (
    <Router>
        <div>
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/about'>About</Link>
                </li>
                <li>
                    <Link to='/characters'>Characters</Link>
                </li>
            </ul>

            <hr />

            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/characters" component={Characters} />
        </div>
    </Router>
);

ReactDOM.render(<App />, document.getElementById('root'));
