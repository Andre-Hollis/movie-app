import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { NavBar } from '../components';
import { MoviesInsert, MoviesUpdate, MoviesList } from '../pages';

import 'bootstrap/dist/css/bootstrap.min.css';

export const App = () => {
    return (
        <Router>
            <NavBar />
            <Switch>
                <Route path="movies/list" exact component={MoviesList} />
                <Route path="movies/create" exact component={MoviesInsert} />
                <Route path="movies/update" exact component={MoviesUpdate} />
            </Switch>
        </Router>
    );
}
