import React from 'react';
import ShoppingCart from '../ShoppingCart.js';
import {shallow} from 'enzyme';
import airbnbs from '../airbnbs.json';


//import testData from './testData.json';

// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<Image />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });

it('should match the snapshot', () => {
  const wrapper = shallow(<ShoppingCart rentals={airbnbs} />);
  expect(wrapper).toMatchSnapshot();
});