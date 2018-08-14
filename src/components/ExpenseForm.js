import 'react-dates/initialize';
import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';

export default class ExpenseForm extends React.Component {
    defaultState = {
        description: this.props.expense ? this.props.expense.description : '',
        note:  this.props.note ? this.props.expense.description : '',
        amount: this.props.expense ? (this.props.expense.amount / 100).toFixed(2).toString() : '' ,
        createdAt: this.props.expense ? moment(this.props.expense.createdAt) : moment(),
        calendarFocused: false,
        error: undefined,
    };

    state = {
        ...this.defaultState,
    };

    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState(() => ({ description }));
    };

    onNoteChange = (e) => {
        const note = e.target.value;
        this.setState(() => ({ note }))
    };

    onAmountChange = (e) => {
        const amount = e.target.value;
        if (!amount || amount.match(/^\d{1,}(?:\.\d{0,2})?$/)) {
            this.setState({ amount });
        }
    };

    onDateChange = (createdAt) => {
        if (createdAt) {
            this.setState(() => ({ createdAt }));
        }
    };

    onFocusChange = ({ focused }) => {
        this.setState(() => ({ calendarFocused: focused}));
    };

    onSubmit = (e) => {
        e.preventDefault();
        if (!this.state.description || !this.state.amount) {
            this.setState(() => ({ error: 'Please provide description and amount' }));
        } else {
            this.setState(() => ({ error: undefined }));
            this.props.onSubmit({
                description: this.state.description,
                amount: parseFloat(this.state.amount, 10) * 100,
                createdAt: this.state.createdAt.valueOf(),
                note: this.state.note
            });
            this.setState((prevState) => ({...prevState}));
        }
    };

    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.onSubmit}>
                    <input type="text" placeholder="Description" autoFocus value={this.state.description} onChange={this.onDescriptionChange}/>
                    <input type="text" placeholder="Amount" value={this.state.amount} onChange={this.onAmountChange} />
                    <SingleDatePicker date={this.state.createdAt}
                                      onDateChange={this.onDateChange}
                                      focused={this.state.calendarFocused}
                                      onFocusChange={this.onFocusChange}
                                      numberOfMonths={1}
                                      isOutsideRange={() => false}/>
                    <textarea placeholder={"Add a note for your expense (optional)"} onChange={this.onNoteChange} />
                    <button>{this.props.expense ? 'Update Expense' : 'Add Expense'}</button>
                </form>
            </div>
        );
    }
}