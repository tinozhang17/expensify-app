import React from 'react';
import { shallow } from 'enzyme';
import ExpenseListItem from '../../components/ExpenseListItem';
import expenses from '../fixtures/expenses';

test('should render expense list item', () => {
    expect(shallow(<ExpenseListItem {...expenses[1]} />)).toMatchSnapshot();
});