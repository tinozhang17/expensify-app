// combineReducers allows us to define multiple functions that define how our redux application changes

// Expenses Reducer
const expensesReducerDefaultState = [];

export default (state = expensesReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_EXPENSES':
            return [...state, ...action.expenses];
        case 'ADD_EXPENSE':
            return [...state, action.expense];
        case 'REMOVE_EXPENSE':
            return state.filter((expenseObj) => expenseObj.id !== action.expenseId);
        case 'EDIT_EXPENSE':
            return state.map((expenseObj) => {
                if (expenseObj.id === action.expenseId) {
                    return {
                        ...expenseObj,
                        ...action.updateObj
                    };
                } else {
                    return expenseObj;
                }
            });
        default:
            return state;
    }
};
