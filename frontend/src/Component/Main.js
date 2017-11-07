/**
 * Created by ansarimofid on 06/11/17.
 */

import React from 'react'
import {Switch, Route} from 'react-router-dom'

import Home from './Home/Home'

const main = ()=>(
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
    </Switch>
  </main>
);

export default main;
