import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AddCount from 'components/AddCount';

export default class AddCountContainer extends Component {
  render() {
    const { counter } = this.props;
    return (
      <AddCount
        add={this.props.dispatchIncrement}
        decrease={this.props.dispatchDecrement}
        count={counter}
      />
    );
  }
}
