import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock("../../src/hooks/useFetchGifs");

describe("Pruebas en <GifGrid />", () => {
  const category = "Touhou";

  test("debe de mostrar un loading al inicio", () => {
    useFetchGifs.mockReturnValue({
      images: [],
      isLoading: true,
    });
    render(<GifGrid category={category} />);

    expect(screen.getByText("Cargando..."));
    expect(screen.getByText(category));
  });

  test("debe mostrar los items cuando se cargan las imagenes de useFetchGifs", () => {
    const gifs = [
      {
        id: "abc",
        url: "https://tenor.com/hIiAum6gFkk.gif",
        title: "Anime",
      },
      {
        id: "abc1234",
        url: "https://tenor.com/hIiAum6gFkk.gif",
        title: "hong",
      },
    ];

    useFetchGifs.mockReturnValue({
      images: gifs,
      isLoading: false,
    });

    render(<GifGrid category={category} />);


    //screen.debug()

    expect(screen.getAllByRole('img').length).toBe(2)

  });
});
