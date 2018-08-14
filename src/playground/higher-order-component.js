// Higher Order Component (HOC) - A component (HOC) that renders/wraps another component (a regular component)
// The purpose of HOC is to reuse code, perform Render Hijacking, manipulate Prop, and abstract state



import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The info is: {props.info}</p>
    </div>
);

const withAdminWarning = (WrappedComponent) => {
    // We are returning an HOC here
    return (props) => (
        <div>
            {props.isAdmin && <p>This is private info. Please don't share!</p>}
            <WrappedComponent {...props} />
        </div>
    );
};

const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAuthenticated ? <WrappedComponent {...props} /> : <p>Please login to view the info!</p>}
        </div>
    );
};

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

// ReactDOM.render(<AdminInfo isAdmin={false} info={'There are the details'} />, document.querySelector('#app'));
ReactDOM.render(<AuthInfo isAuthenticated={false} info={'There are the details'} />, document.querySelector('#app'));