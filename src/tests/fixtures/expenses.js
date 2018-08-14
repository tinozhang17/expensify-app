import moment from 'moment';

export default [
    {
        id: '1',
        description: 'water bill',
        note: '',
        amount: 195,
        createdAt: 0
    },
    {
        id: '2',
        description: 'heat bill',
        note: '',
        amount: 500,
        createdAt: moment(0).subtract(4, 'day').valueOf()
    },
    {
        id: '3',
        description: 'credit card',
        note: '',
        amount: 45,
        createdAt: moment(0).add(4, 'day').valueOf()
    }
];