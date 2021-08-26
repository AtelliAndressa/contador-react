import "./flex.css";

// enum
const FLEX_DIRECTIONS = {
  column: "column",
  row: "row",
  "row-reverse": "row-reverse",
};

export default function Flex(props) {
  console.log(props);

  const classes = [];

  // FLEX_DIRECTIONS a propriedade do valor de props.flexDirection
  // props.flexDirection => 'row'
  // FLEX_DIRECTIONS.row
  // props.flexDirection => 'batata'
  // FLEX_DIRECTION.batata => undefined

  // undefined || 'row'
  // 'row'
  classes.push(FLEX_DIRECTIONS[props.flexDirection] || FLEX_DIRECTIONS.row);

  console.log(classes);

  return (
    <div className={classes.join(" ") + " container"}>
      {props.children}
      <div class="box"></div>
      <div class="box"></div>
      <div class="box"></div>
    </div>
  );
}
