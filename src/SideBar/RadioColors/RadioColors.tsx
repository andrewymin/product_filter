import Input from "../../components/Input";

interface Props {
  setColorQuery: React.Dispatch<React.SetStateAction<string>>; // Replace 'string' with the actual type of your state
}

function Colors(props: Props) {
  const handleClick = (event: React.MouseEvent<HTMLInputElement>) => {
    const target = event.target as HTMLInputElement;
    const value = target.value;
    props.setColorQuery(value);
    console.log(value);
  };

  return (
    <div>
      <h2 className="sidebar-title color-title">Colors</h2>
      <Input
        onClick={handleClick}
        inputName="test3"
        filterOp="All"
        inputValue=""
      />
      <Input
        onClick={handleClick}
        inputName="test3"
        filterOp="Black"
        inputValue="black"
      />
      <Input
        onClick={handleClick}
        inputName="test3"
        filterOp="Blue"
        inputValue="blue"
      />
      <Input
        onClick={handleClick}
        inputName="test3"
        filterOp="Red"
        inputValue="red"
      />
      <Input
        onClick={handleClick}
        inputName="test3"
        filterOp="Green"
        inputValue="green"
      />
      <Input
        onClick={handleClick}
        inputName="test3"
        filterOp="White"
        inputValue="white"
      />
    </div>
  );
}

export default Colors;
