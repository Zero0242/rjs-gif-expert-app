import { renderHook, waitFor } from "@testing-library/react";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

describe("Pruebas en hook useFetchGifs", () => {
  const categoria = "Touhou";

  test("debe retornar el estado inicial", () => {
    const { result } = renderHook(() => useFetchGifs(categoria));

    const { images, isLoading } = result.current;

    expect(images.length).toBe(0);
    expect(isLoading).toBeTruthy();
  });

  test("debe de retornar un arreglo de imagenes y el loading en false", async () => {
    const { result } = renderHook(() => useFetchGifs(categoria));

    await waitFor(() =>
      expect(result.current.images.length).toBeGreaterThan(0)
    );

    const { images, isLoading } = result.current;

    expect(images.length).toBeGreaterThan(0);
    expect(isLoading).toBeFalsy();
  });
});
