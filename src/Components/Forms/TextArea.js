import React from 'react';
import PropTypes from 'prop-types';
import Label from './Label';

export default class TextArea extends React.Component {
  handleChange(e){
    this.props.onChange && this.props.onChange(e.target.value);
  }
  render() {
    return (
      <div className={`form-input textarea-input--wrapper input-${this.props.wrapperClassName}`}>
        <Label
          className='form-label'
          text={this.props.label}
          for={this.props.name} />
        <textarea
          autoComplete={this.props.autoFill}
          autoFocus={this.props.autoFocus}
          type={this.props.password ? 'password' : 'text'}
          name={this.props.name}
          className={`text-input ${this.props.className}`}
          value={this.props.value}
          onChange={(e)=>{this.handleChange(e)}}
          placeholder={this.props.placeholder}
          readOnly={this.props.readonly}
          onClick={(e)=>{this.props.onClick && this.props.onClick(e)}} />
      </div>
      );
  }
}

TextArea.propTypes = {
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
  placeholder: PropTypes.string,
  readonly: PropTypes.bool
};
