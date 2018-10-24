import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class Picker extends PureComponent {
  onChangeValue = (e) => {
    const { onChange } = this.props;
    onChange(e.target.value);
  };

  render() {
    const { value, options } = this.props;
    return (
      <div className="field">
        <label className="label">Subject</label>
        <div className="control">
          <div className="select is-primary">
            <select onChange={this.onChangeValue} value={value}>
              {options.map((option) => (
                <option value={option} key={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    );
  }
}

Picker.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
