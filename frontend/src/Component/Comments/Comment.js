import React from 'react';

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
        <div>
          <textarea defaultValue={this.props.comment.body} id={this.editId}/>
          <button onClick={this.onSave.bind(this)}>Save</button>
        </div>
      )
    } else {
      return (
        <div>
          <p>{this.props.comment.body}</p>
          <p>Vote: {this.props.comment.voteScore}</p>
          <button onClick={this.onEdit.bind(this)}>Edit</button>
          <button onClick={this.onDelete.bind(this)}>Delete</button>
          <button onClick={this.onUpVote.bind(this)}>Up Vote</button>
          <button onClick={this.onDownVote.bind(this)}>Down Vote</button>
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
