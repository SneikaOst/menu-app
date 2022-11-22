import React, { useState, useMemo } from "react";
import {
  getCheckboxError,
  getLoginError,
  getPasswordError,
} from "../../pages/Auth/validators";
import classnames from "classnames";
import { useDispatch } from "react-redux";
import { signInAction } from "../../store/reducers/authStore";
import { useNavigate } from "react-router-dom";

import "./form.css";
import Button from "../ui/Button";

const errorClass = "fieldset_error";

function Form() {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [checkbox, setCheckbox] = useState("");
  const [showError, setShowError] = useState(false);

  const dispatch = useDispatch();
  const signIn = (auth) => dispatch(signInAction(auth));
  const navigate = useNavigate();

  const loginError = useMemo(() => getLoginError(login), [login]);
  const passwordError = useMemo(() => getPasswordError(password), [password]);
  const checkboxError = useMemo(() => getCheckboxError(checkbox), [checkbox]);

  const [isSignUp, setIsSignUp] = useState(false);

  const onClick = (event) => {
    setShowError(true);

    const isValid = ![
      loginError,
      passwordError,
      isSignUp ? checkboxError : "",
    ].some((err) => err !== "");

    if (isValid) {
      signIn({ login, password });
      navigate("/");
    }
  };

  return (
    <div className="form" noValidate>
      <div className="form__link-wrapper">
        <button onClick={() => setIsSignUp(!isSignUp)} className="form__link">
          {isSignUp ? "Авторизоваться" : "Зарегистрироваться"}
        </button>
      </div>
      <h1 className="form__header">{isSignUp ? "Регистрация" : "вход"}</h1>
      <fieldset
        className={classnames("form__fieldset fieldset", {
          [errorClass]: showError && loginError,
        })}
      >
        <input
          onChange={(e) => setLogin(e.currentTarget.value)}
          className="fieldset__input"
          type="login"
          name="login"
          placeholder="Логин"
        />
        <span className="fieldset__error">{loginError}</span>
      </fieldset>
      <fieldset
        className={classnames("form__fieldset fieldset", {
          [errorClass]: showError && passwordError,
        })}
      >
        <input
          onChange={(e) => setPassword(e.currentTarget.value)}
          className="fieldset__input"
          type="password"
          name="password"
          placeholder="Пароль"
        />
        <span className="fieldset__error">{passwordError}</span>
      </fieldset>

      <fieldset
        className={classnames("form__fieldset fieldset checkbox", {
          [errorClass]: showError && checkboxError,
        })}
      >
        <input
          onChange={(e) => setCheckbox(e.currentTarget.checked)}
          type="checkbox"
          id="checkbox"
        />
        <label className="checkbox__label" htmlFor="checkbox">
          <svg
            width="17"
            height="17"
            viewBox="0 0 17 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.36133 13L0.755859 8.39453L2.52246 6.62793L5.36133 9.45801L14.3613 0.493164L16.1279 2.2334L5.36133 13Z"
              fill="#787878"
            ></path>
          </svg>
          <span className="checkbox__text">
            Я согласен получать обновления на почту
          </span>
        </label>
      </fieldset>

      <div
        className={classnames("fieldset__error error", {
          [errorClass]: showError && checkboxError,
        })}
      >
        <span className="fieldset__error">Логин или пароль неверен</span>
      </div>

      <fieldset className="form__fieldset submit fieldset">
        <Button onClick={onClick} className="submit__button">
          {isSignUp ? "Зарегистрироваться" : "Войти"}
        </Button>
      </fieldset>
    </div>
  );
}

export default Form;
