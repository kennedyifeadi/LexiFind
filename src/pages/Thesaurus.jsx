import { motion } from "framer-motion"
import { ThesaurusDashboard } from "../components/ThesaurusDashboard";
import { FaEquals, FaBalanceScale, FaVolumeUp, FaSpellCheck, FaFont, FaBookOpen, FaCommentDots, FaAsterisk } from "react-icons/fa";
import { useContext, useEffect, useState } from "react";
import { ThesaurusContext } from "../context/thesaurusContext";
import { ThesaurusDashboardContext } from "../context/ThesaurusDashboardContext";



export const Thesaurus = () =>{
  const {isThesaurusClicked, setIsThesaurusClicked} = useContext(ThesaurusContext)
  const {thesaurusTitle} = useContext(ThesaurusDashboardContext)
  const handleThesaurusClicked = ()=>{
    setIsThesaurusClicked(!isThesaurusClicked)
  }
  const ThesaurusDashboardContent = [
    {
      Title: "Synonyms",
      text: "Words with similar meanings (e.g., happy & joyful).",
      icon: <FaEquals />,
      color: "#daf4fe",
      thesaurusFunction(){
        console.log("synonyms")
        return "synonyms"
      }
    },
    {
      Title: "Antonyms",
      text: "Words with opposite meanings (e.g., hot & cold).",
      icon: <FaBalanceScale />,
      color: "#f8e5ce",
      thesaurusFunction(){
        console.log("antonyms")
        return "antonyms"
      }
    },
    {
      Title: "Homophones",
      text: "Words that sound alike but have different meanings and spellings (e.g., bare & bear).",
      icon: <FaVolumeUp />,
      color: "#f8e3f8",
      thesaurusFunction(){
        console.log("homophones")
        return "homophones"
      }
    },
    {
      Title: "Homonyms",
      text: "Words that have the same spelling and pronunciation but different meanings (e.g., bat [an animal] & bat [used in sports]).",
      icon: <FaSpellCheck />,
      color: "#e8f7da",
      thesaurusFunction(){
        console.log("homonyms")
        return "homonyms"
      }
    },
    {
      Title: "Homographs",
      text: "Words that are spelled the same but have different pronunciations and meanings (e.g., lead [to guide] & lead [a type of metal]).",
      icon: <FaFont />,
      color: "#fdeed9",
      thesaurusFunction(){
        console.log("homographs")
        return "homographs"
      }
    },
    {
      Title: "Parts of Speech",
      text: "Categories of words based on their function in a sentence (e.g., noun, verb, adjective).",
      icon: <FaBookOpen />,
      color: "#e3e3fa",
      thesaurusFunction(){
        console.log("parts of speech")
        return "parts of speech"
      }
    },
    {
      Title: "Figures of Speech",
      text: "Expressions that go beyond literal meaning (e.g., simile, metaphor, personification).",
      icon: <FaCommentDots />,
      color: "#fbe5e5",
      thesaurusFunction(){
        console.log("figures of speech")
        return "figures of speech"
      }
    },
    {
      Title: "Acronyms",
      text: "Words formed from the first letters of a phrase (e.g., NASA – National Aeronautics and Space Administration).",
      icon: <FaAsterisk />,
      color: "#d9f7f7",
      thesaurusFunction(){
        console.log("acronyms")
        return "acronyms"
      }
    },
  ];
    return (
      <motion.div
        className="h-full w-full flex flex-col p-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div className="w-full h-[30%]">
          <h1 className="font-bold text-5xl">
            Thesaurus
          </h1>
          <p className="text-[gray] text-[15px]"> Get top-notch thesaurus with the help of our assistive AI</p>
        </div>
        <div className="w-full h-[70%] flex flex-wrap justify-between gap-4">
          {
            ThesaurusDashboardContent.map((Dashboard, index)=>{
              return(
                <ThesaurusDashboard key={index} Title={Dashboard.Title} text={Dashboard.text} icon={Dashboard.icon} color={Dashboard.color} ids={index} thesaurusFunction={Dashboard.thesaurusFunction}/>
              )
            })
          }
          {/* 1. synomymes 2. anthonmys 3. parts of Speech 4. figure of speech 5. homophones 6. homonyms 7. homographs 8. plindromes */}
        </div>
        <div className={`absolute bg-transparent ${isThesaurusClicked ? "top-0 opacity-100 z-[10]" : "top-8 opacity-0 z-[-10]"} duration-700 transition-all ease-in-out right-0 w-[100dvw] h-[100dvh] flex justify-center items-center`}>
        <div className="w-full h-full bg-[#00000038] absolute top-0 right-0" onClick={handleThesaurusClicked}></div>

          <div className="w-[350px] h-max rounded-md z-10 bg-white shadow-md p-4 max-h-[500px]">
            <div className="w-full h-[5rem] flex flex-col">
              <h1 className="text-3xl font-bold w-full text-center">What's Your Word</h1>
              <span className="text-sm w-full text-center text-gray-400">we'd get you your <span className="text-[#FF5722] font-semibold">{thesaurusTitle}</span> before you can spell your name</span>
            </div>
            <div className="w-full h-[40px] mt-4">
              <form action="" className="w-full h-full flex justify-between gap-3">
                <input type="text" className="w-[70%] border-[#4e4e4e57] border-2 rounded-lg"/>
                <button className=" w-[30%] h-full bg-[#6200EA] active:scale-75 duration-300 rounded-md font-semibold text-white px-2">
                  search
                </button>
              </form>
            </div>
          </div>
        </div>
      </motion.div>
    );
}