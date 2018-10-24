import { connect } from 'react-redux';
import { dispatchIncrement, dispatchDecrement } from 'store/Count/actions';
import { selectCountNumber } from 'store/Count/selectors';
import Component from './component';

const mapStateToProps = (state) => {
  return {
    counter: selectCountNumber(state),
  };
};

const dispatchers = {
  dispatchIncrement,
  dispatchDecrement,
};

export default connect(
  mapStateToProps,
  dispatchers
)(Component);
