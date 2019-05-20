import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import {shallow} from 'enzyme';
import airbnbs from './airbnbs.json';


//import testData from './testData.json';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('should match the snapshot', () => {
  const wrapper = shallow(<App />);
  expect(wrapper).toMatchSnapshot();
});

// it('should match the snapshot', () => {
//   const wrapper = shallow(<ShoppingCart rentals={airbnbs}/>);
//   expect(wrapper).toMatchSnapshot();
// });

// it('should match the snapshot', () => {
//   const wrapper = shallow(<Rentals rentals={airbnbs}/>);
//   expect(wrapper).toMatchSnapshot();
// });

// it('should match the snapshot', () => {
//   const wrapper = shallow(<Rental rental={airbnbs[0]}/>);
//   expect(wrapper).toMatchSnapshot();
// });

// it('should match the snapshot', () => {
//   const wrapper = shallow(<RentalDetail rental={airbnbs[0]}/>);
//   expect(wrapper).toMatchSnapshot();
// });

// it('should match the snapshot', () => {
//   const wrapper = shallow(<Image rental={airbnbs[0]} />);
//   expect(wrapper).toMatchSnapshot();
// });

// it('should match the snapshot', () => {
//   const wrapper = shallow(<Rating rental={airbnbs[0]} />);
//   expect(wrapper).toMatchSnapshot();
// });



//---
// describe('Card', () => {
//   it('should match the snapshot', () => {
//     const wrapper = shallow(
//       <Card title="News" description="lorem ipsum" />
//     );
//     expect(wrapper).toMatchSnapshot();
//   });

//   it('should call the click handler when a button is clicked', () => {
//     const clickHandler = jest.fn();
//     const wrapper = shallow(
//       <Card
//         title="News"
//         description="lorem ipsum"
//         clickHandler={clickHandler}
//       />
//     );

//     wrapper.find('button').simulate('click');

//     expect(clickHandler).toHaveBeenCalled();
//   })
// });