import uuid from 'uuid';
import moment from 'moment';

/* Action Generators */
export const addExpense = (
    {
        description = '',
        note = '',
        amount = '',
        createdAt = moment().valueOf()
    }
) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        createdAt
    }
});

export const removeExpense = (id) => ({
    type: 'REMOVE_EXPENSE',
    expenseId: id
});

export const editExpense = (id, updateObj) => ({
    type: 'EDIT_EXPENSE',
    expenseId: id,
    updateObj
});