import React from 'react';
import { shallow } from 'enzyme';
import { EditExpensePage} from "../../components/EditExpensePage";
import expenses from '../fixtures/expenses';
import moment from 'moment';

let editExpenseSpy, removeExpenseSpy, historySpy, updateObj, wrapper;

beforeEach(() => {
    editExpenseSpy = jest.fn();
    removeExpenseSpy = jest.fn();
    historySpy = { push: jest.fn() };
    updateObj = {
        description: 'updated description',
        note: 'updated note',
        amount: 87654,
        createdAt: moment(0).add(876, 'day').valueOf()
    };
    wrapper = shallow(<EditExpensePage editExpense={editExpenseSpy} removeExpense={removeExpenseSpy} history={historySpy} expense={expenses[1]} match={ { params: { id: expenses[1].id } } } />);
});

test('should edit expense page correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should handle onSubmit', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(updateObj);
    expect(editExpenseSpy).toHaveBeenLastCalledWith(expenses[1].id, updateObj);
    expect(historySpy.push).toHaveBeenLastCalledWith('/');
});

test('should handle remove button onClick event', () => {
    wrapper.find('button').simulate('click');
    expect(removeExpenseSpy).toHaveBeenCalledWith(expenses[1].id);
    expect(historySpy.push).toHaveBeenCalledWith('/');
});