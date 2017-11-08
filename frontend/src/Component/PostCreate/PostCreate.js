import React from 'react';
import {connect} from 'react-redux';

import {loadCategories} from "../../Actions/categoriesAction";
import {createPost} from "../../Actions/postAction";

export class PostCreate extends React.Component {
  constructor(props) {
    super(props);
    this.props.loadCategories();
  }

  onPostCreate() {
    let title = document.getElementById('title').value;
    let author = document.getElementById('author').value;
    let body = document.getElementById('body').value;
    let category = document.getElementById('category').value;
    this.props.createPost(title, author, body, category);
    this.props.history.replace('/');
  }

  render() {
    return (
      <div className="uk-flex">
        <div className="uk-width-1-4@m"></div>
        <div className="uk-width-1-2@m">
          <div>
            <h3 className="uk-text-left">Add New Post</h3>
            <div className="uk-margin">
              <input className="uk-input" type="text" id='title' placeholder='Title'/>
            </div>
            <div className="uk-margin">
              <input className="uk-input" type="text" id='author' placeholder='Author'/>
            </div>
            <div className="uk-margin">
              <textarea className="uk-textarea" rows="5" id='body' placeholder='Content'></textarea>
            </div>
            <div className="uk-margin">
              <select className="uk-select" id='category'>
                {this.props.categories && this.props.categories.map(item => <option key={item.name}
                                                                                    value={item.name}>{item.name}</option>)}
              </select>
            </div>
            <div className="uk-text-left">
              <button className="uk-button-primary uk-button" onClick={this.onPostCreate.bind(this)}>Create</button>
            </div>
          </div>
        </div>
        <div className="uk-width-1-4@m"></div>
      </div>

    )
  }
}

function mapStateToProps(state) {
  return {
    categories: state.categories.categories.categories,
    goToPost: state.posts.goToPost,
    post: state.posts.post
  }
}

export default connect(
  mapStateToProps,
  {
    loadCategories: loadCategories,
    createPost: createPost
  }
)(PostCreate);
