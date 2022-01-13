import { GiCrossMark, GiCheckMark } from "react-icons/gi";

export default function Square(props) {
  return (
    <button name={props.name} className="button" onClick={props.onClick} disabled={props.disabled}>
      {props.value === "true" && <GiCheckMark />}
      {props.value === "false" && <GiCrossMark />}
    </button>
  );
}
