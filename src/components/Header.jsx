import React, { useState } from "react";
import Logo from "../assets/pixelcut-export.png";
import Sports from "../assets/basketball.png";
import Categories from "../assets/category.png";
import Latest from "../assets/glitter.png";
import Trending from "../assets/trending-topic.png";
import Top100 from "../assets/winner.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <header className="bg-black">
        <nav className="bg-gradient-to-r from-[#d1d1d1] to-[#757575] px-10 py-3 rounded-b-[30px] md:flex items-center justify-center flex-col ">
          <div className="flex items-center justify-between">
            <img src={Logo} className="h-[65px]" alt="Logo" />
            
            {/* Hamburger Button - Visible only on mobile */}
            <button 
              className="md:hidden focus:outline-none"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              <div className="space-y-2">
                <span className="block w-8 h-0.5 bg-black"></span>
                <span className="block w-8 h-0.5 bg-black"></span>
                <span className="block w-8 h-0.5 bg-black"></span>
              </div>
            </button>
          </div>

          {/* Menu Items */}
          <div 
            className={`${
              isMenuOpen ? 'block' : 'hidden'
            } md:flex md:items-center list-none gap-10 text-[17px] mt-2 hover:cursor-pointer`}
          >
            <ul className="flex flex-col md:flex-row gap-6 md:gap-10">
              <li className="flex items-center gap-2">
                <img className="h-6" src={Latest} alt="Latest" /> Latest
              </li>
              <li className="flex items-center gap-2">
                <img className="h-6" src={Trending} alt="Trending" /> Trending
              </li>
              <li className="flex items-center gap-2">
                <img className="h-5" src={Top100} alt="Top 100" /> Top 100
              </li>
              <li className="flex items-center gap-2">
                <img className="h-6" src={Sports} alt="Sports" /> Sports
              </li>
              <li className="flex items-center gap-2">
                <img className="h-5" src={Categories} alt="Categories" /> Categories
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;




// import React from "react";
// import Logo from "../assets/pixelcut-export.png";
// import Sports from "../assets/basketball.png";
// import Categories from "../assets/category.png";
// import Latest from "../assets/glitter.png";
// import Trending from "../assets/trending-topic.png";
// import Top100 from "../assets/winner.png";

// const Header = () => {
//   return (
//     <div>
//       <header className="bg-black" >
//         <nav className=" bg-gradient-to-r from-[#d1d1d1] to-[#757575] flex items-center flex-col px-10  py-3 rounded-b-[30px] ">
//           <div>
//             <img src={Logo} className="h-[65px]" alt="" />
//           </div>

//           <div className="list-none flex items-center gap-10 hover:cursor-pointer text-[17px] mt-2  ">
//             <li className="flex items-center gap-2" >
//               <img className=" h-6  " src={Latest} /> Latest
//             </li>
//             <li className="flex items-center gap-2" >
//               <img className=" h-6 " src={Trending} />
//               Trending
//             </li>
//             <li className="flex items-center gap-2" >
//               <img className=" h-5 " src={Top100} />
//               Top 100
//             </li>
//             <li className="flex items-center gap-2" >
//               <img className=" h-6 " src={Sports} />
//               Sports
//             </li>
//             <li className="flex items-center gap-2" >
//               <img className=" h-5 " src={Categories} />
//               Categories
//             </li>
//           </div>
//         </nav>
//       </header>
//     </div>
//   );
// };

// export default Header;


