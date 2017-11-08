/**
 * Created by ansarimofid on 04/11/17.
 */

import React, {Component} from 'react';
import PostCards from '../PostCard/PostCard'
import './Posts.css'
import {loadCategoryPost, loadPost} from '../../Actions/postAction'

import {connect} from 'react-redux'
import {sortPosts} from "../../utility/sort";

class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {sort: 'popular'};
  }

  componentWillMount() {
    if (this.props.category) {
      this.props.loadPostByCategory(this.props.category);
    } else {
      this.props.loadPost();
    }
  }

  renderAllPost() {
    let {posts} = this.props.posts;
    posts = sortPosts(posts, this.state.sort);
    return posts.map((post) =>
      <PostCards key={post.id} post={post}/>)
  }

  getSortButtons() {
    return (
      <div>
        {this.state.sort === 'latest' ?
          <span>Latest<button onClick={(event) => this.setState({...this.state, sort: 'popular'})}>Popular</button></span> :
          <span><button onClick={(event) => this.setState({...this.state, sort: 'latest'})}>Latest</button>Popular</span>
        }
      </div>
    )
  }

  render() {
    return (
      <div>
        {this.getSortButtons()}
        <h3 className="uk-text-left uk-padding-small posts-title uk-margin-remove-bottom uk-padding-remove-bottom">
          <span>POSTS</span>
          <hr/>
        </h3>
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

export default connect(mapStateToProps, {
  loadPost: loadPost,
  loadPostByCategory: loadCategoryPost
})(Posts);
