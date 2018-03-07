/* eslint no-undef: "off" */
import React from 'react';
import { shallow } from 'enzyme';


import Bubbles from '../client/app/Bubbles/Bubbles.jsx';
import Bubble from '../client/app/Bubbles/Bubble.jsx';
import HalfBubble from '../client/app/Bubbles/HalfBubble.jsx';
import EmptyBubble from '../client/app/Bubbles/EmptyBubble.jsx';

/*
  Test that when passed a rating prop of 5, Bubbles renders
  <span><Bubble /><Bubble /><Bubble /><Bubble /><Bubble /></span>

  When rating = 3.5:
  <span><Bubble /><Bubble /><Bubble /><HalfBubble /><EmptyBubble /></span>
*/

describe('<Bubbles />', () => {
  test('it should handle rating = 5', () => {
    const wrapper = shallow(<Bubbles rating={5} height={16} width={16} />);
    expect(wrapper.find(Bubble).length).toBe(5);
  });

  test('it should handle rating = 3.5', () => {
    const wrapper = shallow(<Bubbles rating={3.5} height={16} width={16} />);
    expect(wrapper.find(Bubble).length).toBe(3);
    expect(wrapper.find(HalfBubble).length).toBe(1);
    expect(wrapper.find(EmptyBubble).length).toBe(1);
  });
});
