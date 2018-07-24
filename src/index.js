import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import registerServiceWorker from './registerServiceWorker';
// import Aak from './components/one';
import Todo from './components/Todo/index';

import { Provider } from "react-redux";
import store from "./store/index"

ReactDOM.render(
    <Provider store={store} >
         <Todo />
    </Provider>,
     document.getElementById('root'));
registerServiceWorker();
