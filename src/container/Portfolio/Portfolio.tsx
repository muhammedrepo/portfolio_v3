import { PortfolioWrapper } from './PortfolioStyles';
import { SectionTitle } from '../../components';
import { workData, WorkItem } from '../../utils/workData';
import Categories from './Categories';
import PortfolioItem from './PortfolioItem';
import { useState } from 'react';

const allCategories: string[] = ['All'];
workData.forEach((work: WorkItem) => {
  if (!allCategories.includes(work.category)) {
    allCategories.push(work.category);
  }
});

const Portfolio: React.FC = () => {
  const [menuItems, setMenuItems] = useState<WorkItem[]>(workData);
  const [categories] = useState<string[]>(allCategories);
  const filterItems = (category: string) => {
    if (category === 'All') {
      setMenuItems(workData);
      return;
    }
    const newItems = workData.filter(
      (work: WorkItem) => work.category === category
    );
    setMenuItems(newItems);
  };

  return (
    <PortfolioWrapper>
      <div className="portfolio" id="projects">
        <div className="container">
          <div className="main_title">
            <SectionTitle name="Featured Works" title="Portfolio" />
            <Categories categories={categories} filterItems={filterItems} />
          </div>
          <PortfolioItem workItem={menuItems} />
        </div>
      </div>
    </PortfolioWrapper>
  );
};

export default Portfolio;
