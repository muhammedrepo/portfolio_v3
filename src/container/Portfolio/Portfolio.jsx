import { useState } from "react";

import { PortfolioWrapper } from "./PortfolioStyles";

import { SectionTitle } from "../../components";
import { workData } from "../../utils/workData";
import Categories from "./Categories";
import PortfolioItem from "./PortfolioItem";

const allCategories = [
  "all",
  ...new Set(workData.map((work) => work.category)),
];

const Portfolio = () => {
  const [menuItems, setMenuItems] = useState(workData);
  const [categories, setCategories] = useState(allCategories);
  const filterItems = (category) => {
    if (category === "all") {
      setMenuItems(workData);
      return;
    }
    const newItems = workData.filter((work) => work.category === category);
    setMenuItems(newItems);
  };

  return (
    <PortfolioWrapper>
      <div className="coolzyte_tm_portoflio" id="projects">
        <div className="container">
          <div className="coolzyte_tm_main_title">
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
