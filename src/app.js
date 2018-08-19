import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from "./routers/AppRouter";
import configureStore from './store/configureStore';
import { addExpense } from "./actions/expenses";
import { setTextFilter } from "./actions/filters";
import getVisibleExpenses from "./selectors/expenses";
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';
import './firebase/firebase';

const store = configureStore();
store.dispatch(addExpense({ description: 'Water Bill', amount: 100, createdAt: 150 }));

store.dispatch(addExpense({ description: 'Gas Bill', amount: 400, createdAt: 250 }));

store.dispatch(addExpense({ description: 'Rent', amount: 500, createdAt: 100 }));

console.log(getVisibleExpenses(store.getState().expenses, store.getState().filters));

const jsx = (
    <Provider store={store}>
        <AppRouter/>
    </Provider>
);

ReactDOM.render(jsx, document.querySelector('#app'));

