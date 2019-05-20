import React from 'react';
import Rental from '../Rental//Rental.js';
import {shallow} from 'enzyme';
import airbnbs from '../airbnbs.json';


//import testData from './testData.json';

// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<Image />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });

it('should match the snapshot', () => {
  const wrapper = shallow(<Rental rental={airbnbs[0]} />);
  expect(wrapper).toMatchSnapshot();
});