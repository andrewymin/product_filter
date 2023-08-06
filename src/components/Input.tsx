interface inputProp {
  inputName: string;
  filterOp: string;
  inputValue: string | number;
  onClick: React.MouseEventHandler;
}

function Input(props: inputProp) {
  return (
    <label className="sidebar-label-container">
      <input
        onClick={props.onClick}
        type="radio"
        name={props.inputName}
        value={props.inputValue}
      />
      <span className="checkmark"></span>
      {props.filterOp}
    </label>
  );
}

export default Input;
