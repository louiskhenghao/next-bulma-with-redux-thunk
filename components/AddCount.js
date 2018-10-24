import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class AddCount extends PureComponent {
  static propTypes = {
    add: PropTypes.func,
    decrease: PropTypes.func,
    count: PropTypes.number,
  };

  static defaultProps = { add: null, decrease: null, count: 0 };

  render() {
    const { count } = this.props;
    return (
      <div className="mb20">
        <h1 className="title is-5">
          AddCount: <span>{count}</span>
        </h1>
        <button className="button mr5" onClick={this.props.add}>
          Add To Count
        </button>
        <button className="button" onClick={this.props.decrease}>
          Decrease Count
        </button>
      </div>
    );
  }
}

export default AddCount;
