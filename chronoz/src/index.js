import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

/*ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
*/
class Header1 extends React.Component {
    render(){
        return <h1>CHRONOZ</h1>
    }
}
ReactDOM.render(<Header1 />,document.getElementById('root'));

setInterval(() => {
    const element = <h1>{ new Date().getSeconds() }</h1>
    
    ReactDOM.render(element, document.getElementById('clock'));
},1000);
