import { useState } from "react";

export const AddCategory = ({ setCategories }) => {
  const [inputValue, setInputValue] = useState("");

  /**
   * @param {React.ChangeEvent<HTMLInputElement>} event
   */
  const onChange = ({ target }) => {
    setInputValue(target.value);
  };

  /**
   * @param {React.FormEvent<HTMLFormElement>} event
   */
  const onSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim().length <= 1) return;
    setCategories( inputValue.trim() );
    setInputValue("");
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type='text'
        placeholder='Buscar gifs'
        value={inputValue}
        onChange={onChange}
      />
      ;
    </form>
  );
};
