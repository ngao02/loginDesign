export const toggle = (inputId) => {
  return () => {
    const passwordInput = document.getElementById(inputId);
    const pwCheckHide = document.getElementById('pw-check-hide');
    const pwCheckShow = document.getElementById('pw-check-show');

    if (passwordInput && pwCheckHide && pwCheckShow) {
      const isPassword = passwordInput.type === 'password';
      pwCheckHide.style.display = isPassword ? 'none' : 'flex';
      pwCheckShow.style.display = isPassword ? 'flex' : 'none';
      passwordInput.type = isPassword ? 'text' : 'password';
    }
  };
};

const REGEX = {
  PASSWORD_UPPERCASE: /(?=(.*[A-Z]))/,
  PASSWORD_LOWERCASE: /(?=.*[a-z])/,
  PASSWORD_SPECIAL: /(?=.*[\!@#$%^&*()\\[\]{}\-_+=~`|:;"'<>,./?])/,
  PASSWORD_NUMBER: /(?=(.*[0-9]))/,
  PASSWORD: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
  EMAIL: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
  USERNAME: /^[a-z0-9_-]{6,10}$/,
};
const MESSAGE = {
  ERR_001: '*required',
  ERR_002: '*incorrect format',
  ERR_003:
    '*number of characters is between 6 and 10, contains only letters and numbers (no special characters)',
};
export const Validator = (options) => {
  function validate(inputElement, rule) {
    var errorElement = inputElement.parentElement.querySelector('.form-message');
    var errorMessage = rule.test(inputElement.value);

    const password = document.getElementById('password');
    const characters = document.getElementById('characters');
    const uppercase = document.getElementById('uppercase');
    const lowercase = document.getElementById('lowercase');
    const special = document.getElementById('special');
    const number = document.getElementById('number');

    characters.classList.remove('valid-password');
    uppercase.classList.remove('valid-password');
    lowercase.classList.remove('valid-password');
    special.classList.remove('valid-password');
    number.classList.remove('valid-password');

    if (password.value.length > 8) {
      characters.classList.add('valid-password');
    }
    if (REGEX.PASSWORD_UPPERCASE.test(password.value)) {
      uppercase.classList.add('valid-password');
    }
    if (REGEX.PASSWORD_LOWERCASE.test(password.value)) {
      lowercase.classList.add('valid-password');
    }
    if (REGEX.PASSWORD_SPECIAL.test(password.value)) {
      special.classList.add('valid-password');
    }
    if (REGEX.PASSWORD_NUMBER.test(password.value)) {
      number.classList.add('valid-password');
    }
    if (errorMessage) {
      errorElement.innerText = errorMessage;
      inputElement.parentElement.classList.add('valid');
    } else {
      inputElement.parentElement.classList.remove('valid');
    }
  }

  let formElement = document.querySelector(options.form);
  if (formElement) {
    formElement.onsubmit = function (e) {
      e.preventDefault();

      options.rules.forEach(function (rule) {
        let inputElement = formElement.querySelector(rule.selector);
        validate(inputElement, rule);
      });
    };

    options.rules.forEach(function (rule) {
      let inputElement = formElement.querySelector(rule.selector);
      let errorElement = inputElement.parentElement.querySelector('.form-message');
      if (inputElement) {
        inputElement.onkeyup = function () {
          validate(inputElement, rule);
        };
        inputElement.onblur = function () {
          validate(inputElement, rule);
        };
        inputElement.oninput = function () {
          if (inputElement) {
            errorElement.innerText = '';
            inputElement.parentElement.classList.remove('valid');
          }
        };
      }
    });
  }
};
Validator.isRequired = (selector) => {
  return {
    selector: selector,
    test: function (value) {
      let text;
      if (!value.trim()) text = MESSAGE.ERR_001;
      else {
        text = REGEX.PASSWORD.test(value) ? undefined : MESSAGE.ERR_002;
      }
      return text;
    },
  };
};
Validator.isEmail = (selector) => {
  return {
    selector: selector,
    test: function (value) {
      let text;
      if (!value.trim()) text = MESSAGE.ERR_001;
      else {
        text = REGEX.EMAIL.test(value) ? undefined : MESSAGE.ERR_002;
      }
      return text;
    },
  };
};
Validator.isUsername = (selector) => {
  return {
    selector: selector,
    test: function (value) {
      let text;
      if (!value.trim()) text = MESSAGE.ERR_001;
      else {
        text = REGEX.USERNAME.test(value) ? undefined : MESSAGE.ERR_003;
      }
      return text;
    },
  };
};
Validator.isChecked = (selector) => {
  return {
    selector: selector,
    test: function () {
      let text;
      var checkbox = document.querySelector(selector);
      text = checkbox.checked ? undefined : MESSAGE.ERR_001;
      return text;
    },
  };
};
