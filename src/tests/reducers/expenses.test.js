import expenseReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';
import moment from 'moment';

test('should set default state', () => {
    expect(expenseReducer(undefined, {type: '@@INIT'})).toEqual([]);
});

test('should remove expense by id', () => {
    expect(expenseReducer(expenses, {
        type: 'REMOVE_EXPENSE',
        expenseId: expenses[1].id
    })).toEqual([expenses[0], expenses[2]]);
});

test('should not remove expense if id is not found', () => {
    expect(expenseReducer(expenses, {
        type: 'REMOVE_EXPENSE',
        expenseId: -1
    })).toEqual(expenses);
});

test('should add expense', () => {
    const newExpense = {
        id: '4',
            description: 'food bill',
            note: '',
            amount: 6000,
            createdAt: moment(0).subtract(10, 'day').valueOf()
    };

    expect(expenseReducer(expenses, {
        type: 'ADD_EXPENSE',
        expense: newExpense
    })).toEqual([...expenses, newExpense]);
});

const updateObj = {
    description: 'heat bill',
    note: '',
    amount: 1000,
    createdAt: moment(0).add(20, 'day').valueOf()
};

test('should edit expense', () => {
    expect(expenseReducer(expenses, {
        type: 'EDIT_EXPENSE',
        expenseId: expenses[1].id,
        updateObj
    })).toEqual([expenses[0], {
        id: expenses[1].id,
        ...updateObj
    }, expenses[2]]);
});

test('should not edit expense', () => {
    expect(expenseReducer(expenses, {
        type: 'EDIT_EXPENSE',
        expenseId: '-1',
        updateObj
    })).toEqual(expenses);
});
