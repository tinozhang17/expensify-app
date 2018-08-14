import React from 'react';
import moment from 'moment';
import { shallow } from 'enzyme';
import ExpenseForm from '../../components/ExpenseForm';
import { SingleDatePicker } from 'react-dates';
import expenses from '../fixtures/expenses';

test('should render ExpenseForm correctly', () => {
    expect(shallow(<ExpenseForm/>)).toMatchSnapshot();
});

test('should render ExpenseForm with expense data', () => {
    expect(shallow(<ExpenseForm expense={expenses[1]} />)).toMatchSnapshot();
});

test('should render error for invalid form submission', () => {
   const wrapper = shallow(<ExpenseForm/>);
   expect(wrapper).toMatchSnapshot();
   wrapper.find('form').simulate('submit', {preventDefault: () => {}});
   expect(wrapper.state('error').length).toBeGreaterThan(0);
   expect(wrapper).toMatchSnapshot();
});

test('should set description on input change', () => {
    const value = 'test description';
    const wrapper = shallow(<ExpenseForm/>);
    wrapper.find('input').at(0).simulate('change', {
        target: { value }
    });
    expect(wrapper.state('description')).toBe(value);
});

test('should set note on textarea change', () => {
    const value = 'test note';
    const wrapper = shallow(<ExpenseForm/>);
    wrapper.find('textarea').simulate('change', {
        target: { value }
    });
    expect(wrapper.state('note')).toBe(value);
});

test('should set amount on input change when input is valid', () => {
    const value = '10.01';
    const wrapper = shallow(<ExpenseForm/>);
    wrapper.find('input').at(1).simulate('change', {
        target: {value}
    });
    expect(wrapper.state('amount')).toBe(value);
});

test('should set amount on input change when input is NOT valid', () => {
    const value = '10.222';
    const wrapper = shallow(<ExpenseForm/>);
    wrapper.find('input').at(1).simulate('change', {
        target: {value}
    });
    expect(wrapper.state('amount')).toBe("");
});

test('should call onSubmit prop for valid form submission', () => {
    const onSubmitSpy = jest.fn(); // returns a new spy
    const wrapper = shallow(<ExpenseForm expense={expenses[0]} onSubmit={onSubmitSpy}/>);
    wrapper.find('form').simulate('submit', {
        preventDefault: () => {}
    });
    expect(wrapper.state('error')).toBe(undefined);
    expect(onSubmitSpy).toHaveBeenLastCalledWith({
        description: expenses[0].description,
        amount: expenses[0].amount,
        note: expenses[0].note,
        createdAt: expenses[0].createdAt
    });
});

test('should set new date on date change', () => {
    const now = moment();
    const wrapper = shallow(<ExpenseForm/>);
    wrapper.find(SingleDatePicker).prop('onDateChange');
    expect(wrapper.state('createdAt')).toEqual(now);
});

test('should set focus on focus change', () => {
    const wrapper = shallow(<ExpenseForm/>);
    wrapper.find(SingleDatePicker).prop('onFocusChange')({focused: true});
    expect(wrapper.state('calendarFocused')).toBe(true);
});