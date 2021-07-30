import React from 'react';

import { useEffect, useState } from 'react';
import { Table, Container, Dropdown } from 'react-bootstrap';

import { apis } from '../api';
import { DeleteMovie } from '../components';

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
                                <td>{movie.time.map((time, i, arr) => arr.length - 1 === i ? `${time}` : `${time}, `)}</td>
                                <td>
                                    <Dropdown>
                                        <Dropdown.Toggle variant="primary" id="dropdown-basic">
                                            Options
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu>
                                            <Dropdown.Item href={`/update/${movie._id}`}>Update</Dropdown.Item>
                                            <DeleteMovie movieId={movie._id} />
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