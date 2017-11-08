import React from 'react';
import './comment.css'

export class Comment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {editing: false};
    this.editId = 'comment-edit-' + this.props.comment.id;
  }

  onSave() {
    let body = document.getElementById(this.editId).value;
    this.props.onSave(this.props.comment.id, body);
    this.setState({...this.state, editing: false});
  }

  onEdit() {
    this.setState({...this.state, editing: true});
  }

  onDelete() {
    this.props.onDelete(this.props.comment.id);
  }

  onUpVote() {
    this.props.onVote(this.props.comment.id, 'upVote')
  }

  onDownVote() {
    this.props.onVote(this.props.comment.id, 'downVote')
  }

  getBody() {
    if (this.state.editing) {
      return (
        <div className="uk-text-left comment-wrapper uk-padding-small uk-padding-remove-vertical uk-margin-medium-bottom">
          <div className="uk-margin">
            <textarea className="uk-textarea" rows="3" defaultValue={this.props.comment.body} id={this.editId}/>
          </div>
          <div className="uk-text-left">
            <button className="uk-button uk-button-primary uk-button-small" onClick={this.onSave.bind(this)}>Save</button>
          </div>
        </div>
      )
    } else {
      return (
        <div className="uk-text-left comment-wrapper uk-padding-small uk-padding-remove-vertical uk-margin-medium-bottom">
          <p>{this.props.comment.body} -- <span className="uk-text-small uk-text-capitalize uk-text-bold">{this.props.comment.author}</span></p>
          <div className="votes">
            <button onClick={this.onUpVote.bind(this)} href="">
              <span is uk-icon="icon:chevron-up" className="upvote-icon"></span></button>
            <button  onClick={this.onDownVote.bind(this)} href=""><span is uk-icon="icon:chevron-down" className="upvote-icon"></span></button>
            <span>{this.props.comment.voteScore}</span>
          </div>
          <div className="comment-action">
            <button className="uk-button uk-button-xsmall uk-button-secondary uk-button-alt" onClick={this.onEdit.bind(this)}>Edit</button>
            <button className="uk-button uk-button-xsmall uk-button-danger uk-button-alt" onClick={this.onDelete.bind(this)}>Delete</button>
          </div>
        </div>
      )
    }
  }

  render() {
    return (
      <div>
        {this.getBody()}
      </div>
    )
  }
}
