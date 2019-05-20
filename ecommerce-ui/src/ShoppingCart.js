import React from 'react';
import './App.css';
import Rental from './Rental/Rental.js';
import PropTypes from 'prop-types';


class ShoppingCart extends React.Component {
    static propTypes = {
        rentals: PropTypes.array,
        onDeleteRental: PropTypes.func
      }
    
    render() {
        let totalCost = 0;
        const rentalList = this.props.rentals
            .map((rental, idx) => {
                totalCost += parseInt(rental.payment.cost);
                return (
                        <Rental  className="shopping-rental"
                            rental={rental} 
                            key = {idx}
                            idx = {idx}
                            onClick={this.props.onDeleteRental}
                            buttonText="Delete"
                        />

                );
            });

        return (
            (rentalList.length > 0 )
            ? <div className="shopping-div">
                <h2 id="cart-title"> Currently in your cart</h2>

                <aside className='shopping-cart'>
                    &#128722; ${totalCost} total
                </aside>
                <ul className={'shopping-rentals'}>
                    {rentalList}
                </ul>
            </div>
            : null
        
                
        );
    }
}

export default ShoppingCart;