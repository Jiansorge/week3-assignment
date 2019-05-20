import React from 'react';
import Image from './components/Image.js';
import RentalDetail from './components/RentalDetail.js';
import Rating from './components/Rating.js';

import './Rental.css'
import './components/RentalDetail.css'
import './components/Rating.css'

import PropTypes from 'prop-types';

class Rental extends React.Component {
    static propTypes = {
        rental: PropTypes.object.isRequired,
        // key: PropTypes.number.isRequired,
        idx: PropTypes.number.isRequired,
        onClick: PropTypes.func.isRequired,
        buttonText: PropTypes.string.isRequired,
    }
    // const type = this.props.type;
    // console.log(this.props.type);
    render() {
        const onClick = this.props.onClick;

      return (
        <li className='rental' >
            <Image className="image" rental={this.props.rental}/>

            <div className="rental-info"
            >
                <RentalDetail rental={this.props.rental} />

                <h3 className='title'>
                    {this.props.rental.title}
                </h3>
                <div className="payment">
                    $ {this.props.rental.payment.cost} per night
                    { //Check if payment has description
                        (this.props.rental.payment.description !== "" )
                            ? <p> 
                                &nbsp; &#8226; &nbsp; {this.props.rental.payment.description} 
                              </p> 
                            : ""
                } </div>

                <Rating className="payment" rental={this.props.rental} />
                <button onClick={() => onClick(this.props.idx)}>
                    {this.props.buttonText}</button>
            </div>
        </li>
  
      )
    }
  }
 //
//   

  export default Rental;