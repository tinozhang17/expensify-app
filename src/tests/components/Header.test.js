import React from 'react';
import { shallow } from 'enzyme';
// import toJSON from 'enzyme-to-json'; // this library allows for showing the rendered components part of the Enzyme wrapper object and not the other details. We commented this out, because we specified it in the jest.config.json file, which means we don't need to toJSON(wrapper) anymore.
// import ReactShallowRenderer from 'react-test-renderer/shallow';
import Header from '../../components/Header';

// test('should render Header correctly', () => {
//     const renderer = new ReactShallowRenderer();
//     renderer.render(<Header />);
//     expect(renderer.getRenderOutput()).toMatchSnapshot(); // this is always going to pass the first time you run it, because there is no snapshot yet, and jest will create a snapshot of what the rendered Header output look like. The second time we run this test, it's going to compare with the existing snapshot. If it's the same, it's going to pass. Otherwise, it's going to fail. When we run this test, jest is going to create a subfolder in the current directory called "_snapshots_" to store the snapshots.
// });

test('should render Header correctly', () => {
    const wrapper = shallow(<Header/>);
    expect(wrapper).toMatchSnapshot();
    // expect(wrapper.find('h1').text()).toBe('Expensify');
});