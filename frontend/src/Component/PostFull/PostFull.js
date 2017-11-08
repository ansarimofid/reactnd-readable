import React from 'react';
import {connect} from 'react-redux';
import {
  loadPostFull, loadPostComments, savePost, saveComment, createComment, deleteComment,
  deletePost, voteComment, votePostFull, postDeleted
} from "../../Actions/postAction";
import {CommentList} from "../Comments/CommentList";

import './PostFull.css'
import moment from 'moment'

import {Link} from 'react-router-dom';

export class PostFull extends React.Component {
  constructor(props) {
    super(props);
    this.state = {editing: false, id: this.props.match.params.id};
  }

  componentDidMount() {
    this.props.loadPostFull(this.state.id);
    this.props.loadPostComments(this.state.id);
  }

  onPostSave() {
    let body = document.getElementById('post-edit-body').value;
    let title = document.getElementById('post-edit-title').value;
    this.props.savePost(this.state.id, title, body);
    this.setState({...this.state, editing: false});
  }

  onPostEdit() {
    this.setState({...this.state, editing: true});
  }

  onPostDelete() {
    this.props.deletePost(this.state.id);
    this.props.history.replace('/');
  }

  onPostUpVote() {
    this.props.votePost(this.state.id, 'upVote');
  }

  onPostDownVote() {
    this.props.votePost(this.state.id, 'downVote');
  }

  onCommentSave(id, body) {
    this.props.saveComment(id, body);
  }

  getPost() {
    if (this.state.editing) {
      return (
        <div className="uk-flex">
          <div className="uk-width-1-4@m"></div>
          <div className="uk-width-1-2@m">
            <h3 className="uk-text-left">Edit Post</h3>
            <div className="uk-margin">
              <input className="uk-input" type="text" defaultValue={this.props.post.title} id='post-edit-title' placeholder='Title'/>
            </div>
            <div className="uk-margin">
              <textarea className="uk-textarea" rows="5" id='post-edit-body' defaultValue={this.props.post.body}></textarea>
            </div>
            {/*<input type='text' defaultValue={this.props.post.title} id='post-edit-title'/>*/}
            {/*<textarea type='text' id='post-edit-body' defaultValue={this.props.post.body}>
                    </textarea>*/}
            <div className="uk-text-left">
              <button className="uk-button uk-button-primary" onClick={this.onPostSave.bind(this)}>Save</button>
            </div>
          </div>
          <div className="uk-width-1-4@m"></div>
        </div>
      )
    } else {
      return (
        <div className="uk-flex">
          <div className="uk-width-1-4@m"></div>
          <div className="uk-width-1-2 post-details-wrapper">
            <div className="back-btn-wrapper uk-text-left">
              <Link to='/'> <button className="uk-button uk-button-primary uk-button-small"><span is uk-icon="icon: chevron-left"></span>Go Back</button></Link>
            </div>
            <div className="uk-card uk-card-default uk-card-body post-card uk-text-left uk-padding-remove-bottom">
              <div className="uk-card-badge uk-label">{this.props.post.category}</div>
              <div className="card-header">
            <span className="post-author uk-text-small">by <span className="uk-text-bold">{this.props.post.author}</span>
            </span>
                <span className="uk-text-small"> | </span>
                <span className="time uk-text-small">{moment(this.props.post.timestamp,'x').fromNow()}</span>
              </div>
              <h3 className="uk-card-title uk-margin-small-top">{this.props.post.title}</h3>
              <p>{this.props.post.body}</p>
              <div className="post-card-action uk-flex">
                <div className="votes">
                  <button onClick={this.onPostUpVote.bind(this)} href=""><span is uk-icon="icon:chevron-up" className="upvote-icon"></span></button>
                  <button  onClick={this.onPostDownVote.bind(this)} href=""><span is uk-icon="icon:chevron-down" className="upvote-icon"></span></button>
                  <span>{this.props.post.voteScore}</span>
                </div>
                <div className="comments">
                  <span is uk-icon="icon: comments"></span>
                  <span>{this.props.post.commentCount}</span></div>
              </div>
              <div className="action uk-margin-medium-top uk-button-group">
                <button className="uk-button uk-button-secondary uk-button-alt  uk-button-small uk-margin-small-right" onClick={this.onPostEdit.bind(this)}>Edit</button>
                <button className="uk-button uk-button-danger uk-button-alt uk-button-small" onClick={this.onPostDelete.bind(this)}>Delete</button>
              </div>
              <hr/>
            </div>
          </div>
          <div className="uk-width-1-4@m"></div>
        </div>
      )
    }
  }

  getComment() {
    return(
      <div className="uk-flex uk-margin-medium-top uk-margin-medium-bottom">
        <div className="uk-width-1-4@m"></div>
        <div className="uk-width-1-2@m">
          <h3 className="uk-text-left">Comments</h3>
          <CommentList comments={this.props.comments} onSave={this.onCommentSave.bind(this)}
                       onDelete={this.deleteComment.bind(this)} onVote={this.voteComment.bind(this)}/>
          <div className="new-comment uk-text-left">
            <div className="uk-margin-small">
              <textarea id="new-comment" className="uk-textarea" rows="3" placeholder="Add Your Comment"></textarea>
            </div>

            <div className="uk-margin-small">
              <input className="uk-input uk-form-small" type="text" placeholder='Author Name' id='comment-author'/>
            </div>

            <button className="uk-button-primary uk-button uk-button-small" onClick={this.addComment.bind(this)}>Comment</button>
          </div>
        </div>
        <div className="uk-width-1-4@m"></div>
      </div>
    )
  }

  addComment() {
    let commentArea = document.getElementById('new-comment');
    let body = commentArea.value;
    let authorArea = document.getElementById('comment-author');
    let author = authorArea.value;
    commentArea.value = '';
    authorArea.value = '';
    if (author.length < 3) {
      alert('Author\'s name should be more than 2 characters');
      return;
    }
    if (body.length === 0) {
      alert('Please enter some comment!');
      return;
    }
    this.props.createComment(this.state.id, body, author);
  }

  deleteComment(id) {
    this.props.deleteComment(id);
  }

  voteComment(id, option) {
    this.props.voteComment(id, option);
  }

  render() {

    if (!this.props.post) {
      return (
        <div>Loading post...</div>
      )
    }

    return (
      <div>
        {this.getPost()}
        {this.getComment()}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    post: state.posts.post,
    comments: state.comments.comments,
    deleted: state.posts.deleted
  }
}

export default connect(
  mapStateToProps,
  {
    loadPostFull: loadPostFull,
    loadPostComments: loadPostComments,
    savePost: savePost,
    saveComment: saveComment,
    createComment: createComment,
    deleteComment: deleteComment,
    deletePost: deletePost,
    voteComment: voteComment,
    votePost: votePostFull
  }
)(PostFull);
