const requiredError = "Поле не должно быть пустым";

export function getPasswordError(password) {
  if (password.length <= 0) {
    return requiredError;
  }
  if (password.length < 4) {
    return "Пароль должен содержать не менее 4-х символов";
  }
  return "";
}

export function getLoginError(login) {
  if (login.length <= 0) {
    return requiredError;
  }
  if (login.length < 4) {
    return "Логин должен содержать не менее 4-х символовв";
  }
  return "";
}

export function getCheckboxError(value) {
  if (!value) {
    return requiredError;
  }
  return "";
}