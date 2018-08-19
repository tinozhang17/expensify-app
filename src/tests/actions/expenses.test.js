import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { startAddExpense, addExpense, editExpense, removeExpense } from "../../actions/expenses";
import moment from 'moment';
import expenses from '../fixtures/expenses';
import database from '../../firebase/firebase';

const createMockStore = configureMockStore([thunk]);

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
    const actionObj = addExpense(expenses[2]);
    expect(actionObj).toEqual({
        type: 'ADD_EXPENSE',
        expense: expenses[2]
    });
});

// below is how to write an async test cases. You have to pass in the done argument.
test('should add expense to database and store', (done) => {
    const store = createMockStore({});
    const expenseData = {
        description: 'Mouse',
        amount: 3000,
        note: 'This one is better',
        createdAt: moment(0).add(1, 'day').valueOf()
    };
    store.dispatch(startAddExpense(expenseData)).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
                ...expenseData
            }
        });
        return database.ref(`expenses/${actions[0].expense.id}`).once('value');
    }).then((snapshot) => {
        expect(snapshot.val()).toEqual(expenseData);
        done();
    });
});

test('should add expense with defaults to database and store', (done) => {
    const store = createMockStore({});
    const expenseData = {
        description: '',
        note: '',
        amount: '',
        createdAt: 0
    };
    store.dispatch(startAddExpense({})).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
                ...expenseData
            }
        });
        return database.ref(`expenses/${actions[0].expense.id}`).once('value');
    }).then((snapshot) => {
        expect(snapshot.val()).toEqual(expenseData);
        done();
    });
});

// test('should set up add expense object with default values', () => {
//     const createdAt = moment().valueOf();
//     const actionObj = addExpense({ createdAt });
//     expect(actionObj).toEqual({
//         type: 'ADD_EXPENSE',
//         expense: {
//             id: actionObj.expense.id,
//             description: '',
//             note: '',
//             amount: '',
//             createdAt
//         }
//     })
// });