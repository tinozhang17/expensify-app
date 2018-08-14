import { setStartDate, setEndDate, setTextFilter, sortByDate, sortByAmount } from "../../actions/filters";
import moment from 'moment';

test('should generate set_start_date action object', () => {
    expect(setStartDate(moment(2000))).toEqual({
        type: 'SET_START_DATE',
        startDate: moment(2000)
    });
});

test('should generate set_end_date action object', () => {
    expect(setEndDate(moment(2000))).toEqual({
        type: 'SET_END_DATE',
        endDate: moment(2000)
    })
});

test('should generate sort_by_date action object', () => {
    expect(sortByDate()).toEqual({
        type: 'SORT_BY_DATE',
        sortBy: 'date'
    });
});

test('should generate sort_by_amount action object', () => {
    expect(sortByAmount()).toEqual({
        type: 'SORT_BY_AMOUNT',
        sortBy: 'amount'
    });
});

test('should generate set_text_filter action object', () => {
    expect(setTextFilter('rent')).toEqual({
        type: 'SET_TEXT_FILTER',
        text: 'rent'
    });
});

test('should generate set_text_filter action object with default value', () => {
    expect(setTextFilter()).toEqual({
        type: 'SET_TEXT_FILTER',
        text: ''
    });
});
