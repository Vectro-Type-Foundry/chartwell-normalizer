import React from 'react';
import TextInput from '../Forms/TextInput';
import TextArea from '../Forms/TextArea';
import Numeral from 'numeral';
import Error from '../Forms/Error';

export default class Normalizer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      data: '',
      minVal: 0,
      maxVal: 100
    }
  }
  handleInputChange(key, val){
    this.setState({
      [key]: val
    });
  }
  handleSelectInputText(e){
    e.target.select();
  }
  normalizedData(){
    const offsetMaxVal = parseFloat(this.state.maxVal) - parseFloat(this.state.minVal);
    const multiplier = 100 / offsetMaxVal;

    const newValues = this.state.data.split('+').map((val)=>{
      const newVal = (parseFloat(val) - parseFloat(this.state.minVal)) * multiplier;
      return Numeral(newVal).format('0.[0]');
    });
    return newValues.join('+');
  }
  hasOutOfRange(){
    let isOutOfRange = false;
    this.state.data.split('+').forEach((val)=>{
      if ((parseFloat(val) < parseFloat(this.state.minVal)) || (parseFloat(val) > parseFloat(this.state.maxVal) )) {
        isOutOfRange = true;
      }
    });
    return isOutOfRange;
  }
  errorMessage() {
    if (this.hasOutOfRange()) {
      return 'You have entered a value that is outside the range you specified. Adjust your min and max values to make sure all values fit within the range.';
    } else {
      return '';
    }
  }
  render() {
    return (
      <div>
        <div className='form--2cols'>
          <TextInput
            key='minVal'
            name='minVal'
            label='Min Possible Value'
            onChange={(v)=>{this.handleInputChange('minVal', v)}}
            value={this.state.minVal}
          />
          <TextInput
            key='maxVal'
            name='maxVal'
            label='Max Possible Value'
            onChange={(v)=>{this.handleInputChange('maxVal', v)}}
            value={this.state.maxVal}
          />
        </div>
        <TextArea
          key='input'
          label='Data String'
          placeholder='Enter string, for example: 10+33+25'
          onChange={(v)=>{this.handleInputChange('data', v)}}
          value={this.state.data} />
        {this.state.data && !this.errorMessage() ? 
          <TextArea
            key='output'
            label='Normalized Data'
            readonly={true}
            value={this.normalizedData()}
            onClick={(e)=>{this.handleSelectInputText(e)}} />
          : 
          <Error message={this.errorMessage()} />
        }

      </div>
    );
  }
}