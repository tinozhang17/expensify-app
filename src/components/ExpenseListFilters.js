import React from 'react';
import { connect } from 'react-redux';
import { DateRangePicker } from 'react-dates';
import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from '../actions/filters';

export class ExpenseListFilters extends React.Component {
    state = {
        startDate: null,
        endDte: null,
        calendarFocused: null,
    };

    onDatesChange = ({ startDate, endDate }) => {
        this.props.setStartDate(startDate);
        this.props.setEndDate(endDate);
    };

    onFocusChange = (calendarFocused) => {
        this.setState({ calendarFocused });
    };

    onTextChange = (e) => {
        this.props.setTextFilter(e.target.value);
    };

    onSortChange = (e) => {
        const val = e.target.value;
        if (val === 'amount') {
            this.props.sortByAmount();
        } else if (val === 'date') {
            this.props.sortByDate();
        }
    };

    render() {
        return (
            <div className="content-container">
                <div className="input-group">
                    <div className="input-group__item">
                        <input placeholder="Search expenses" className="text-input" type="text" value={this.props.filters.text} onChange={this.onTextChange} />
                    </div>
                    <div className="input-group__item">
                        <select className="select" placeholder="Search expenses" onChange={this.onSortChange}>
                            {['Amount', 'Date'].map((item) => {
                                return (
                                    <option
                                        value={item.toLowerCase()}
                                        key={item.toLowerCase()}
                                        selected={item.toLowerCase()===this.props.filters.sortBy}>{item}</option>
                                );
                            })}
                        </select>
                    </div>
                    <div className="input-group__item">
                        <DateRangePicker
                            startDate={this.props.filters.startDate}
                            startDateId={'filters__start-date-id'}
                            endDate={this.props.filters.endDate}
                            endDateId={'filters__end-date-id'}
                            onDatesChange={this.onDatesChange}
                            focusedInput={this.state.calendarFocused}
                            onFocusChange={this.onFocusChange}
                            showClearDates={true}
                            numberOfMonths={1}
                            isOutsideRange={() => false}
                        />
                    </div>
                </div>
            </div>
        );
    };
}

const mapStateToProps = (state) => ({
    filters: state.filters
});

const mapDispatchToProps = (dispatch) => ({
    setStartDate: (startDate) => dispatch(setStartDate(startDate)),
    setEndDate: (endDate) => dispatch(setEndDate(endDate)),
    setTextFilter: (e) => dispatch(setTextFilter(e.target.value)),
    sortByAmount: () => dispatch(sortByAmount()),
    sortByDate: () => dispatch(sortByDate())
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters);