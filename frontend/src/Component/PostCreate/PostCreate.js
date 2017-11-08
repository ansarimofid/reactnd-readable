import React from 'react';
import {connect} from 'react-redux';

import {loadCategories} from "../../Actions/categoriesAction";
import {createPost} from "../../Actions/postAction";

export class PostCreate extends React.Component {
    constructor(props) {
        super(props);
        this.creating = false;
        this.props.loadCategories();
    }

    onPostCreate() {
        if (this.creating) {
            return;
        }
        // this.creating = true;
        let title = document.getElementById('title').value;
        let author = document.getElementById('author').value;
        let body = document.getElementById('body').value;
        let category = document.getElementById('category').value;
        this.props.createPost(title, author, body, category);
    }

    render() {
        console.log(this.props);
        if (this.props.post) {
            this.props.history.replace('/post/' + this.props.post.id);
        }
        return (
            <div>
                <input id='title' placeholder='Title'/>
                <input id='author' placeholder='Author'/>
                <textarea id='body' placeholder='Content' />
                <select id='category'>
                    {this.props.categories && this.props.categories.map(item => <option key={item.name} value={item.name}>{item.name}</option> )}
                </select>
                <button onClick={this.onPostCreate.bind(this)}>Create</button>
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
