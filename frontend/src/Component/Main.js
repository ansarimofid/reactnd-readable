/**
 * Created by ansarimofid on 06/11/17.
 */

import React from 'react'
import {Switch, Route} from 'react-router-dom'

import Home from './Home/Home'
import PostFull from './PostFull/PostFull';
import PostCreate from './PostCreate/PostCreate';

const main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route exact path='/_create' component={PostCreate}/>
      <Route exact path='/:category/:id' component={PostFull}/>
      <Route exact path='/:category' component={Home}/>
    </Switch>
  </main>
);

export default main;
