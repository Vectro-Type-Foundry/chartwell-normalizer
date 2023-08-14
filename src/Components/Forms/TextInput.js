import React from 'react';
import PropTypes from 'prop-types';
import Label from './Label';

export default class TextInput extends React.Component {
  handleChange(e){
    this.props.onChange && this.props.onChange(e.target.value);
  }
  render() {
    return (
      <div className='form-input text-input-wrapper'>
        <Label
          text={this.props.label}
          for={this.props.name} />
        <input
          autoComplete={this.props.autoFill}
          autoFocus={this.props.autoFocus}
          type={this.props.password ? 'password' : 'text'}
          name={this.props.name}
          className={`text-input ${this.props.className}`}
          value={this.props.value}
          onChange={(e)=>{this.handleChange(e)}}
          placeholder={this.props.placeholder} />
      </div>
      );
  }
}

TextInput.propTypes = {
  autoComplete: PropTypes.bool,
  autoFocus: PropTypes.bool,
  className: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
  ]),
  onChange: PropTypes.func,
  placeholder: PropTypes.string
};
