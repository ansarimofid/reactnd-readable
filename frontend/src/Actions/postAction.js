/**
 * Created by ansarimofid on 06/11/17.
 */
import api from '../utility/apiRequests'

export const LOAD_POST = 'LOAD_POST';
export const VOTE_POST = 'VOTE_POST';
export const LOAD_CATEGORY_POST = 'LOAD_CATEGORIES_POST';


export function loadPost() {
  return dispatch => {
    api.getAllPost()
      .then(posts=>{
        dispatch(loadPostSuccess(posts))})
  }
}


export function loadCategoryPost(category) {
  return dispatch => {
    api.getCategoryPost(category)
      .then(categoryPost=>{
        dispatch(loadCategoryPostSuccess(categoryPost))
      })
  }
}


export function votePost(id,option) {
  return dispatch => {
    api.votePost(id,{option:option})
      .then(data=>{
        dispatch(voteSuccess(id,option))
      })
  }
}

function loadPostSuccess(posts) {
  return{
    type:LOAD_POST,
    posts
  }
}


function loadCategoryPostSuccess(categoryPost) {
  return{
    type:LOAD_CATEGORY_POST,
    categoryPost
  }
}

function voteSuccess(id,option) {
  console.log("Success Upvote");
  return {
    type:VOTE_POST,
    id,
    option:option
  }
}
