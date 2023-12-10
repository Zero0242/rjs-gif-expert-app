import { GifItem } from "../../src/components";
import { render, screen } from "@testing-library/react";

describe("Pruebas en <GifItem />", () => {
  test("Deberia hacer match con el snapshot", () => {
    const url = "https://tenor.com/hIiAum6gFkk.gif";
    const title = "Pruebas";
    const { container } = render(<GifItem title={title} url={url} />);

    screen.debug();
    expect(container).toMatchSnapshot();
  });
});
