import classNames from "classnames";
import classes from "./button.module.css";

export function Button(props) {
  const componentClasses = [
    classes.button,
    {
      [classes.warning]: props.type === "warning",
      [classes.primary]: props.type === "primary",
      [classes.danger]: props.type === "danger",

    },
  ];

  return (
    <button {...props} className={classNames(componentClasses)}>
      {props.children}
    </button>
  );
}
