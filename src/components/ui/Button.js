import classes from "./Button.module.css";

export default function Button({ onClick, type, children }) {
  return (
    <button className={classes.button} onClick={onClick} type={type}>
      {children}
    </button>
  );
}
