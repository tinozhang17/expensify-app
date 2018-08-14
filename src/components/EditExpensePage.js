import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { editExpense } from '../actions/expenses';
import { removeExpense } from "../actions/expenses";

export class EditExpensePage extends React.Component {
    onSubmit = (expense) => {
        this.props.editExpense(this.props.match.params.id, expense);
        this.props.history.push('/');
    };

    onRemove = () => {
        this.props.removeExpense(this.props.match.params.id);
        this.props.history.push('/');
    };

    render () {
        return (
            <div>
                <ExpenseForm
                    expense={this.props.expense}
                    onSubmit={this.onSubmit} />
                <button onClick={this.onRemove}>Remove</button>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    editExpense: (id, expense) => {
        dispatch(editExpense(id, expense));
    },
    removeExpense: (id) => {
        dispatch(removeExpense(id))
    }
});


export default connect((state, props) => ({expense: state.expenses.find(expense => expense.id === props.match.params.id)}), mapDispatchToProps)(EditExpensePage);