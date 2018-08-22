import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';

export const ExpenseList = (props) => (
    <div className='content-container'>
        <div className="list-header">
            <div className="show-for-mobile">Expenses</div>
            <div className="show-for-desktop">Expense</div>
            <div className="show-for-desktop">Amount</div>
        </div>
        <div className="list-body">
        {
            props.expenses.length ? (props.expenses.map(expense => (<ExpenseListItem key={expense.id} dispatch={props.dispatch} {...expense} />))) : (<div className="list-item--message"><span>No Expenses</span></div>)
        }
        </div>
    </div>
);

const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses, state.filters)
    };
};

export default connect(mapStateToProps)(ExpenseList); // Now, ExpenseList gets access to the list of expenses in the state through the props argument. The connect() function basically creates a higher-order component