import authReducer from '../../reducers/auth';

const uid = '1234';

test('handle login action type', () => {
    expect(authReducer(undefined, {
        type: 'LOGIN',
        uid
    })).toEqual({uid});
});

test('handle logout action type', () => {
    expect(authReducer(undefined, {
        type: 'LOGOUT'
    })).toEqual({});
});

