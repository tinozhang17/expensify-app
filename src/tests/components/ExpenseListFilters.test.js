import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseListFilters} from "../../components/ExpenseListFilters";
import { filters, altfilters } from "../fixtures/filters";
import { DateRangePicker } from 'react-dates';
import moment from 'moment';

let setTextFilterSpy, sortByDateSpy, sortByAmountSpy, setStartDateSpy, setEndDateSpy, wrapper;

beforeEach(() => {
    setTextFilterSpy = jest.fn();
    sortByDateSpy = jest.fn();
    sortByAmountSpy = jest.fn();
    setStartDateSpy = jest.fn();
    setEndDateSpy = jest.fn();
    wrapper = shallow(
        <ExpenseListFilters
            filters={filters}
            setTextFilter={setTextFilterSpy}
            sortByDate={sortByDateSpy}
            sortByAmount={sortByAmountSpy}
            setStartDate={setStartDateSpy}
            setEndDate={setEndDateSpy}
        />
    );
});

test('should render ExpenseListFilters correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseListFilters with altfilters correctly', () => {
    wrapper.setProps({ filters: altfilters });
    expect(wrapper).toMatchSnapshot();
});

test('should handle text change', () => {
    wrapper.find('input').simulate('change', {
        target: { value: 'bill' }
    });
    expect(setTextFilterSpy).toHaveBeenLastCalledWith('bill');
});

test('should handle sort by date', () => {
    wrapper.find('select').simulate('change', {
        target: { value: 'date' }
    });
    expect(sortByDateSpy).toHaveBeenCalled();
});

test('should handle sort by amount', () => {
    wrapper.find('select').simulate('change', {
        target: { value: 'amount' }
    });
    expect(sortByAmountSpy).toHaveBeenCalled();
});

test('should handle date changes', () => {
    const startDate = moment(0).add(10, 'day');
    const endDate = moment(0).add(20, 'day');
    wrapper.find(DateRangePicker).prop('onDatesChange')({ startDate, endDate });
    expect(setStartDateSpy).toHaveBeenLastCalledWith(startDate);
    expect(setEndDateSpy).toHaveBeenLastCalledWith(endDate);
});

test('should handle date focus changes', () => {
    wrapper.find(DateRangePicker).prop('onFocusChange')("startDate");
    expect(wrapper.state('calendarFocused')).toBe('startDate');
    wrapper.find(DateRangePicker).prop('onFocusChange')('endDate');
    expect(wrapper.state('calendarFocused')).toBe('endDate');
});