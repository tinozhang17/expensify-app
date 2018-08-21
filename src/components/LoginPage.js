import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from "../actions/auth";

export const LoginPage = ({ startLogin }) => (
    <div>
        <form>
            <label htmlFor="login__username">Username: </label>
            <input id="login__username" type="text"/>
            <label htmlFor="login__password">Password: </label>
            <input id="login__password" type="text"/>
            <button type="button" onClick={startLogin}>Log In</button>
        </form>
    </div>
);

const mapDispatchToProps = (dispatch) => ({
    startLogin: () => dispatch(startLogin())
});

export default connect(undefined, mapDispatchToProps)(LoginPage);