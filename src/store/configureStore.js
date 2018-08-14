import { createStore, combineReducers } from 'redux';
import expensesReducer from '../reducers/expenses';
import filtersReducer from '../reducers/filters';

export default () => {
    // Store creation
    return createStore(
        combineReducers({
            expenses: expensesReducer, // state property as the key and the corresponding reducer as the value.
            filters: filtersReducer
        }),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() /* this enables redux-devtools to be able to show you the store in the chrome browser when you go to the "redux" tab of the chrome developer view */
    );
};