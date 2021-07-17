import React from 'react';

import { useEffect, useState } from 'react';
import { Table, Container, Dropdown } from 'react-bootstrap';

import { apis } from '../api';

export const MoviesList = () => {

    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(null);

    useEffect(() => {
        async function fetchMyAPI() {
            setIsLoading(true);

            await apis.getMovies().then(movies => {
                setMovies(movies.data.data);
                setIsLoading(false);
            });
        }
        fetchMyAPI();
    });

    console.log('TCL: MoviesList -> render -> movies', movies);

    let showTable = true
    if (!movies.length) {
        showTable = false
    }

    return (
        <Container>
            <Table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Rating</th>
                        <th>Time</th>
                        <th>Options</th>
                    </tr>
                </thead>
                <tbody>
                    {showTable && (
                        movies.map(movie => {
                            return (
                                <tr>
                                    <td>{movie._id}</td>
                                    <td>{movie.name}</td>
                                    <td>{movie.rating}</td>
                                    <td>{movie.time}</td>
                                    <td>
                                        <Dropdown>
                                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                                                Dropdown Button
                                            </Dropdown.Toggle>

                                            <Dropdown.Menu>
                                                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </td>
                                </tr>
                            )
                        })
                    )}
                </tbody>
            </Table>
        </Container>
    );
}