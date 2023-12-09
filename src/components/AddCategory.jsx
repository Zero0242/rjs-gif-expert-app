import { useState } from "react";

export const AddCategory = () => {
  const [inputValue, setInputValue] = useState("second");

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
