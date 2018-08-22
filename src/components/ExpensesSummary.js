import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import numeral from 'numeraljs';
import selectVisibleExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expenses-total';

export const ExpensesSummary = (props) => (
    <div className="page-header">
        <div className="content-container">
            <h1 className="page-header__title">Viewing <span>{props.expenses.length}</span> expense{props.expenses.length > 1 ? 's' : ''} totalling <span>{numeral(selectExpensesTotal(props.expenses)/100).format('$0,0.00')}</span></h1>
            <div>
                <div className="page-header__action">
                    <Link className="button" to="/create">Add Expense</Link>
                </div>
            </div>
        </div>
    </div>
);

const mapStateToProps = (state) => ({
    expenses: selectVisibleExpenses(state.expenses, state.filters)
});

export default connect(mapStateToProps)(ExpensesSummary);