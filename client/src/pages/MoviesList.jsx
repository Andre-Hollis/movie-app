import React, { useEffect, useState } from 'react';
import { ReactTable }from 'react';

import styled from 'styled-components';

import { apis } from '../api';
import { Table } from '../components';

const Wrapper = styled.div`
    padding: 0 40px 40px 40px;
`



export const MoviesList = () => {

    const [movies, setMovies] = useState([]);
    const [columns, setColumns] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        async function fetchAPI() {
            setIsLoading(true);

            await apis.getMovies().then(movies => {
                setMovies(movies.data.data);
                setIsLoading(false);
            });
        }
        fetchAPI();
    }, []);

    console.log('TCL: MoviesList -> render -> movies', movies);

    setColumns([
        {
            Header: 'ID',
            accessor: '_id',
            filterable: true,
        },
        {
            Header: 'Name',
            accessor: 'name',
            filterable: true,
        },
        {
            Header: 'Rating',
            accessor: 'rating',
            filterable: true,
        },
        {
            Header: 'Time',
            accessor: 'time',
            Cell: props => <span>{props.value.join(' / ')}</span>,
        },
    ]);

    let showTable = true
    if (!movies.length) {
        showTable = false
    }

    return (
        <Wrapper>
            {showTable && (
                <ReactTable
                    data={movies}
                    columns={columns}
                    loading={isLoading}
                    defaultPageSize={10}
                    showPageSizeOptions={true}
                    minRows={0}
                />
            )}
        </Wrapper>
    );
}