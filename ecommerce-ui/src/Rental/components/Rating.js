//  - rating stars
//  - rating reviews
//  - is Superhost

import React from 'react';
import './Rating.css'
import PropTypes from 'prop-types';

class Rating extends React.Component {
  static propTypes = {
    rental: PropTypes.object.isRequired,
  }

    render() {

      return (
        <div className = "rating-info">
          <p className="stars">
            {this.props.rental.rating.stars} stars
         </p>
         <p className="reviews">
            &nbsp;
            {this.props.rental.rating.reviews} reviews
          </p>
          <div className={"superhost"}>
            { //Check if host has superHost
                        (this.props.rental.host.isSuperhost )
                            ? <div> 
                                &nbsp; &#8226; &nbsp; Superhost
                              </div> 
                            : ""
                }
          </div>
        </div>
      );
    }

  }
  export default Rating;