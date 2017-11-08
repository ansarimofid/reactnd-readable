import React from 'react';
import {connect} from 'react-redux';
import {
  loadPostFull, loadPostComments, savePost, saveComment, createComment, deleteComment,
  deletePost, voteComment, votePostFull
} from "../../Actions/postAction";
import {CommentList} from "../Comments/CommentList";

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
        <div>
          <input type='text' defaultValue={this.props.post.title} id='post-edit-title'/>
          <textarea type='text' id='post-edit-body' defaultValue={this.props.post.body}>
                    </textarea>
          <button onClick={this.onPostSave.bind(this)}>Save</button>
        </div>
      )
    } else {
      return (
        <div>
          <h2>{this.props.post.title}</h2>
          <p>{this.props.post.body}</p>
          <p>Vote: {this.props.post.voteScore}</p>
          <button onClick={this.onPostEdit.bind(this)}>Edit</button>
          <button onClick={this.onPostDelete.bind(this)}>Delete</button>
          <button onClick={this.onPostUpVote.bind(this)}>Up Vote</button>
          <button onClick={this.onPostDownVote.bind(this)}>Down Vote</button>
        </div>
      )
    }
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

    if (this.props.deleted) {
      this.props.history.replace('/');
    }

    if (!this.props.post) {
      return (
        <div>Loading post...</div>
      )
    }

    return (
      <div>
        <button onClick={this.props.history.goBack}>Back</button>
        {this.getPost()}
        <CommentList comments={this.props.comments} onSave={this.onCommentSave.bind(this)}
                     onDelete={this.deleteComment.bind(this)} onVote={this.voteComment.bind(this)}/>
        <textarea id='new-comment'/>
        <input placeholder='Author' id='comment-author'/>
        <button onClick={this.addComment.bind(this)}>Comment</button>
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
