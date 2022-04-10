import { SectionTitle } from "../../components";
import { Wrapper } from "./NewsStyles";

import NewsOneModal from "./NewsOneModal";
import NewsTwoModal from "./NewsTwoModal";
import NewsThreeModal from "./NewsThreeModal";

const News = () => {
  return (
    <Wrapper>
      <div className="coolzyte_tm_news" id="news">
        <div className="container">
          <SectionTitle name="Latest News" title="News" />
          <div className="news_inner">
            <ul>
              <NewsOneModal />
              <NewsTwoModal />
              <NewsThreeModal />
            </ul>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default News;
