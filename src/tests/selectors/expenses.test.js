import selectExpenses from '../../selectors/expenses';
import moment from 'moment';
import expenses from '../fixtures/expenses';

test('should filter by text value', () => {
    const filters = {
        text: 'bill',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    };

    expect(selectExpenses(expenses, filters)).toEqual([expenses[0], expenses[1]]);
});

test('should filter by start date', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: moment(0),
        endDate: undefined
    };

    expect(selectExpenses(expenses, filters)).toEqual([expenses[2], expenses[0]]);
});

test('should filter by end date', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: moment(0)
    };

    expect(selectExpenses(expenses, filters)).toEqual([expenses[0], expenses[1]]);
});

test('should filter by start and end date', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: moment(0).add(2, 'day'),
        endDate: moment(0).add(5, 'day')
    };

    expect(selectExpenses(expenses, filters)).toEqual([expenses[2]]);
});

test('should sort by date', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    };

    expect(selectExpenses(expenses, filters)).toEqual([expenses[2], expenses[0], expenses[1]]);
});

test('should sort by amount', () => {
    const filters = {
        text: '',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    };

    expect(selectExpenses(expenses, filters)).toEqual([expenses[1], expenses[0], expenses[2]]);
});