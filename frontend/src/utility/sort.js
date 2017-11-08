export function sortComments(comments) {
    comments.sort((a, b) => {return b.voteScore - a.voteScore});
    return comments;
}

export function sortPosts(posts, type) {
  if (type === 'latest') {
    posts.sort((a, b) => {return b.timestamp - a.timestamp});
  } else {
    posts.sort((a, b) => {return b.voteScore - a.voteScore});
  }
  return posts;
}
