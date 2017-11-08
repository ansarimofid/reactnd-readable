/**
 * Created by ansarimofid on 09/11/17.
 */

import React from 'react';

export default class PageNotFound extends React.Component {
  render() {
    return (
      <div>
        <h2>404 Not found.</h2>
        <p>{this.props.message}</p>
      </div>
    )
  }
}
