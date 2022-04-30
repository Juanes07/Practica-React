import React from "react";
import { TodoContext } from "../TodoContext";
import "./TodoForm.css";

 const FormButton = () => {
  const { setOpenModal } = React.useContext(TodoContext);

  const onCancel = () => {
    setOpenModal(false);
  };
  return (
    <div>
      <button
        type="button"
        className="TodoForm-button TodoForm-button--cancel"
        onClick={onCancel}
      >
        Cancelar
      </button>
      <button type="submit" className="TodoForm-button TodoForm-button--add">
          Añadir ToDo
        </button>
    </div>
  );
};

export default FormButton;
