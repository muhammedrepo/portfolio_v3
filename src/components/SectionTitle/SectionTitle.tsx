import { any } from "prop-types";
import { Wrapper } from "./SectionTitleStyles";

const SectionTitle = ({ name, title }: { name: any; title: any }) => {
  return (
    <Wrapper>
      <div className="coolzyte_tm_main_title">
        <div className="title">
          <h3>
            {name}
            <span className="bg">{title}</span>
          </h3>
        </div>
      </div>
    </Wrapper>
  );
};

export default SectionTitle;
