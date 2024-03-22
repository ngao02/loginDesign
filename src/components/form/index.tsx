import React from 'react';
import Input from '../../components/input';
import InputPassword from '../../components/input-password';
import Button from '../../components/button';
import Checkbox from '../../components/checkbox';
import './index.scss';
const Form = () => {
  return (
    <form action="#" id="form">
      <div className="form-login">
        <Input name="Email" type="email" id="email" />
        <Input name="Username" id="username" type="text" />
        <InputPassword name="Password" type="password" id="password" />
        <Checkbox />
        <p>
          By creating an account, you agree to the
          <a href="/"> Terms of use</a> and
          <a href="/"> Privacy Policy</a>
        </p>

        <Button name="Create an account" subtitle1=" Already have an ccount?" subtitle2="Log in" />
      </div>
    </form>
  );
};

export default Form;
