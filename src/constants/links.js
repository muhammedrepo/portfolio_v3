import React from "react";
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
      <a
        href={`#${link.url}`}
        className="text-black font-semibold relative overflow-hidden inline-block"
      >
        <span className="first">{link.text}</span>
        <span className="second">{link.text}</span>
      </a>
    </li>
  );
});
// I KNOW WE CAN COMBINE IT !!!!!

export default () => {
  return <ul className="m-0 relative top-1">{tempLinks}</ul>;
};
