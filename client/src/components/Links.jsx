import React from 'react';
import { Link } from 'react';
import styled from 'styled-components';

const Collapse = styled.div.attrs({
    // could be wrong
    className: 'collapse navbar-collapse',
})``

const List = styled.div.attrs({
    className: 'navbar-nav mr-auto',
})``

const Item = styled.div.attrs({
    // could be wrong
    className: 'collapse navbar-collapse',
})``

export const Links = () => {
    return(
        <React.Fragment>
            <Link to="/" className="navbar-brand">
                My first MERN Application
            </Link>
            <Collapse>
                <List>
                    <Item>
                        <Link to="/movies/list" className="nav-link">
                            List Movies
                        </Link>
                    </Item>
                    <Item>
                        <Link to="/movies/create" className="nav-link">
                            Create Movie
                        </Link>
                    </Item>
                </List>
            </Collapse>
        </React.Fragment>
    );
}