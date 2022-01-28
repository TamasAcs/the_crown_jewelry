import React, { useState } from "react";
import "./Products.css"
import items from "../allData";
import ItemList from "../Components/ItemList";
import Button from "../Components/Button";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const allCategories = ["All", ...new Set(items.map((item) => item.category))];

console.log(allCategories);

function Products() {
  const [menuItem, setMenuItem] = useState(items);
  const [buttons, setButtons] = useState(allCategories);

  //Filter Function
  const filter = (button) => {
    if (button === "All") {
      setMenuItem(items);
      return;
    }

    const filteredData = items.filter((item) => item.category === button);
    setMenuItem(filteredData);
  };

  return (
    <div className="Products">
      <Navbar />
      <div className="Products__title">
        <h1>
          Our
          <span> Products</span>
        </h1>
      </div>

      <Button button={buttons} filter={filter} />
      <ItemList menuItem={menuItem} />
      <Footer />
    </div>
  );
}

export default Products;
