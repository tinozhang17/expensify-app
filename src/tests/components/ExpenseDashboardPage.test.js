import React from 'react';
import { shallow } from 'enzyme';
import ExpenseDashboardPage from '../../components/ExpenseDashboardPage';

test('should render expense dashboard', () => {
    expect(shallow(<ExpenseDashboardPage/>)).toMatchSnapshot();
});