/**
 * Created by ansarimofid on 06/11/17.
 */

import {LOAD_CATEGORIES, LOAD_CATEGORY_POST} from '../Actions/categoriesAction'

function categories(state={categories: []}, action) {
  switch (action.type) {
    case LOAD_CATEGORIES:
      return {...state, categories: action.categories};
    default:
      return  state;
  }
}

export default categories
