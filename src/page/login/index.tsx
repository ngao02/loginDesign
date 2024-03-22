import React from 'react';
import './index.scss';
import TextHeader from '../../components/text-header';
import picture from '../../asset/images/picture.jpg';
import Form from '../../components/form';
const Login = () => {
  return (
    <div className="container">
      <div className="form-infor">
        <div className="circle"></div>
        <div className="form-content">
          <TextHeader
            title="Welcome to Design Community"
            subtitle1="Already have an ccount?"
            subtitle2="Login"
          />
          <Form />
        </div>
      </div>
      <img className="picture" src={picture} alt="pictures" />
    </div>
  );
};

export default Login;
