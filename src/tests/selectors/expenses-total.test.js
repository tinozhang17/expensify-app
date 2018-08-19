import selectExpensesTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

test('should sum 0 if no expense', () => {
    expect(selectExpensesTotal([])).toBe(0);
});

test('should sum correctly for an expense array of length 1', () => {
    expect(selectExpensesTotal([expenses[0]])).toBe(expenses[0].amount);
});

test('should sum correctly for an expense array of more than 1 item', () => {
    expect(selectExpensesTotal(expenses.slice(0, 3))).toBe(expenses[0].amount + expenses[1].amount + expenses[2].amount);
});