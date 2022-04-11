import { Wrapper } from "./SectionTitleStyles";

const SectionTitle = ({ name, title }: { name: any; title: any }) => {
  return (
    <Wrapper>
      <div className="coolzyte_tm_main_title w-full h-auto clear-both flex items-center justify-between">
        <div className="title">
          <h3 className="relative uppercase font-extrabold text-4xl text-black">
            {name}
            <span className="absolute left-0 top-0 text-transparent text-[150px] font-semibold opacity-[.1] leading-none bg">
              {title}
            </span>
          </h3>
        </div>
      </div>
    </Wrapper>
  );
};

export default SectionTitle;
