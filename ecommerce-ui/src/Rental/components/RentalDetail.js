//  - housetype
//  - location city

import React from 'react';
import './RentalDetail.css'
import PropTypes from 'prop-types';

class RentalDetail extends React.Component {
  static propTypes = {
    rental: PropTypes.object.isRequired,
  }

    render() {

      return (
        <div className = "rental-detail">
          <p className="house-type">
            {this.props.rental.houseType}
            &nbsp; &#8226; &nbsp; 
            {this.props.rental.location.city}
          </p>
        </div>
      );
    }

  }
  export default RentalDetail;