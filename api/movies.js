// api/usuarios.js
import { fetchData } from './api';

/**
 * Obtiene la lista de peliculas desde la API.
 * @returns {Promise} - Una promesa que resuelve con la lista de usuarios.
 */
export function getMovies() {
  return fetchData('https://api.themoviedb.org/3/movie/popular?api_key=32e5f7908ff19f41822c568e410bd03b&language=es');
}