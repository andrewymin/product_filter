import Input from "../../components/Input";

interface Props {
  setPriceQuery: React.Dispatch<React.SetStateAction<string>>; // Replace 'string' with the actual type of your state
}

function Price(props: Props) {
  const handleClick = (event: React.MouseEvent<HTMLInputElement>) => {
    const target = event.target as HTMLInputElement;
    const value = target.value;
    props.setPriceQuery(value);
    console.log(value);
  };

  return (
    <div className="ml">
      <h2 className="sidebar-title price-title">Price</h2>
      <Input
        onClick={handleClick}
        inputName="test2"
        filterOp="All"
        inputValue="0"
      />
      <Input
        onClick={handleClick}
        inputName="test2"
        filterOp="$0-$50"
        inputValue="50"
      />
      <Input
        onClick={handleClick}
        inputName="test2"
        filterOp="$50-$100"
        inputValue="100"
      />
      <Input
        onClick={handleClick}
        inputName="test2"
        filterOp="$100-$150"
        inputValue="150"
      />
      <Input
        onClick={handleClick}
        inputName="test2"
        filterOp="Over $150"
        inputValue="151"
      />
    </div>
  );
}

export default Price;
