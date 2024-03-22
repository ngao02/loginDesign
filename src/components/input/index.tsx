import React from 'react';
import './index.scss';
interface InputType {
  name?: string;
  type?: string;
  id?: string;
}
const Input = ({ name, type, id }: InputType) => {
  return (
    <div className="form-item">
      <label>{name}</label>
      <input type={type} id={id} name={id} />
      <span className="form-message"></span>
    </div>
  );
};

export default Input;
