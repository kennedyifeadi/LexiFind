import React, { useContext, useState } from 'react'
import { ThesaurusDashboardContent } from './ThesaurusObject'
import { ThesaurusDashboardContext } from '../context/ThesaurusDashboardContext';

export const ThesaurusModal = () => {
    const [inputValue, setInputValue] = useState("")
    const [termDefinition, setTermDefinition] = useState("")
    const [termCategory, setTermCategory] = useState("")
    const {id, setId} = useContext(ThesaurusDashboardContext)
    const findThesaurusCard = ThesaurusDashboardContent.find((item) => item.id === id)
    const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

    const handleThesaurusClicked = () => {
        setId(null)
    }
    const handleInput = async (e) =>{
        setInputValue(e.target.value)
        
      }
    const handleClick = async (e) =>{
        e.preventDefault()
        await sleep(1000);
        const {termDefinition, termCategory} = await findThesaurusCard.thesaurusFunction(inputValue)
        setTermDefinition(termDefinition)
        setTermCategory(termCategory)
      }

    if (!id) return null;
    return (
      <div
        className={`absolute bg-transparent ${
          id
            ? "top-0 opacity-100 z-[10]"
            : "top-8 opacity-0 z-[-10]"
        } duration-700 transition-all ease-in-out right-0 w-full h-full flex justify-center items-center`}
      >
        <div
          className="w-full h-full bg-[#00000038] absolute top-0 right-0"
          onClick={handleThesaurusClicked}
        ></div>

        <div className="w-[350px] h-max rounded-md z-10 bg-white shadow-md p-4 max-h-[500px]">
          <div className="w-full h-[5rem] flex flex-col">
            <h1 className="text-3xl font-bold w-full text-center">
              What's Your Word
            </h1>
            <span className="text-sm w-full text-center text-gray-400">
              we'd get you your{" "}
              <span className="text-[#FF5722] font-semibold">
                {findThesaurusCard.Title}
              </span>{" "}
              before you can spell your name
            </span>
          </div>
          <div className="w-full h-[40px] mt-4">
            <form
              action=""
              className="w-full h-full flex justify-between gap-3 "
              onSubmit={handleClick}
            >
              <input
                type="text"
                className="w-[70%] border-[#4e4e4e57] border-2 rounded-lg px-2"
                placeholder="enter your word..."
                onChange={handleInput}
              />
              <button className=" w-[30%] h-full bg-[#6200EA] active:scale-75 duration-300 rounded-md font-semibold text-white px-2">
                search
              </button>
            </form>
          </div>
          <div className="w-full h-[200px] flex flex-col">
              <h1 className="text-2xl font-bold">{termDefinition}</h1>
              <p className="text-gray-400 text-[15px]">{termCategory}</p>
            </div>
          {/* {isLoading ? (
            <div className="w-full h-[200px] flex justify-center items-center">
              <div className="w-10 h-10 border-4 border-[#6200EA] rounded-full animate-spin"></div>
            </div>
          ) : (
            
          )} */}
        </div>
      </div>
    );
}
