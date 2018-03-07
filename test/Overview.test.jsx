import React from 'react';
import { shallow } from 'enzyme';

import Overview from '../client/app/Overview (Main)/Overview.jsx';

describe('Parent Component', () => {
  test('it should determine if attraction is open or closed', () => {
    const wrapper = shallow(<Overview id={0} />);
    const instance = wrapper.instance();
    const date = new Date();

    date.getHours = jest.fn();
    date.getHours
      .mockReturnValueOnce(23)
      .mockReturnValueOnce(11);

    instance.determineIfOpen(9, 1, date);
    expect(instance.state.currentlyOpen).toBe(false);

    instance.determineIfOpen(9, 1, date);
    expect(instance.state.currentlyOpen).toBe(true);
  });
});
