import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components";

describe("Pruebas en <GifGrid />", () => {
  const category = "Touhou";

  test("debe de mostrar un loading al inicio", () => {
    render(<GifGrid category={category} />);

    expect(screen.getByText('Cargando...'))
    expect(screen.getByText(category))
  });
});
