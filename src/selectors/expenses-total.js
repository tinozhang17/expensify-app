export default (expenses) => {
    if (expenses.length === 0) {
        return 0;
    } else if (expenses.length === 1) {
        return expenses[0].amount;
    } else {
        return expenses.reduce((accumulator, currentItem) => accumulator + currentItem.amount, 0);
    }
};