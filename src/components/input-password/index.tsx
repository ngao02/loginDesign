import React from 'react';
import './index.scss';
import icon from '../../asset/svg/icon.svg';
import icon1 from '../../asset/svg/icon1.svg';
import { toggle } from '../../js/scripts';
interface InputPassword {
  name: string;
  type?: string;
  id?: string;
}
const InputPassword = ({ name, type, id }: InputPassword) => {
  return (
    <div className="form-item">
      <label>{name}</label>
      <div className="pw-check" id="pw-check-show" onClick={toggle('password')}>
        <img src={icon} alt="icon" />
        <label>Hide</label>
      </div>
      <div className="pw-check-1" id="pw-check-hide" onClick={toggle('password')}>
        <img src={icon1} alt="icon" />

        <label>Show</label>
      </div>
      <input type={type} id={id} name={id} />
      <span className="form-message"></span>
      <ul>
        <li id="characters">Use 8 or more characters</li>
        <li id="uppercase">One Uppercase characters</li>
        <li id="lowercase">One lowercase characters</li>
        <li id="special">One special characters</li>
        <li id="number">One number</li>
      </ul>
    </div>
  );
};

export default InputPassword;
