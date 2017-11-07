/**
 * Created by ansarimofid on 04/11/17.
 */

import React, { Component } from 'react';
import PostCards from '../PostCard/PostCard'
import './Posts.css'
import {loadPost} from '../../Actions/postAction'

import {connect} from 'react-redux'

class Posts extends Component {

  componentWillMount() {
    this.props.loadPost();
  }

  renderAllPost() {
    // console.log('Props', this.props);
    const {posts} = this.props.posts;
    return posts.map((post)=>
      <PostCards key={post.id} post={post}/>)
  }

  render() {
    return (
      <div>
        <h3 className="uk-text-left uk-padding-small posts-title uk-margin-remove-bottom uk-padding-remove-bottom"><span>POSTS</span><hr/></h3>
        <div className="uk-grid">{this.renderAllPost()}</div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  // console.log(state.props)
  return {
    posts: state.posts
  }
}

export default connect(mapStateToProps,{
  loadPost: loadPost})(Posts);