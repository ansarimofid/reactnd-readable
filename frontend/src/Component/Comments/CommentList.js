import React from 'react';
import {Comment} from "./Comment";

export class CommentList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {this.props.comments.map((item) => <Comment comment={item} key={item.id} onSave={this.props.onSave}
                                                    onDelete={this.props.onDelete} onVote={this.props.onVote}/>)}
      </div>
    )
  }
}
