import { useState } from "react";

const Categories = ({ categories, filterItems }) => {
  const [toggle, setToggle] = useState(false);

  const ToggleSwitch = () => {
    toggle ? setToggle(false) : setToggle(true);
  };

  return (
    <div className="portfolio_filter">
      {toggle && (
        <ul>
          {categories.map((category, index) => {
            return (
              <li
                type="button"
                key={index}
                className="filter-btn opened"
                onClick={() => filterItems(category)}
              >
                <button>
                  <span className="first">{category}</span>
                  <span className="second">{category}</span>
                </button>
              </li>
            );
          })}
        </ul>
      )}
      <div className="wrapper" onClick={ToggleSwitch}>
        <button>
          <span className="trigger"></span>
        </button>
      </div>
    </div>
  );
};

export default Categories;
