import { IoBookOutline } from "react-icons/io5";
import { LuBook } from "react-icons/lu";
import { CiBookmark } from "react-icons/ci";
import { SiGoogletranslate } from "react-icons/si";
import { CiSettings } from "react-icons/ci";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

export const Nav = () => {
  return (
    <div className="md:w-[18%] w-[14%] fixed h-[100dvh] md:h-[100dvh] shadow-[0px_0px_5px_#00000031]">
      <nav className="flex flex-col items-center justify-between pt-4 bg-[#FFFFFF] w-full h-full">
        <div className="text-[#6200EA] md:block hidden font-bold text-[36px]">Lexi<span className="text-[#FF5722]">Find</span></div>
        <div className="md:hidden block text-[#6200EA] font-bold text-[36px] ">L<span className="text-[#FF5722]">F</span></div>
        <div className="w-full h-[40%] mb-40">
          <ul className="flex flex-col w-full h-full justify-around items-center md:px-4">

            <li className="text-[#333333] w-full flex md:block justify-center md:px-0 text-[24px] md:text-[16px]">
              <NavLink
                to="/"
              >
                {({ isActive }) => (
                  <motion.div
                    initial={{ backgroundColor: isActive ? "#FFFFFF" : "#E0E0E0" }}
                    animate={{ backgroundColor: isActive ? "#E0E0E0" : "#FFFFFF" }}
                    transition={{ duration: 0.3 }}
                    className="flex p-2 rounded-full md:rounded-none w-[40px] md:w-full md:rounded-r-full md:items-center md:gap-1"
                  >
                    <LuBook className="md:text-[18px] " />
                    <span className="hidden md:block">Find word</span>
                  </motion.div>
                )}
              </NavLink>
            </li>
            <li className="text-[#333333] w-full flex md:block justify-center md:px-0 text-[24px] md:text-[16px]">
              <NavLink
                to="/translator"
              >
                {({ isActive }) => (
                  <motion.div
                    initial={{ backgroundColor: isActive ? "#FFFFFF" : "#E0E0E0" }}
                    animate={{ backgroundColor: isActive ? "#E0E0E0" : "#FFFFFF" }}
                    transition={{ duration: 0.3 }}
                    className="flex p-2 rounded-full md:rounded-none w-[40px] md:w-full md:rounded-r-full md:items-center md:gap-1"
                  >
                    <SiGoogletranslate className="md:text-[18px]" />
                    <span className="hidden md:block">Translate</span>
                  </motion.div>
                )}
              </NavLink>
            </li>
            <li className="text-[#333333] w-full flex md:block justify-center md:px-0 text-[24px] md:text-[16px]">
              <NavLink
                to="/thesaurus"
              >
                {({ isActive }) => (
                  <motion.div
                    initial={{ backgroundColor: isActive ? "#FFFFFF" : "#E0E0E0" }}
                    animate={{ backgroundColor: isActive ? "#E0E0E0" : "#FFFFFF" }}
                    transition={{ duration: 0.3 }}
                    className="flex p-2 rounded-full md:rounded-none w-[40px] md:w-full md:rounded-r-full md:items-center md:gap-1"
                  >
                    <IoBookOutline className="md:text-[18px]" />
                    <span className="hidden md:block">Thesaurus</span>
                    
                  </motion.div>
                )}
              </NavLink>
            </li>
            <li className="text-[#333333] w-full flex md:block justify-center md:px-0 text-[24px] md:text-[16px]">
              <NavLink
                to="/bookmarks"
              >
                {({ isActive }) => (
                  <motion.div
                    initial={{ backgroundColor: isActive ? "#FFFFFF" : "#E0E0E0" }}
                    animate={{ backgroundColor: isActive ? "#E0E0E0" : "#FFFFFF" }}
                    transition={{ duration: 0.3 }}
                    className="flex p-2 rounded-full md:rounded-none w-[40px] md:w-full md:rounded-r-full md:items-center md:gap-1"
                  >
                    <CiBookmark className="md:text-[18px]" />
                    <span className="hidden md:block">Bookmarks</span>
                    
                  </motion.div>
                )}
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="w-full h-[10%]">
          <ul className="flex flex-col w-full h-full justify-center md:pl-7 md:pr-4">
            <li className="text-[#333333] w-full px-[0.3rem] md:px-0 text-[24px] md:text-[16px]">
              <a href="" className="flex p-2 md:items-center md:gap-1"><CiSettings className="text-[24px]" /> <span className="hidden md:block" >Settings</span></a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};
