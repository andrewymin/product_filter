import "../../src/css/app.css";
import data from "./db/dataShoes.tsx";
import { useState } from "react";
import Navigation from "./Navigation/Nav.tsx";
import Products from "./Products/Products.tsx";
import Recommended from "./Recommended/Recommended.tsx";
import Sidebar from "./SideBar/Sidebar.tsx";

function App() {
  // Input filter
  const [query, setQuery] = useState("");
  const [categoryQuery, setCategoryQuery] = useState(""); // use value to filter for this category
  const [priceQuery, setPriceQuery] = useState(""); // use value to filter for this category
  const [colorQuery, setColorQuery] = useState(""); // use value to filter for this category

  const searchedItems = data.filter(
    (data) =>
      data.title.toLocaleLowerCase().includes(query.toLocaleLowerCase()) !==
      false
  );

  const price = (dataPrice: number, userPriceOption: number) => {
    // place below for true or false

    if (userPriceOption == 0) return true;

    if (dataPrice <= userPriceOption && userPriceOption == 50) return true;

    if (
      dataPrice <= userPriceOption &&
      dataPrice >= 50 &&
      userPriceOption == 100
    )
      return true;

    if (
      dataPrice <= userPriceOption &&
      dataPrice >= 100 &&
      userPriceOption == 150
    )
      return true;

    if (
      dataPrice > userPriceOption &&
      dataPrice > 150 &&
      userPriceOption == 151
    )
      return true;
    else return false;
  };

  let filteredItems = searchedItems.filter((searchedItems) => {
    // let price = parseInt(searchedItems.newPrice) <= parseInt(priceQuery)? true : false;

    return (
      searchedItems.category
        .toLocaleLowerCase()
        .includes(categoryQuery.toLocaleLowerCase()) &&
      searchedItems.color
        .toLocaleLowerCase()
        .includes(colorQuery.toLocaleLowerCase()) &&
      price(parseInt(searchedItems.newPrice), parseInt(priceQuery)) !== false
    );
  });

  console.log(filteredItems);

  // filteredItems.length if this is 0 then show div that says nothing matches search
  return (
    <>
      <Sidebar
        setCategoryQuery={setCategoryQuery}
        setPriceQuery={setPriceQuery}
        setColorQuery={setColorQuery}
      />
      <Navigation setQuery={setQuery} />
      <Recommended />
      <Products query={query} filteredItems={filteredItems} />
    </>
  );
}

export default App;
