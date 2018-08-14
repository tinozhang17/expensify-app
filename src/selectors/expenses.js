import moment from 'moment';

export default (expenses, { text, sortBy, startDate, endDate }) => {
    return expenses.filter((expense) => {
        const startDateMatch = startDate ? startDate.isSameOrBefore(moment(expense.createdAt), 'day') : true;
        const endDateMatch = endDate ? endDate.isSameOrAfter(moment(expense.createdAt)) : true;
        const textMatch = text === "" || expense.description.toLowerCase().includes(text.toLowerCase());
        return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b) => {
        if (sortBy === 'date') {
            return a.createdAt < b.createdAt ? 1 : -1; // most recent first
        } else if (sortBy === 'amount') {
            return a.amount < b.amount ? 1 : -1; // largest amount to smallest amount
        }
    });
};
