import { IoIosBook } from "react-icons/io";
import { FaBookAtlas } from "react-icons/fa6";
import { FaBookmark } from "react-icons/fa6";
import { MdGTranslate } from "react-icons/md";

export const Nav = () =>{
    return(
        <div className="w-full h-[70px] shadow-[0px_2px_5px_#00000065] px-5">
            <nav className="flex justify-between items-center p-4 bg-[#2c003e] w-full h-full ">
                <div className="text-[#d1c4e9] font-bold text-2xl">Lexi<span className="text-[#ffeb3b]">Find</span></div>
                <div>
                    <ul className="flex space-x-4">
                        <li className="text-[#e0e0e0]"><a href="" className="flex md:items-center md:gap-1"><FaBookAtlas /> Find word</a></li>
                        <li className="text-[#e0e0e0]"><a href="" className="flex md:items-center md:gap-1"><MdGTranslate /> Translate</a></li>
                        <li className="text-[#e0e0e0]"><a href="" className="flex md:items-center md:gap-1"><IoIosBook /> Thesaurus</a></li>
                        <li className="text-[#e0e0e0]"><a href="" className="flex md:items-center md:gap-1"><FaBookmark /> Bookmarks</a></li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}
