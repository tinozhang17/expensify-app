import { addExpense, editExpense, removeExpense } from "../../actions/expenses";
import moment from 'moment';

test('should set up remove expense action object', () => {
    expect(removeExpense('123abc')).toEqual({
        type: 'REMOVE_EXPENSE',
        expenseId: '123abc'
    });
});

test('should set up edit expense action object', () => {
    const updateObj = {
        description: 'food',
        amount: 3400,
        createdAt: moment(2000).valueOf(),
        note: 'details'
    };

    expect(editExpense('123abc', updateObj)).toEqual({
        type: 'EDIT_EXPENSE',
        expenseId: '123abc',
        updateObj
        }
    );
});

test('should set up add expense action object', () => {
    const expense = {
        description: 'food',
        amount: 3400,
        createdAt: moment(2000).valueOf(),
        note: 'details'
    };
    const actionObj = addExpense(expense);
    expect(actionObj).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            id: actionObj.expense.id,
            ...expense
        }
    });
});

test('should set up add expense object with default values', () => {
    const createdAt = moment().valueOf();
    const actionObj = addExpense({ createdAt });
    expect(actionObj).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            id: actionObj.expense.id,
            description: '',
            note: '',
            amount: '',
            createdAt
        }
    })
});