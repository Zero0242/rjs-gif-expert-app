import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { GifExpertApp } from "../src/GifExpertApp";

describe("Pruebas en el componente <GifExpertApp/>", () => {
  const categoria = "Touhou";
  const categorias = ["Anime", "Cats", "Games", categoria];

  test("Debe coincidir con el snapshot", () => {
    const { container } = render(<GifExpertApp />);

    // screen.debug();

    expect(container).toMatchSnapshot();
  });

  test("Deberian haber 10 gifs al completar la carga inicial", async () => {
    render(<GifExpertApp />);

    await waitFor(() =>
      expect(screen.getAllByRole("img").length).toBeGreaterThan(0)
    );

    const currentImages = screen.getAllByRole("img");
    expect(currentImages.length).toBe(10);
  });

  test("Al añadir una categoria deberia aparecer en la app", async () => {
    render(<GifExpertApp />);

    await waitFor(() =>
      expect(screen.getByText("Cargando...").value).toBeFalsy()
    );

    const input = screen.getByRole("textbox");
    const form = screen.getByRole("form");

    fireEvent.input(input, { target: { value: categoria } });
    fireEvent.submit(form);

    await waitFor(() =>
      expect(screen.getAllByRole("img").length).toBeGreaterThan(10)
    );
    const currentImages = screen.getAllByRole("img");

    // screen.debug()
    expect(currentImages.length).toBe(20);
  });

  test("Deberia renderizar cada categoria", async () => {
    render(<GifExpertApp />);

    await waitFor(() =>
      expect(screen.getByText("Cargando...").value).toBeFalsy()
    );

    const input = screen.getByRole("textbox");
    const form = screen.getByRole("form");

    let currentCount = 10;

    for (const category of categorias) {
      fireEvent.input(input, { target: { value: category } });
      fireEvent.submit(form);

      await waitFor(() =>
        expect(screen.getAllByRole("img").length).toBeGreaterThan(currentCount)
      );
      const currentImages = screen.getAllByRole("img");

      expect(currentImages.length).toBe(currentCount + 10);

      currentCount = currentCount + 10;
    }
  });
});
