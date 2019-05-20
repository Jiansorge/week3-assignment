import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Rental from './Rental/Rental.js';
import PropTypes from 'prop-types';

class Rentals extends React.Component {
  static propTypes = {
    rentals: PropTypes.array.isRequired,
    onBookRental: PropTypes.func.isRequired
  }
  render () {
    const rentalList = this.props.rentals
      .map((rental, index) => {
          return (
            <Rental  className=""
              rental={rental} 
              key = {index}
              idx = {index}
              onClick={this.props.onBookRental}
              buttonText="Book"
            />
          );
      });  
    return (
      <div className="">
          <ul className='rentals'>
              {rentalList}
          </ul>
      </div>
    );
  }
}


export default Rentals;
