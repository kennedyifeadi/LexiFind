import { IoBookOutline } from "react-icons/io5";
import { LuBook } from "react-icons/lu";
import { CiBookmark } from "react-icons/ci";
import { SiGoogletranslate } from "react-icons/si";
import { CiSettings } from "react-icons/ci";

export const Nav = () =>{
    return(
        <div className="w-[18%] h-full shadow-[0px_0px_5px_#00000031]">
            <nav className="flex flex-col items-center justify-between pt-4 bg-[#FFFFFF] w-full h-full ">
                <div className="text-[#6200EA] font-bold text-[36px]">Lexi<span className="text-[#FF5722]">Find</span></div>
                <div className="w-full h-[40%] mb-40 ">
                    <ul className="flex flex-col w-full h-full justify-around px-4 ">
                        <li className="text-[#333333] text-[16px]"><a href="" className="flex p-2 bg-[#E0E0E0] rounded-r-full md:items-center md:gap-1"><LuBook className="text-[18px]" /> Find word</a></li>
                        <li className="text-[#333333] text-[16px]"><a href="" className="flex p-2 md:items-center md:gap-1"><SiGoogletranslate className="text-[18px]" /> Translate</a></li>
                        <li className="text-[#333333] text-[16px]"><a href="" className="flex p-2 md:items-center md:gap-1"><IoBookOutline className="text-[18px]" /> Thesaurus</a></li>
                        <li className="text-[#333333] text-[16px]"><a href="" className="flex p-2 md:items-center md:gap-1"><CiBookmark className="text-[18px]" /> Bookmarks</a></li>
                    </ul>
                </div>
                <div className="w-full h-[10%]">
                    <ul className="flex flex-col w-full h-full justify-center pl-7 pr-4 ">
                        <li className="text-[#333333] text-[15px]">
                            <a href="" className="flex p-2 md:items-center md:gap-1"><CiSettings className="text-[24px]" /> Settings</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}
