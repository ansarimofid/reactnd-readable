/**
 * Created by ansarimofid on 06/11/17.
 */
import {combineReducers} from 'redux'
import posts from './postReducer'
import categories from './categoriesReducer'

export default combineReducers({categories,posts})