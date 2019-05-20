import React from 'react';
// import logo from './logo.svg';
import airbnbs from './airbnbs.json';
import './App.css';
import Rentals from './Rentals.js';
import ShoppingCart from './ShoppingCart.js';

class App extends React.Component {
  state = {
    rentals: airbnbs,
    selectedRentals: []
  }

  bookRental = (idx) => {
    const selectedRental = this.state.rentals[idx];
    if (this.state.selectedRentals.includes(selectedRental)) {
      alert('You already selected that rental.');
      return;
    }
    
    this.setState(prevState => {
      return {
        selectedRentals: [...prevState.selectedRentals, selectedRental]
      };
    });
  }

  deleteRental = (idx) => {    
    this.setState(prevState => {
      const selectedRentals = [...prevState.selectedRentals];
      selectedRentals.splice(idx, 1);
      console.log(this.state.selectedRentals);
      console.log(this.state.rentals);
      return {
        selectedRentals
      };
    });
  }

  render () {
    console.log({airbnbs});
    console.log(airbnbs);
    console.log([airbnbs])

    console.log(this.state.selectedRentals);
    return(
      <div className="App">
      <ShoppingCart
        rentals={this.state.selectedRentals}
        onDeleteRental={this.deleteRental}
      />
        <hr />
      <h2 id="rentals-title"> Homes around the world</h2>
      <Rentals
        rentals={this.state.rentals}
        onBookRental={this.bookRental}
      />
      </div>
    );
  }
}

export default App;
