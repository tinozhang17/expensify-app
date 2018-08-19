import React from 'react';
import { ExpensesSummary} from "../../components/ExpensesSummary";
import { shallow } from 'enzyme';
import numeral from 'numeraljs';
import expenses from '../fixtures/expenses';

test('ExpensesSummary component should match snapshot', () => {
    const wrapper = shallow(<ExpensesSummary expenses={expenses} />);
    expect(wrapper).toMatchSnapshot();
});

test('ExpensesSummary component should display correctly with one expense', () => {
    const wrapper = shallow(<ExpensesSummary expenses={[expenses[0]]} />);
    expect(wrapper.find('p').text()).toBe(`Viewing 1 expense totalling ${numeral(expenses[0].amount/100).format('$0,0.00')}`);
});

test('ExpensesSummary component should display correctly with two expenses', () => {
    const wrapper = shallow(<ExpensesSummary expenses={expenses.slice(0, 2)} />);
    expect(wrapper.find('p').text()).toBe(`Viewing 2 expenses totalling ${numeral((expenses[0].amount + expenses[1].amount) / 100).format('$0,0.00')}`);
});