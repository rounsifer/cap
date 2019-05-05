import React from 'react';
import { Route } from 'react-router-dom';

import TrophyList from './containers/TrophyListView';
import TrophyDetail from './containers/TrophyDetailView';

import ProblemList from './containers/ProblemListView';
import ProblemDetail from './containers/ProblemDetailView';

import LoginPage from './containers/LoginPageView';
import SignupPage from './containers/SignupPageView';
import GamePage from './containers/GameView';

const BaseRouter = () => (
    <div>
        <Route exact path='/' component={LoginPage} />
        <Route exact path='/login' component={LoginPage} />
        <Route exact path='/signup' component={SignupPage} />
        <Route exact path='/play' component={GamePage} />
        <Route exact path='/trophies' component={TrophyList} />
        <Route exact path='/trophies/:trophyID' component={TrophyDetail} />
        <Route exact path='/problems' component={ProblemList} />
        <Route exact path='/problems/:problemID' component={ProblemDetail} />
    </div>
);

export default BaseRouter;