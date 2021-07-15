import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3000/api',
});

export const insertMovie = (payload) => api.post(`/movie`, payload);
export const getMovies = () => api.get(`/movies`);
export const updateMovie = (id, payload) => api.put(`/movie/${id}`, payload);
export const deleteMovie = (id) => api.delete(`movie/${id}`);
export const getMovieById = (id) => api.get(`/movie/${id}`);

export const apis = {
    insertMovie,
    getMovies,
    updateMovie,
    deleteMovie,
    getMovieById,
};