/**
 * Created by ansarimofid on 04/11/17.
 */
var myHeaders = new Headers({
  'Accept': 'application/json',
  'Authorization': 'token',
  'Content-Type': 'application/json',
});

export default {
  getAllPost: () => {
    return new Promise((resolve,reject)=>{
      fetch('http://localhost:3001/posts', {method: 'GET', headers: myHeaders})
        .then((response) => {
          response.json().then((posts) => {
            // console.log(posts);
            resolve(posts)
          })
        })
    })
  },
  getCategories: () => {
    return new Promise((resolve,reject)=>{
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
    return new Promise((resolve,reject)=>{
      fetch(`http://localhost:3001/${category}/posts`, {method: 'GET', headers: myHeaders})
        .then((response) => {
          response.json().then((categoryPost) => {
            console.log(categoryPost);
            resolve(categoryPost)
          })
        })
    })
  },

  votePost: (id,option) => {
    return new Promise((resolve,reject)=>{
      fetch('http://localhost:3001/posts/'+id+'/', {
        method: 'POST',
        headers: myHeaders,
        body:JSON.stringify(option),
        mode:'cors'
      })
        .then((response) => {
          response.json().then((data)=>{
            resolve(data)
          });
          // console.log()
        })
    })
  }
}
