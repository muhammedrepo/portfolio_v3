import { useState } from "react";

import { PortfolioWrapper } from "./PortfolioStyles";

import { SectionTitle } from "../../components";
import { workData } from "../../utils/workData";
import Categories from "./Categories";
import PortfolioItem from "./PortfolioItem";

const allCategories = [
  "All",
  ...new Set(workData.map((work) => work.category)),
];

const Portfolio = () => {
  const [menuItems, setMenuItems] = useState(workData);
  const [categories] = useState(allCategories);
  const filterItems = (category) => {
    if (category === "All") {
      setMenuItems(workData);
      return;
    }
    const newItems = workData.filter((work) => work.category === category);
    setMenuItems(newItems);
  };

  return (
    <PortfolioWrapper>
      <div className="portoflio" id="projects">
        <div className="container">
          <div className="main_title">
            <SectionTitle name="Featured Works" title="Portfolio" />
            <Categories categories={categories} filterItems={filterItems} />
          </div>
          <PortfolioItem workData={menuItems} />
        </div>
      </div>
    </PortfolioWrapper>
  );
};

export default Portfolio;
