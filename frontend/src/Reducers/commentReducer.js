import {COMMENT_CREATE, COMMENT_DELETE, COMMENT_SAVE, COMMENT_VOTE, LOAD_POST_COMMENTS} from "../Actions/postAction";
import {sortComments} from "../utility/sort";

export default function comments(state = {comments: []}, action) {
  switch (action.type) {
    case LOAD_POST_COMMENTS:
      return {...state, comments: sortComments(action.comments)};
    case COMMENT_SAVE:
      let new_comments = [];
      for (let i = 0; i < state.comments.length; i++) {
        if (state.comments[i].id === action.comment.id) {
          new_comments.push(action.comment);
        } else {
          new_comments.push(state.comments[i]);
        }
      }
      return {...state, comments: sortComments(new_comments)};
    case COMMENT_CREATE:
      new_comments = state.comments.slice(0);
      new_comments.push(action.comment);
      return {...state, comments: sortComments(new_comments)};
    case COMMENT_DELETE:
      new_comments = [];
      state.comments.forEach(comment => {
        if (comment.id !== action.comment.id) {
          new_comments.push(comment);
        }
      });
      return {...state, comments: sortComments(new_comments)};
    case COMMENT_VOTE:
      new_comments = [];
      state.comments.forEach(comment => {
        if (comment.id === action.comment.id) {
          new_comments.push(action.comment);
        } else {
          new_comments.push(comment);
        }
      });
      return {...state, comments: sortComments(new_comments)};
    default:
      return state;
  }
}
