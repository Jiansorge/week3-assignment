import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Rental from './Rental/Rental.js';

class Rentals extends React.Component {
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
