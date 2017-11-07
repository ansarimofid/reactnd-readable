/**
 * Created by ansarimofid on 06/11/17.
 */

import {LOAD_POST, VOTE_POST,LOAD_CATEGORY_POST} from '../Actions/postAction'

function posts(state={posts: []}, action) {
  switch (action.type) {
    case LOAD_POST:
      return {...state, posts: action.posts};
    case LOAD_CATEGORY_POST:
      // console.log()
      // console.log("Category Reducer",action.categoryPost);
      return {...state, posts: action.categoryPost}

    case VOTE_POST:
      let new_posts =  state.posts.map(post=>{
        if (post.id === action.id) {
          if (action.option==='upVote')
            post.voteScore+=1;

          if (action.option==='downVote')
            post.voteScore-=1;
        }
        return post
      });

      return {...state, posts:new_posts};
    default:
      return state;
  }
}

export default posts