// ========================= ACTIONS
export const SELECT_SUBREDDIT = 'SELECT_SUBREDDIT';

// ========================= DISPATCHERS
export function selectSubreddit(subreddit) {
  return {
    type: SELECT_SUBREDDIT,
    subreddit,
  };
}
