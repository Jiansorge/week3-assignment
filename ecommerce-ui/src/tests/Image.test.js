import React from 'react';
import Image from '../Rental/components/Image.js';
import {shallow} from 'enzyme';
import airbnbs from '../airbnbs.json';


//import testData from './testData.json';

// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<Image />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });

it('should match the snapshot', () => {
  const wrapper = shallow(<Image rental={airbnbs[0]} />);
  expect(wrapper).toMatchSnapshot();
});