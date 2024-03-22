import React from 'react';
import './index.scss';
import Input from '../input';

const Checkbox = () => {
  return (
    <div className="form-checkbox">
      {/* <input style={{ outline: 'none' }}type="checkbox" id="checkbox" className="check" /> */}
      <div className="checkbox">
        <Input type="checkbox" id="checkbox" />
      </div>

      <label>
        I want to receive emails about the product, feature updates, events, and
        <br />
        marketing promotions.
      </label>
      <span
        className="form-message"
        style={{ position: 'absolute', bottom: '-10px', left: '0' }}
      ></span>
    </div>
  );
};

export default Checkbox;
