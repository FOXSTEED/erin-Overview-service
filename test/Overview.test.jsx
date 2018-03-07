import React from 'react';
import { shallow, mount, render } from 'enzyme';

import Overview from '../client/app/Overview (Main)/Overview.jsx';

describe('Parent Component', () => {
  test('it should determine if attraction is open or closed', () => {
    const date = new Date();
    date.getHours = jest.fn();
    date.getHours.mockReturnValue = 23;

    const wrapper = shallow(<Overview id={0} />);
    const instance = wrapper.instance();

    wrapper.instance().determineIfOpen(9, 1, date);
    expect(instance.state.currentlyOpen).toBe(false);
  });
});
