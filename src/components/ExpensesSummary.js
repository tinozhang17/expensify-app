import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeraljs';
import selectVisibleExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expenses-total';

export const ExpensesSummary = (props) => (
    <div>
        <p>Viewing {props.expenses.length} expense{props.expenses.length > 1 ? 's' : ''} totalling {numeral(selectExpensesTotal(props.expenses)/100).format('$0,0.00')}</p>
    </div>
);

const mapStateToProps = (state) => ({
    expenses: selectVisibleExpenses(state.expenses, state.filters)
});

export default connect(mapStateToProps)(ExpensesSummary);