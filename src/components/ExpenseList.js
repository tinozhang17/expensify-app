import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';

export const ExpenseList = (props) => (
    <div>
        <h1>Expense List</h1>
        {
            props.expenses.length ? (props.expenses.map(expense => (<ExpenseListItem key={expense.id} dispatch={props.dispatch} {...expense} />))) : (<p>There are no expenses</p>)
        }
    </div>
);

const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses, state.filters)
    };
};

export default connect(mapStateToProps)(ExpenseList); // Now, ExpenseList gets access to the list of expenses in the state through the props argument. The connect() function basically creates a higher-order component