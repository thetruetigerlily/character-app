import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import About from './screens/About';
import Characters from './screens/Characters';
import Home from './screens/Home';

const Index = ({ pathname }) => {
    switch (pathname) {
        case '/about':
            return <About />;
        case '/characters' :
            return <Characters />;
        default:
            return <Home />;
    }
};

let pathname = window.location.pathname;

ReactDOM.render(<Index pathname={pathname} />, document.getElementById('root'));

window.addEventListener('popstate', () => {
    pathname = window.location.pathname;
});
