import moment from 'moment';
import database from '../firebase/firebase';

/* Action Generators */
export const addExpense = (expense) => ({
    type: 'ADD_EXPENSE',
    expense
});

export const startAddExpense = (expenseData = {}) => {
    return (dispatch) => {
        const {
            description = '',
            note = '',
            amount = '',
            createdAt = moment().valueOf()
        } = expenseData;
        const expense = { description, note, amount, createdAt };
        // below we are returning another promise, so that it can be further chained later, if needed.
        return database.ref('expenses')
            .push(expense)
            .then((snapshot) => {
             dispatch(addExpense({
                 id: snapshot.key,
                 ...expense
             }));
            });
    };
};

export const removeExpense = (id) => ({
    type: 'REMOVE_EXPENSE',
    expenseId: id
});

export const editExpense = (id, updateObj) => ({
    type: 'EDIT_EXPENSE',
    expenseId: id,
    updateObj
});

// SET_EXPENSES
export const setExpenses = (expenses) => ({
    type: 'SET_EXPENSES',
    expenses
});

export const startSetExpenses = () => {
    return (dispatch) => {
        const expenses = [];
        return database.ref('expenses').once('value').then((snapshot) => {
            snapshot.forEach((childSnapshot) => {
                expenses.push({
                    id: childSnapshot.key,
                    ...childSnapshot.val()
                });
            });
            dispatch(setExpenses(expenses));
        });
    };
};