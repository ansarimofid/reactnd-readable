/**
 * Created by ansarimofid on 04/11/17.
 */
import React, {Component} from 'react';
import PostCards from '../PostCard/PostCard'
import Posts from '../Posts/Posts'
import Categories from '../Categories/Categories'

class Home extends Component {

  render() {
    return (
      <div className="uk-container">
        <div className="uk-grid">
          <div className="uk-width-1-4@m">
            <Categories/>
          </div>
          <div className="uk-width-3-4@m posts">
            <Posts/>
          </div>
        </div>

      </div>
    );
  }
}

export default Home;