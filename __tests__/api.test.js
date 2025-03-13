import { fetchData } from "../api/api";

global.my = {
  request: jest.fn(({ success }) => success({ data: { message: "Hola, Alipay" } })),
};

test("fetchData obtiene datos de la API correctamente", async () => {
  const data = await fetchData("https://api.example.com/data");

  expect(my.request).toHaveBeenCalledWith(
    expect.objectContaining({ url: "https://api.example.com/data" })
  );
  expect(data).toEqual({ message: "Hola, Alipay" });
});
