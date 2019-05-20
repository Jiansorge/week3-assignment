import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {shallow} from 'enzyme';
//import Card from './Card';
//import testData from './testData.json';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

// it('should match the snapshot', () => {
//   const wrapper = shallow(<App />);
//   expect(wrapper).toMatchSnapshot();
// });

// it('should have expected classNames', () => {
//   const wrapper = shallow(<App />);
//   const link = wrapper.find('a');
  
//   expect(link.prop('className')).toEqual('App-link');
//   // this is important! Must link to reactjs.org
//   expect(link.prop('href')).toEqual('https://reactjs.org');
// });

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