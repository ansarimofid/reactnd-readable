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
    if (this.props.category) {
      this.props.loadPostByCategory(this.props.category);
    } else {
      this.props.loadPost();
    }
  }

  componentWillReceiveProps() {
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
          <div className="sort-btn-grp">Sort by: <span>LATEST</span><button className="uk-button uk-button-link" onClick={(event) => this.setState({...this.state, sort: 'popular'})}>POPULAR</button></div> :
          <div className="sort-btn-grp">Sort by: <button className="uk-button uk-button-link" onClick={(event) => this.setState({...this.state, sort: 'latest'})}>Latest</button><span>POPULAR</span></div>
        }
      </div>
    )
  }

  render() {
    return (
      <div>
        <div className="post-head">
          <h3 className="uk-text-left uk-padding-small posts-title uk-margin-remove-bottom uk-padding-remove-bottom">
            <span>POSTS</span>
          </h3>
          {this.props.category ? <span>Posts for <b>{this.props.category}</b></span>: ''}
          {this.getSortButtons()}
          {/*<hr/>*/}
        </div>
        <hr/>
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
