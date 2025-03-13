// api/api.js
/**
 * Realiza una petición HTTP.
 * @param {string} url - La URL a la que se hace la petición.
 * @param {string} method - El método HTTP (GET, POST, etc.).
 * @returns {Promise} - Una promesa que resuelve con los datos de la respuesta.
 */
export function fetchData(url, method = 'GET') {
  return new Promise((resolve, reject) => {
    my.request({
      url,
      method,
      success: (res) => resolve(res.data),
      fail: (error) => reject(error),
    });
  });
}