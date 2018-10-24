import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';
import Picker from 'components/Picker';
import Posts from 'components/Posts';

class PostsContainer extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleRefreshClick = this.handleRefreshClick.bind(this);
  }

  componentDidMount() {
    const { filter, dispatchRequestPosts } = this.props;
    dispatchRequestPosts(filter);
  }

  componentDidUpdate(prevProps) {
    if (this.props.filter !== prevProps.filter) {
      const { filter, dispatchRequestPosts } = this.props;
      dispatchRequestPosts(filter);
    }
  }

  // ====================== EVENT
  handleChange(nextSubreddit) {
    const { dispatchRequestPosts, selectSubreddit } = this.props;
    selectSubreddit(nextSubreddit);
    dispatchRequestPosts(nextSubreddit);
  }

  handleRefreshClick(e) {
    e.preventDefault();
    const { filter, dispatchRequestPosts } = this.props;
    dispatchRequestPosts(filter);
  }

  // ====================== RENDER
  render() {
    const { filter, posts, isFetching, lastUpdated } = this.props;
    return (
      <div>
        <Picker
          value={filter}
          onChange={this.handleChange}
          options={['reactjs', 'frontend']}
        />
        <div className="mb10">
          {lastUpdated && (
            <span>
              Last updated at {new Date(lastUpdated).toLocaleTimeString()}.{' '}
            </span>
          )}
          {!isFetching && (
            <button className="button" onClick={this.handleRefreshClick}>
              Refresh
            </button>
          )}
        </div>
        {isFetching &&
          posts.size === 0 && <h2 className="subtitle">Loading...</h2>}
        {!isFetching &&
          posts.size === 0 && <h2 className="subtitle">Empty.</h2>}
        {posts.size > 0 && (
          <div style={{ opacity: isFetching ? 0.5 : 1 }}>
            <Posts posts={posts} />
          </div>
        )}
      </div>
    );
  }
}

PostsContainer.propTypes = {
  filter: PropTypes.string.isRequired,
  isFetching: PropTypes.bool.isRequired,
  lastUpdated: PropTypes.number,
  posts: ImmutablePropTypes.list.isRequired,
};

export default PostsContainer;
