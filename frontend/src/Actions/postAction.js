/**
 * Created by ansarimofid on 06/11/17.
 */
import api from '../utility/apiRequests'

export const LOAD_POST = 'LOAD_POST';
export const LOAD_POST_FULL = 'LOAD_POST_FULL';
export const LOAD_POST_COMMENTS = 'LOAD_POST_COMMENTS';
export const VOTE_POST = 'VOTE_POST';
export const POST_CREATE = 'POST_CREATE';
export const POST_SAVE = 'POST_SAVE';
export const POST_DELETE = 'POST_DELETE';
export const VOTE_POST_FULL = 'VOTE_POST_FULL';
export const COMMENT_SAVE = 'COMMENT_SAVE';
export const COMMENT_CREATE = 'COMMENT_CREATE';
export const COMMENT_DELETE = 'COMMENT_DELETE';
export const COMMENT_VOTE = 'COMMENT_VOTE';
export const LOAD_CATEGORY_POST = 'LOAD_CATEGORIES_POST';

export function loadPost() {
  return dispatch => {
    api.getAllPost()
      .then(posts => {
        dispatch(loadPostSuccess(posts))
      })
  }
}


export function loadCategoryPost(category) {
  return dispatch => {
    api.getCategoryPost(category)
      .then(categoryPost => {
        dispatch(loadCategoryPostSuccess(categoryPost))
      })
  }
}


export function votePost(id, option) {
  return dispatch => {
    api.votePost(id, option)
      .then(data => {
        dispatch(voteSuccess(id, option))
      })
  }
}


export function loadPostFull(id) {
  return dispatch => {
    api.getFullPost(id)
      .then(data => {
        dispatch(loadPostFullSuccess(data));
      })
  }
}


export function loadPostComments(id) {
  return dispatch => {
    api.getPostComments(id)
      .then((data) => {
        dispatch(loadPostCommentsSuccess(data))
      })
  }
}


export function savePost(id, title, body) {
  return dispatch => {
    api.savePost(id, title, body)
      .then((post) => {
        dispatch(savePostSuccess(post))
      })
  }
}


export function createComment(parentId, body, author) {
  return dispatch => api.addComment(parentId, body, author)
    .then(comment => dispatch(createCommentSuccess(comment)))
}


export function saveComment(id, body) {
  return dispatch => {
    api.saveComment(id, body)
      .then((comment) => {
        dispatch(saveCommentSuccess(comment))
      })
  }
}


export function createPost(title, author, body, category) {
  return dispatch => api.createPost(title, author, body, category)
    .then(post => dispatch(createPostSuccess(post)))
}


export function deleteComment(id) {
  return dispatch => api.deleteComment(id)
    .then(comment => dispatch(deleteCommentSuccess(comment)))
}


export function deletePost(id) {
  return dispatch => api.deletePost(id)
    .then(post => dispatch(deletePostSuccess(post)))
}


export function voteComment(id, option) {
  return dispatch => api.voteComment(id, option)
    .then(comment => dispatch(voteCommentSuccess(comment)))
}


export function votePostFull(id, option) {
  return dispatch => api.votePost(id, option)
    .then(post => dispatch(votePostFullSuccess(post)))
}


function votePostFullSuccess(post) {
  return {
    type: VOTE_POST_FULL,
    post
  }
}


function voteCommentSuccess(comment) {
  return {
    type: COMMENT_VOTE,
    comment
  }
}


function deletePostSuccess(post) {
  return {
    type: POST_DELETE,
    post
  }
}


function deleteCommentSuccess(comment) {
  return {
    type: COMMENT_DELETE,
    comment
  }
}


function createPostSuccess(post) {
  return {
    type: POST_CREATE,
    post
  }
}


function createCommentSuccess(comment) {
  return {
    type: COMMENT_CREATE,
    comment
  }
}


function saveCommentSuccess(comment) {
  return {
    type: COMMENT_SAVE,
    comment
  }
}

function savePostSuccess(post) {
  return {
    type: POST_SAVE,
    post
  }
}


function loadPostCommentsSuccess(comments) {
  return {
    type: LOAD_POST_COMMENTS,
    comments
  }
}


function loadPostFullSuccess(post) {
  return {
    type: LOAD_POST_FULL,
    post
  }
}


function loadPostSuccess(posts) {
  return {
    type: LOAD_POST,
    posts
  }
}


function loadCategoryPostSuccess(categoryPost) {
  return {
    type: LOAD_CATEGORY_POST,
    categoryPost
  }
}

function voteSuccess(id, option) {
  console.log("Success Upvote");
  return {
    type: VOTE_POST,
    id,
    option: option
  }
}
