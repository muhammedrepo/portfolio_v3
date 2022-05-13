import { Link } from "react-scroll";
const data = [
  {
    id: 1,
    text: "Home",
    url: "home",
  },
  {
    id: 2,
    text: "About",
    url: "about",
  },
  {
    id: 3,
    text: "Projects",
    url: "projects",
  },

  {
    id: 4,
    text: "Contact",
    url: "contact",
  },
];

const tempLinks = data.map((link) => {
  return (
    <li key={link.id} className="current">
      <Link
        className="text-black font-semibold relative overflow-hidden inline-block cursor-pointer"
        to={`${link.url}`}
        spy={true}
        smooth={true}
        offset={-80}
        exact="true"
        duration={1000}
      >
        <span className="first">{link.text}</span>
        <span className="second">{link.text}</span>
      </Link>
    </li>
  );
});
// I KNOW WE CAN COMBINE IT !!!!!

export default () => {
  return <ul className="m-0 relative top-1">{tempLinks}</ul>;
};
