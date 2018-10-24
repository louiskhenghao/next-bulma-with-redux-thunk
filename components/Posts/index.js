import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';

export default class Posts extends PureComponent {
  render() {
    const { posts } = this.props;
    return (
      <div className="columns is-multiline">
        {posts.map((post, i) => {
          return (
            <div key={i} className="column is-one-quarter is-narrow">
              <div className="card">
                <header className="card-header">
                  <p className="card-header-title">{post.get('author')}</p>
                </header>
                <div className="card-content">
                  <p className="subtitle">{post.get('title')}</p>
                </div>
                <footer className="card-footer">
                  <p className="card-footer-item">
                    <span>
                      View on&nbsp;
                      <a href={post.url}>Reddit</a>
                    </span>
                  </p>
                </footer>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

Posts.propTypes = {
  posts: ImmutablePropTypes.listOf(
    ImmutablePropTypes.contains({
      author: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
};
