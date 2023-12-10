import { AddCategory } from "../../src/components";
import { screen, render, fireEvent } from "@testing-library/react";

describe("Pruebas en <AddCategory />", () => {
  test("debe de cambiar el valor de la caja de texto", () => {
    render(<AddCategory setCategories={() => {}} />);

    const input = screen.getByRole("textbox");

    fireEvent.input(input, { target: { value: "Touhou" } });
    screen.debug();

    expect(input.value).toBe("Touhou");
  });
});
