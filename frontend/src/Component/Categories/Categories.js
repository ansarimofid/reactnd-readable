/**
 * Created by ansarimofid on 04/11/17.
 */

import React, { Component } from 'react';
import './Categories.css'
import {loadCategories} from '../../Actions/categoriesAction'
import {loadCategoryPost} from '../../Actions/postAction'
import {connect} from 'react-redux'



class Categories extends Component {

  constructor(props) {
    super(props);
    this.state = {activeCategory:''}
  }

  componentDidMount() {
    this.props.loadCategories();
  }

  loadCategoryPost(category) {
    this.props.loadCategoryPost(category);
    this.setState({activeCategory:category});
  }

  renderCategories() {
    const {categories} = this.props.categories;

    if (categories) {
      return categories.map((category)=> {

        let className = 'category-item ';

        if (this.state.activeCategory === category.name) {
          className+='active';
        }

          return <a onClick={(event)=> {
            event.preventDefault();
            this.loadCategoryPost(category.name)}} className={className} href="">{category.name}</a>
      }
      );
    }
    else
      return;
  }

  render() {

    return (
      <div>
        <h3 className="uk-text-left uk-padding-small uk-padding-remove-horizontal"><span>Categories</span><hr/></h3>
        <div className="uk-flex uk-flex-wrap">
          {this.renderCategories()}</div>
      </div>
    );
  }
}


function mapStateToProps(state) {
  return state.categories
}

export default connect(mapStateToProps,{
  loadCategories: loadCategories,loadCategoryPost:loadCategoryPost})(Categories);
