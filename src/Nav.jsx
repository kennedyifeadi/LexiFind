import { IoBookOutline } from "react-icons/io5";
import { LuBook } from "react-icons/lu";
import { CiBookmark } from "react-icons/ci";
import { SiGoogletranslate } from "react-icons/si";

export const Nav = () =>{
    return(
        <div className="w-[18%] h-full shadow-[0px_2px_5px_#00000065]">
            <nav className="flex flex-col items-center pt-4 bg-[#FFFFFF] w-full h-full ">
                <div className="text-[#6200EA] font-bold text-[36px]">Lexi<span className="text-[#FF5722]">Find</span></div>
                <div className="w-full h-[50%]  mt-8 ">
                    <ul className="flex flex-col w-full h-full justify-around pl-4 ">
                        <li className="text-[#333333] text-[24px]"><a href="" className="flex md:items-center md:gap-1"><LuBook /> Find word</a></li>
                        <li className="text-[#333333] text-[24px]"><a href="" className="flex md:items-center md:gap-1"><SiGoogletranslate /> Translate</a></li>
                        <li className="text-[#333333] text-[24px]"><a href="" className="flex md:items-center md:gap-1"><IoBookOutline /> Thesaurus</a></li>
                        <li className="text-[#333333] text-[24px]"><a href="" className="flex md:items-center md:gap-1"><CiBookmark /> Bookmarks</a></li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}
