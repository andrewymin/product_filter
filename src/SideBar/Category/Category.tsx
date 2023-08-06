// import { useState } from "react";
import Input from "../../components/Input";

interface Props {
  setCategoryQuery: React.Dispatch<React.SetStateAction<string>>; // Replace 'string' with the actual type of your state
}

function Category(props: Props) {
  const handleClick = (event: React.MouseEvent<HTMLInputElement>) => {
    const target = event.target as HTMLInputElement;
    const value = target.value;
    props.setCategoryQuery(value);
    // console.log(value);
  };

  return (
    <div>
      <h2 className="sidebar-title">Category</h2>
      <div>
        <Input
          onClick={handleClick}
          inputName="test"
          filterOp="All"
          inputValue=""
        />
        <Input
          onClick={handleClick}
          inputName="test"
          filterOp="Sneakers"
          inputValue="sneakers"
        />
        <Input
          onClick={handleClick}
          inputName="test"
          filterOp="Flats"
          inputValue="flats"
        />
        <Input
          onClick={handleClick}
          inputName="test"
          filterOp="Sandals"
          inputValue="sandals"
        />
        <Input
          onClick={handleClick}
          inputName="test"
          filterOp="Heels"
          inputValue="heels"
        />
      </div>
    </div>
  );
}

export default Category;
