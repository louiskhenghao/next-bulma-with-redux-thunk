import fetch from 'isomorphic-unfetch';

// ========================= ACTIONS
export const REQUEST_POSTS_START = 'REQUEST_POSTS_START';
export const REQUEST_POSTS_SUCCESS = 'REQUEST_POSTS_SUCCESS';

// ========================= DISPATCHERS
export const dispatchRequestPosts = (subreddit) => {
  return async (dispatch) => {
    dispatch({
      type: REQUEST_POSTS_START,
      subreddit,
    });
    const res = await fetch(`https://www.reddit.com/r/${subreddit}.json`);
    const data = await res.json();
    dispatch({
      type: REQUEST_POSTS_SUCCESS,
      subreddit,
      posts: !!data ? data.data.children.map((child) => child.data) : [],
      receivedAt: Date.now(),
    });
  };
};
