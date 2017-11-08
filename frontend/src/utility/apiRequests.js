/**
 * Created by ansarimofid on 04/11/17.
 */

import uuid from 'uuid/v4';

var myHeaders = new Headers({
  'Accept': 'application/json',
  'Authorization': 'token',
  'Content-Type': 'application/json',
});

export default {
  getAllPost: () => {
    return new Promise((resolve, reject) => {
      fetch('http://localhost:3001/posts', {method: 'GET', headers: myHeaders})
        .then((response) => {
          response.json().then((posts) => {
            // console.log(posts);
            resolve(posts)
          })
        })
    })
  },
  getFullPost: (id) => {
    return new Promise((resolve, reject) => {
      fetch('http://localhost:3001/posts/' + id, {method: 'GET', headers: myHeaders})
        .then((response) => {
          response.json().then((post) => {
            resolve(post)
          })
        })
    })
  },
  createPost: (title, author, body, category) => {
    return new Promise((resolve, reject) => {
      fetch('http://localhost:3001/posts', {
        method: 'POST', headers: myHeaders, body: JSON.stringify({
          id: uuid(),
          timestamp: Math.round((new Date()).getTime()),
          title,
          body,
          author,
          category
        })
      })
        .then(response => response.json().then(post => resolve(post)))
    })
  },
  getPostComments: (id) => {
    return new Promise((resolve, reject) => {
      fetch('http://localhost:3001/posts/' + id + '/comments', {method: 'GET', headers: myHeaders})
        .then((response) => {
          response.json().then((comments) => resolve(comments))
        })
    })
  },
  savePost: (id, title, body) => {
    return new Promise((resolve, reject) => {
      fetch('http://localhost:3001/posts/' + id, {
        method: 'PUT',
        headers: myHeaders,
        body: JSON.stringify({title, body})
      })
        .then((response) => {
          response.json().then((post) => resolve(post))
        })
    })
  },
  deletePost: (id) => {
    return new Promise((resolve, reject) => {
      fetch('http://localhost:3001/posts/' + id, {method: 'DELETE', headers: myHeaders})
        .then(response => response.json().then((post) => resolve(post)))
    })
  },
  saveComment: (id, body) => {
    return new Promise((resolve, reject) => {
      fetch('http://localhost:3001/comments/' + id, {method: 'PUT', headers: myHeaders, body: JSON.stringify({body})})
        .then((response) => {
          response.json().then((comment) => resolve(comment))
        })
    })
  },
  addComment: (parentId, body, author) => {
    return new Promise((resolve, reject) => {
      fetch('http://localhost:3001/comments', {
        method: 'POST', headers: myHeaders, body: JSON.stringify({
          id: uuid(),
          timestamp: Math.round((new Date()).getTime()),
          body,
          author,
          parentId
        })
      })
        .then((response) => {
          response.json().then(comment => resolve(comment))
        })
    })
  },
  deleteComment: (id) => {
    return new Promise((resolve, reject) => {
      fetch('http://localhost:3001/comments/' + id, {method: 'DELETE', headers: myHeaders})
        .then((response) => {
          response.json().then(comment => resolve(comment))
        })
    })
  },
  voteComment: (id, option) => {
    return new Promise((resolve, reject) => {
      fetch('http://localhost:3001/comments/' + id, {method: 'POST', headers: myHeaders, body: JSON.stringify({option})})
        .then(response => response.json().then(comment => resolve(comment)))
    })
  },
  getCategories: () => {
    return new Promise((resolve, reject) => {
      fetch('http://localhost:3001/categories', {method: 'GET', headers: myHeaders})
        .then((response) => {
          response.json().then((categories) => {
            // console.log(categories.categories);
            resolve(categories)
          })
        })
    })
  },
  getCategoryPost: (category) => {
    return new Promise((resolve, reject) => {
      fetch(`http://localhost:3001/${category}/posts`, {method: 'GET', headers: myHeaders})
        .then((response) => {
          response.json().then((categoryPost) => {
            resolve(categoryPost)
          })
        })
    })
  },
  votePost: (id, option) => {
    return new Promise((resolve, reject) => {
      fetch('http://localhost:3001/posts/' + id + '/', {
        method: 'POST',
        headers: myHeaders,
        body: JSON.stringify({option}),
        mode: 'cors'
      })
        .then((response) => {
          response.json().then((data) => {
            resolve(data)
          });
          // console.log()
        })
    })
  }
}
