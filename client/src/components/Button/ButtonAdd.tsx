import "./ButtonAdd.css";
import { RiAddFill } from "react-icons/ri";
export default function ButtonAdd() {
  return (
    <button className="button" type="button">
      <span className="button__text">Add Item</span>
      <span className="button__icon">
        <RiAddFill />
      </span>
    </button>
  );
}
