import { GifItem } from "../../src/components";
import { render, screen } from "@testing-library/react";

describe("Pruebas en <GifItem />", () => {
  const url = "https://tenor.com/hIiAum6gFkk.gif";
  const title = "Pruebas";

  test("Deberia hacer match con el snapshot", () => {
    const { container } = render(<GifItem title={title} url={url} />);

    screen.debug();
    expect(container).toMatchSnapshot();
  });

  test("debe de mostrar la imagen con el URL y el ALT indicado", () => {
    render(<GifItem title={title} url={url} />);

    const { src, alt } = screen.getByRole("img");

    expect(src).toBe(url);
    expect(alt).toBe(title);
  });

  test("debe de mostrar el titulo en el componente", () => {
    render(<GifItem title={title} url={url} />);

    expect(screen.getByText(title)).toBeTruthy();
  });
});
