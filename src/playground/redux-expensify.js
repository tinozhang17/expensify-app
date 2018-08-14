import { createStore, combineReducers } from 'redux';

store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses);
});

const expenseOne = store.dispatch(addExpense({
    description: 'rent', amount: 100, createdAt: 200
}));

const expenseTwo = store.dispatch(addExpense({
    description: 'coffee', amount: 300, createdAt: 400
}));

// store.dispatch(removeExpense({ id: expenseOne.expense.id}));
//
// store.dispatch(editExpense(expenseTwo.expense.id, { amount: 50 }));

// store.dispatch(setTextFilter('re'));
// store.dispatch(setTextFilter());
//
// store.dispatch(sortByAmount());
// store.dispatch(sortByDate());

// store.dispatch(setStartDate(125));
// store.dispatch(setStartDate());
// store.dispatch(setEndDate(300));
// store.dispatch(setEndDate());

store.dispatch(sortByAmount());
store.dispatch(sortByDate());

const demoState = {
    expenses: [{
        id: 123,
        description: 'rent',
        note: 'This is the final payment',
        amount: 54500, // $545.00, but it's better to store it as 54500 so we don't have to deal with decimal
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount', // date or amount
        startDate: undefined,
        endDate: undefined
    }
};

