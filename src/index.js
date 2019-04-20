import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'mobx-react';
import Store from './components/Store';

const izone = new Store();


ReactDOM.render(
    <Provider  izone={izone}>
        <App />
    </Provider>     , document.getElementById('root'));

