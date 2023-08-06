import { ChangeEvent } from "react";
import { FiHeart } from "react-icons/fi";
import { AiOutlineShoppingCart, AiOutlineUserAdd } from "react-icons/ai";

interface Props {
  setQuery: React.Dispatch<React.SetStateAction<string>>; // Replace 'string' with the actual type of your state
}

function Nav(props: Props) {
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    props.setQuery(event.target.value);
    // console.log(props.query);
  };

  return (
    <nav>
      <div className="nav-container">
        <input
          onChange={handleInputChange}
          className="search-input"
          type="text"
          placeholder="Enter your search shoes."
        />
      </div>

      <div className="profile-container">
        <a href="#">
          <FiHeart className="nav-icons" />
        </a>
        <a href="#">
          <AiOutlineShoppingCart className="nav-icons" />
        </a>
        <a href="#">
          <AiOutlineUserAdd className="nav-icons" />
        </a>
      </div>
    </nav>
  );
}

export default Nav;
