import { eliminarFavorito } from "../utils/utils.js";



describe("eliminarFavorito", () => {
  it("debe eliminar la película correctamente de favoritos", () => {
    // Datos de prueba
    const favoritos = [
      { id: "1", title: "Movie 1" },
      { id: "2", title: "Movie 2" },
      { id: "3", title: "Movie 3" }
    ];

    // Mock de my.setStorageSync y setData
    const mockSetStorage = jest.fn();
    const mockSetData = jest.fn();

    // Llamar a la función con el ID "2"
    const newFavoritos = eliminarFavorito("2", favoritos, mockSetStorage, mockSetData);

    // Validar que la película fue eliminada
    expect(newFavoritos).toHaveLength(2);
    expect(newFavoritos).not.toContainEqual({ id: "2", title: "Movie 2" });

    // Validar que my.setStorageSync fue llamado correctamente
    expect(mockSetStorage).toHaveBeenCalledWith({
      key: "favoritos",
      data: newFavoritos
    });

    // Validar que setData fue llamado para actualizar la UI
    expect(mockSetData).toHaveBeenCalledWith({ favoritos: newFavoritos });
  });
});
