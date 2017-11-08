/**
 * Created by ansarimofid on 06/11/17.
 */
import api from '../utility/apiRequests'

export const LOAD_CATEGORIES = 'LOAD_CATEGORIES';

export function loadCategories() {
  return dispatch => {
    api.getCategories()
      .then(categories=>{
        dispatch(loadCategoriesSuccess(categories))
    })
  }
}

function loadCategoriesSuccess(categories) {
  return {
    type: LOAD_CATEGORIES,
    categories
  }
}