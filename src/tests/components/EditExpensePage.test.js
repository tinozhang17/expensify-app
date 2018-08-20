import React from 'react';
import { shallow } from 'enzyme';
import { EditExpensePage} from "../../components/EditExpensePage";
import expenses from '../fixtures/expenses';
import moment from 'moment';

let startEditExpenseSpy, startRemoveExpenseSpy, historySpy, updateObj, wrapper;

beforeEach(() => {
    startEditExpenseSpy = jest.fn();
    startRemoveExpenseSpy = jest.fn();
    historySpy = { push: jest.fn() };
    updateObj = {
        description: 'updated description',
        note: 'updated note',
        amount: 87654,
        createdAt: moment(0).add(876, 'day').valueOf()
    };
    wrapper = shallow(<EditExpensePage startEditExpense={startEditExpenseSpy} startRemoveExpense={startRemoveExpenseSpy} history={historySpy} expense={expenses[1]} match={ { params: { id: expenses[1].id } } } />);
});

test('should edit expense page correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should handle onSubmit', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(updateObj);
    expect(startEditExpenseSpy).toHaveBeenLastCalledWith(expenses[1].id, updateObj);
    expect(historySpy.push).toHaveBeenLastCalledWith('/');
});

test('should handle remove button onClick event', () => {
    wrapper.find('button').simulate('click');
    expect(startRemoveExpenseSpy).toHaveBeenCalledWith(expenses[1].id);
    expect(historySpy.push).toHaveBeenCalledWith('/');
});