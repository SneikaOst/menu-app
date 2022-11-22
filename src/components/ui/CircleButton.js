import classes from "./CircleButton.module.css";

export default function CircleButton({
  onClick,
  size = 30,
  color = "#ffffff",
  children,
}) {
  return (
    <button
      className={classes.button}
      onClick={onClick}
      style={{ width: size, height: size, color: color }}
    >
      {children}
    </button>
  );
}
