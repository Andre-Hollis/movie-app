import React from 'react';

import { Dropdown } from 'react-bootstrap';

import { apis } from '../api';

export const DeleteMovie = (propsId) => {

    let deleteSelected = (event) => {
        
        event.preventDefault();

        if (window.confirm(`Delete movie with id: ${propsId}`)) {
            
            apis.deleteMovie(propsId)
            window.location.reload();
        }
    }
    
    return (
        <Dropdown.Item variant="Danger" onClick={() => deleteSelected()}>Delete</Dropdown.Item>
    );
}