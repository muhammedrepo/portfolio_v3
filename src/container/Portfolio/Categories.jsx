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
                className="filter-btn"
                onClick={() => filterItems(category)}
              >
                <a>
                  <span className="first">{category}</span>
                  <span className="second">{category}</span>
                </a>
              </li>
            );
          })}
        </ul>
      )}
      <div className="wrapper" onClick={ToggleSwitch}>
        <a>
          <span className="trigger"></span>
        </a>
      </div>
    </div>
  );
};

export default Categories;

{
  /* <div className="portfolio_filter">

<ul>
  {toggle &&
    ["All", "NextJS", "UI/UX", "Web App", "ReactJS"].map(
      (item, index) => (
        <li
          key={index}
          onClick={() => handlePortfolioFilter({ item })}
          className={`${
            activeFilter === item ? "item-active" : ""
          }`}
        >
          <a href={`#${item}`} className="current">
            <span className="first">{item}</span>
            <span className="second">{item}</span>
          </a>
        </li>
      )
    )}
</ul>
<div className="wrapper" onClick={ToggleSwitch}>
  <a>
    <span className="trigger"></span>
  </a>
</div>
</div> */
}
