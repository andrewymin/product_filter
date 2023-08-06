import Category from "./Category/Category";
import Price from "./Price/Price";
import RadioColors from "./RadioColors/RadioColors";

interface Props {
  setCategoryQuery: React.Dispatch<React.SetStateAction<string>>; // Replace 'string' with the actual type of your state
  setPriceQuery: React.Dispatch<React.SetStateAction<string>>; // Replace 'string' with the actual type of your state
  setColorQuery: React.Dispatch<React.SetStateAction<string>>; // Replace 'string' with the actual type of your state
}

function Sidebar(props: Props) {
  return (
    <>
      <section className="sidebar">
        <div className="logo-container">
          <h1>🛒</h1>
        </div>
        <Category setCategoryQuery={props.setCategoryQuery} />
        <Price setPriceQuery={props.setPriceQuery} />
        <RadioColors setColorQuery={props.setColorQuery} />
      </section>
    </>
  );
}

export default Sidebar;
