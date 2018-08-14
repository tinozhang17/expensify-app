import filtersReducer from '../../reducers/filters';
import moment from 'moment';

const defaultState = {
    text: "",
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
};

test('should set up default filter values', () => {
    const state = filtersReducer(undefined, { type: '@@INIT' }); // The '@@INIT" action type is for initializing the store
    expect(state).toEqual(defaultState);
});

test('should set sortBy to amount', () => {
    expect(filtersReducer(undefined, {type: 'SORT_BY_AMOUNT'}).sortBy).toBe('amount');
});

test('should set sortBy to date', () => {
    expect(filtersReducer({
        ...defaultState,
        sortBy: 'amount'
    }, {type: 'SORT_BY_DATE'}).sortBy).toBe('date');
});

test('should set the text filter', () => {
    expect(filtersReducer(undefined, {
        type: 'SET_TEXT_FILTER',
        text: 'rent'
    }).text).toBe('rent');
});

test('should set the start date', () => {
    expect(filtersReducer(undefined, {
        type: 'SET_START_DATE',
        startDate: moment(0).add(2, 'day').valueOf()
    }).startDate).toBe(moment(0).add(2, 'day').valueOf())
});

test('should set the end date', () => {
    expect(filtersReducer(undefined, {
        type: 'SET_END_DATE',
        endDate: moment(0).add(2, 'day').valueOf()
    }).endDate).toBe(moment(0).add(2, 'day').valueOf())
});