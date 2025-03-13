
function eliminarFavorito(id, favoritos, setStorage, setData) {
  const newFavoritos = favoritos.filter(movie => movie.id !== id);

  // Simular almacenamiento local
  setStorage({
    key: "favoritos",
    data: newFavoritos
  });

  // Simular actualización de UI
  setData({ favoritos: newFavoritos });

  return newFavoritos; // Retorna la nueva lista para validar en test
}
module.exports = { eliminarFavorito };

