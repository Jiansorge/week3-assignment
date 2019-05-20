import React from 'react';
// import PropTypes from 'prop-types';

class Image extends React.Component {
  
    render() {
      return (
        <img className = "image"
           src={this.props.rental.image} 
          alt={this.props.rental.title}
          height="200"
          width="200" 
        />
        
      )
    }
  }

  export default Image;