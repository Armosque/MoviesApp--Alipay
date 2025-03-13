// api/usuarios.js
import { fetchData } from './api';

/**
 * Obtiene el objeto movie desde la API.
 * @returns {Promise} - Una promesa que resuelve con la lista de usuarios.
 */
export function getMovieDetails(id) {
  return fetchData( `https://api.themoviedb.org/3/movie/${id}?api_key=32e5f7908ff19f41822c568e410bd03b&language=es`);
}