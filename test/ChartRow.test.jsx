import React from 'react';
import { mount } from 'enzyme';

import RatingsChart from '../client/app/Body/RatingsColumn/RatingsChart/RatingsChart.jsx';

describe('<RatingsChart />', () => {
  test('should render proper fill percentage for each <ChartRow />', () => {
    // const wrapper = shallow(<ChartRow
    //   percentage={70}
    //   ratingWord="Excellent"
    //   max={false}
    // />);

    const wrapper = mount(<RatingsChart ratings={[300, 100, 50, 0, 10]} reviews={460} />);
    const percentages = [65, 21, 10, 0, 2];

    expect(wrapper.find('.fill').length).toBe(5);
    wrapper.find('.fill').forEach((span, index) => {
      expect(span.hasClass(percentages[index].toString())).toEqual(true);
    });
  });
});
