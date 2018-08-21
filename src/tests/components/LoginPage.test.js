import React from 'react';
import { shallow } from 'enzyme';
import { LoginPage } from '../../components/LoginPage';

let wrapper, startLoginSpy;

beforeEach(() => {
    startLoginSpy = jest.fn();
    wrapper = shallow(<LoginPage startLogin={startLoginSpy} />);
});

test('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should handle login click correctly', () => {
    wrapper.find('button').simulate('click');
    expect(startLoginSpy).toHaveBeenCalled();
});