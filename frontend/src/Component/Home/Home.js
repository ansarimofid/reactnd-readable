/**
 * Created by ansarimofid on 04/11/17.
 */
import React, {Component} from 'react';
import Posts from '../Posts/Posts'
import Categories from '../Categories/Categories'
import {connect} from 'react-redux';

class Home extends Component {
  render() {
    return (
      <div className="uk-container">
        <div className="uk-grid">
          <div className="uk-width-1-4@m">
            <Categories category={this.props.match.params.category}/>
          </div>
          <div className="uk-width-3-4@m posts">
            <Posts category={this.props.match.params.category}/>
          </div>
        </div>
      </div>
    );
  }
}

export default connect()(Home);
