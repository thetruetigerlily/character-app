import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const App = props => {
    return(
        <div>
            <Hello name= "Nikki" />
            <Hello name= "Michael" />
            <Hello name= "Andrew" />
        </div>
    );
};

class Hello extends React.Component {
    render() {
        return (
            <div>
                <h1>Hello, {this.props.name}</h1>
            </div>
        );
    }
}

ReactDOM.render(<App /> document.getElementById('root'));
