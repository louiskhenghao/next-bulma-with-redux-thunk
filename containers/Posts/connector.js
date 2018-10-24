import { connect } from 'react-redux';
import { dispatchRequestPosts } from 'store/Posts/actions';
import { selectSubRedditPosts } from 'store/Posts/selectors';
import { selectSubreddit } from 'store/Filter/actions';
import { selectCurrentSubreddit } from 'store/Filter/selectors';
import Component from './component';
import Immutable from 'immutable';

const mapStateToProps = (state) => {
  const postObject = selectSubRedditPosts(state);
  return {
    filter: selectCurrentSubreddit(state),
    posts: postObject.get('items', Immutable.List()),
    isFetching: postObject.get('isFetching', true),
    lastUpdated: postObject.get('lastUpdated', null),
  };
};

const dispatchers = {
  dispatchRequestPosts,
  selectSubreddit,
};

export default connect(
  mapStateToProps,
  dispatchers
)(Component);
