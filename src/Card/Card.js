import classes from "./card.module.css";

export function Card(props) {
  return <div className={classes.container}>{props.children}</div>;
}
