import { createStore } from 'redux';

// Action Generators - functions that generate action objects

const incrementCount = ({ incrementBy = 1 } = {}) => ({
    type: 'INCREMENT',
    incrementBy
});

// Reducers
// Reducers determine what to do based off of action, such as actually incrementing the count
// 1. Reducers are pure functions (aka. the output is only determined by the input passed to the function, and the function doesn't interact with anything that is outside of its scope)
// 2. Never change state or action that are passed into it
const countReducer = (currentState = { count: 0}, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                count: currentState.count + (action.incrementBy || 1)
            };
        case 'DECREMENT':
            return {
                count: currentState.count - (action.decrementBy || 1)
            };
        case 'RESET':
            return {
                count: 0
            };
        default:
            return currentState;
    }
};

// initialize state store
const store = createStore(countReducer);

// monitor changes to the Redux state. The subscribe() function takes in a callback that is called every time a change is made to the store. To unsubscribe a subscribe, just call the return vallue from the subscribe() function.
const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});

console.log(store.getState()); // get the current state

// Actions - an object that gets sent to the store. It's an object that describes the type of action we want to take. Action type by convention should be in all upper-case, with each word separated by an underscore such as type: "INCREMENT_COUNT"
store.dispatch(incrementCount());

store.dispatch({
    type: 'DECREMENT',
    decrementBy: 10
});

store.dispatch({
    type: 'RESET'
});
