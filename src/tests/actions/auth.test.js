import { login, logout } from "../../actions/auth";

const uid = '1234';

test('should generate login action', () => {
    expect(login(uid)).toEqual({
        type: 'LOGIN',
        uid
    });
});

test('should generate logout action', () => {
    expect(logout()).toEqual({
        type: 'LOGOUT'
    });
});

