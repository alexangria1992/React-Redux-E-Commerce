import React, { useState } from "react";
import { CATEGORIES } from "../../constants/categories";
// import { CATEGORIES } from "../../constants";

const CategoriesBar = ({ setFilter }) => {
  const [activeCategory, setActiveCategory] = useState(null);
  const setCategory = (e) => {
    const value = e.target.innerText;
    
    setFilter("product_type", value);
    setActiveCategory(e.target.innerText);

  };


  return (
    <>
      {CATEGORIES.map((cat) => (
        <div key={cat.name} className="my-4">
          <h4
            className="font-krona mb-2"
            onClick={setCategory}
          >
            {cat.name}
          </h4>
          <ul className="ml-4 space-y-2">
            {cat.subCategories.map((subCat) => (
              <li
                className={`cursor-pointer  hover:text-yellow ${activeCategory === subCat ? "text-yellow font-medium" : ""}`}
                
                key={subCat}
                onClick={setCategory}
                
              >
                {subCat}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
};

export default CategoriesBar;
