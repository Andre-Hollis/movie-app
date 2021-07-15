import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { NavBar } from '../components/NavBar';
import { MoviesInsert } from '../pages/MoviesInsert';
import { MoviesList } from '../pages/MoviesList';
import { MoviesUpdate } from '../pages/MoviesUpdate';

import 'bootstrap/dist/css/bootstrap.min.css';

export const App = () => {
    return (
        <Router>
            <NavBar />
            <Switch>
                <Route path="/movies/list" exact component={MoviesList} />
                <Route path="/movies/create" exact component={MoviesInsert} />
                <Route path="/movies/update/:id" exact component={MoviesUpdate} />
            </Switch>
        </Router>
    );
}