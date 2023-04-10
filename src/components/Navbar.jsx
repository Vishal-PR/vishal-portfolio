import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from 'react-scroll';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const menus = [
    {
      id: 1,
      menu: "home",
    },
    {
      id: 2,
      menu: "about",
    },
    {
      id: 3,
      menu: "portfolio",
    },
    {
      id: 4,
      menu: "experience",
    },
    {
      id: 5,
      menu: "contact",
    },
  ];

  return (
    <div
      className="flex justify-between items-center w-full h-20
    px-4 text-white bg-black fixed"
    >
      <h1 className="font-signature text-4xl ml-2">Vishal Pippirichetti</h1>

      <ul className="hidden md:flex">
        {menus.map(({ id, menu }) => (
          <li
            key={id}
            className="px-4 cursor-pointer capitalize font-medium
              text-gray-500 hover:scale-110 duration-200"
          >
            
            <Link to={menu} smooth duration={500}>{menu}</Link>
            {/* <Link to={menu} smooth duration={500}>{menu}</Link> */}
          </li>
        ))}
      </ul>
      <div 
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-300 md:hidden"
      >
        {nav ? <FaTimes size={35} /> : <FaBars size={35} />}
      </div>

      { nav && (<ul
        className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b 
      from-black to-gray-800 text-gray-500"
      >
        {menus.map(({ id, menu }) => (
          <li key={id} className="px-4 cursor-pointer capitalize py-6 text-4xl">
            <Link to={menu} smooth duration={500} onClick={()=> setNav(!nav)}>{menu}</Link>
          </li>
        ))}
      </ul>)}      

      {/* <ul
        className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b 
      from-black to-gray-800 text-gray-500"
      >
        {menus.map(({ id, menu }) => (
          <li key={id} className="px-4 cursor-pointer capitalize py-6 text-4xl">
            {menu}
          </li>
        ))}
      </ul> */}
    </div>
  );
};
export default Navbar