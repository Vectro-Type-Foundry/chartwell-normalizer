import React from 'react';
import PropTypes from 'prop-types';

const Label = props => {

  if (props.text) {
    return (
      <label htmlFor={props.for}>
        {props.text}
      </label>
    );
  } else {
    return null;
  }
};

Label.propTypes = {
  text: PropTypes.string,
  for: PropTypes.string
};


export default Label;