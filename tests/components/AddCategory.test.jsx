import { AddCategory } from "../../src/components";
import { screen, render, fireEvent } from "@testing-library/react";

describe("Pruebas en <AddCategory />", () => {
  const inputValue = "Touhou";

  test("debe de cambiar el valor de la caja de texto", () => {
    render(<AddCategory setCategories={() => {}} />);

    const input = screen.getByRole("textbox");

    fireEvent.input(input, { target: { value: inputValue } });

    expect(input.value).toBe(inputValue);
  });

  test("debe de llamar onNewCategory si el input tiene un valor", () => {
    const setCategories = jest.fn();
    render(<AddCategory setCategories={setCategories} />);

    const input = screen.getByRole("textbox");
    const form = screen.getByRole("form");

    fireEvent.input(input, { target: { value: inputValue } });

    fireEvent.submit(form);
    // screen.debug();
    expect(input.value).toBe("");

    // Evaluacion de la funcion
    expect(setCategories).toHaveBeenCalled();
    expect(setCategories).toHaveBeenCalledTimes(1);
    expect(setCategories).toHaveBeenCalledWith(inputValue);
  });

  test("no debe de llamar setCategories si el input esta vacio", () => {
    const setCategories = jest.fn();
    render(<AddCategory setCategories={setCategories} />);

    const form = screen.getByRole("form")

    fireEvent.submit(form)

    expect(setCategories).not.toHaveBeenCalled()
  });
});
