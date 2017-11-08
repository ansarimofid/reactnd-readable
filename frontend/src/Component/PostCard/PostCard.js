/**
 * Created by ansarimofid on 04/11/17.
 */
import React, { Component } from 'react';
import moment from 'moment'
import './PostCard.css'
import {votePost} from '../../Actions/postAction'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom';


class PostCard extends Component {

  votePost(id,option) {
    this.props.votePost(id,option);
  }

  render() {
    const MAX_CONTENT_LENGTH = 100;

    let post_content = this.props.post.body;
    let showBtn = false;

    if(post_content.length > MAX_CONTENT_LENGTH) {
      post_content = post_content.substring(0, MAX_CONTENT_LENGTH)+'... ';
      showBtn = true;
    }
    let link = '/' + this.props.post.category + '/' + this.props.post.id;
    return (
      <div className="uk-width-1-1\@s">
        <div className="uk-card uk-card-default uk-card-body post-card uk-text-left uk-padding-remove-bottom">
          <div className="uk-card-badge uk-label">{this.props.post.category}</div>
          <div className="card-header">
            <span className="post-author uk-text-small">by <span className="uk-text-bold">{this.props.post.author}</span>
            </span>
            <span className="uk-text-small"> | </span>
            <span className="time uk-text-small">{moment(this.props.post.timestamp,'x').fromNow()}</span>
          </div>
          <h3 className="uk-card-title uk-margin-small-top"><Link to={link}>{this.props.post.title}</Link></h3>
          <p>{post_content}{showBtn?<Link to={link} href="#" className="uk-text-primary uk-button uk-button-text">Read more</Link>:''}</p>
          <div className="post-card-action uk-flex">
            <div className="votes">
              <a onClick={(event)=> {
                event.preventDefault();
                this.votePost(this.props.post.id,'upVote')}} href=""><span is uk-icon="icon:chevron-up" className="upvote-icon"></span></a>
              <a onClick={(event)=> {
                event.preventDefault();
                this.votePost(this.props.post.id,'downVote')}} href=""><span is uk-icon="icon:chevron-down" className="upvote-icon"></span></a>
              <span>{this.props.post.voteScore}</span>
            </div>



            <div className="comments">
              <span is uk-icon="icon: comments"></span>
              <span>{this.props.post.commentCount}</span></div>
          </div>
          <hr/>
        </div>
      </div>
    )
  }
}


function mapStateToProps(state) {
  return {
    state
  }
}

export default connect(mapStateToProps,{
  votePost: votePost})(PostCard)