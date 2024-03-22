import React from 'react';
import './index.scss';
interface ButtonType {
  name: string;
  subtitle1: string;
  subtitle2: string;
}
const Button = ({ name, subtitle1, subtitle2 }: ButtonType) => {
  return (
    <div className="btn-submit">
      <button type="submit">{name}</button>
      <p>
        {subtitle1} <a href="/">{subtitle2}</a>
      </p>
    </div>
  );
};

export default Button;
