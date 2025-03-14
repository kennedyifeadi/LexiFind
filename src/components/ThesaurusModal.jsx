import React, { useContext, useEffect, useState } from 'react';
import { ThesaurusDashboardContent } from './ThesaurusObject';
import { ThesaurusDashboardContext } from '../context/ThesaurusDashboardContext';
import { FaExclamationCircle } from "react-icons/fa";
import { IoFilterSharp } from "react-icons/io5";
import { CiBookmark } from "react-icons/ci";




export const ThesaurusModal = () => {
    const [inputValue, setInputValue] = useState("");
    const [noOfResults, setNoOfResults] = useState(4);
    const [inputErrorMsg, setInputErrorMsg] = useState("");
    const [termDefinition, setTermDefinition] = useState([]);
    const [termCategory, setTermCategory] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isClicked, setIsClicked] = useState(false);
    const { id, setId } = useContext(ThesaurusDashboardContext);

    const findThesaurusCard = ThesaurusDashboardContent.find((item) => item.id === id);
    const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

    const handleSelectChange = (e)=>{
        setNoOfResults(e.target.value)
    }

    const handleThesaurusClicked = () => {
        setIsClicked(false);
        setTimeout(() => setId(null), 200);
        setTermDefinition('');
        setTermCategory('');
        setInputValue('');
    };

    const handleInput = (e) => {
        setInputValue(e.target.value);
        setInputErrorMsg("");
    };
    
    const fetchThesaurusData = async () => {
        if (!findThesaurusCard) {
            console.error("Thesaurus card not found!");
            return;
        }
        if (inputValue.length === 0) {
            return setInputErrorMsg("field cannot be empty");
        }
        setIsLoading(true);
        await sleep(2000);
        setIsClicked(true);
        const { termDefinition, termCategory } = await findThesaurusCard.thesaurusFunction(inputValue, noOfResults);
        setTermDefinition(termDefinition);
        setTermCategory(termCategory);
        setIsLoading(false);
    }

    const handleClick = async (e) => {
        e.preventDefault();
       fetchThesaurusData()
    };

    useEffect(()=>{
        if(isClicked){
            fetchThesaurusData()
        }
    }, [noOfResults])

    if (!id) return null;

    return (
      <div className="absolute bg-transparent top-0 opacity-100 z-[10] duration-1000 transition-all ease-in-out right-0 w-full h-full flex justify-center items-center">
        <div
          className="w-full h-full bg-[#00000038] absolute top-0 right-0"
          onClick={handleThesaurusClicked}
        ></div>

        <div
          className={`w-[350px] duration-300 ease-in-out transition-all rounded-md z-10 bg-white shadow-md p-4 max-h-[400px] ${
            isClicked ? "h-[400px]" : "h-[200px]"
          }`}
        >
          <div className="w-full h-[5rem] flex flex-col">
            <h1 className="text-3xl font-bold w-full text-center">
              What's Your Word
            </h1>
            {findThesaurusCard && (
              <span className="text-sm w-full text-center text-gray-400">
                we'd get you your{" "}
                <span className="text-[#FF5722] font-semibold">
                  {findThesaurusCard.Title}
                </span>{" "}
                before you can spell your name
              </span>
            )}
          </div>
          <div className="w-full h-[40px] mt-4">
            <form
              className="w-full h-full flex justify-between gap-3"
              onSubmit={handleClick}
            >
              <input
                type="text"
                className={`w-[70%] border-2 rounded-lg px-2 border-[#4e4e4e57]`}
                placeholder="enter your word..."
                onChange={handleInput}
              />
              <button className="w-[30%] h-full bg-[#6200EA] active:scale-75 duration-300 rounded-md font-semibold text-white px-2">
                {isLoading ? (
                  <div
                    className={` ${
                      isLoading ? "flex" : "hidden"
                    } justify-center items-center w-full h-full`}
                  >
                    <svg
                      aria-hidden="true"
                      className={`w-5 h-5 text-gray-200 animate-spin dark:text-[#6200EA] fill-white`}
                      viewBox="0 0 100 101"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                        fill="currentColor"
                      />
                      <path
                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                        fill="currentFill"
                      />
                    </svg>
                  </div>
                ) : (
                  "search"
                )}
              </button>
            </form>
            {inputErrorMsg && (
              <span className="text-[12px] text-gray-400 flex items-center gap-1">
                <FaExclamationCircle className="text-[#FF5722]" />
                {inputErrorMsg}
              </span>
            )}
          </div>
          <div className="w-full h-[200px] flex flex-col mt-4">
            {isClicked && (
              <div className="w-full h-full flex flex-col">
                <div className="flex w-full h-[25%] mb-4">
                  <div className="w-[70%] h-full flex flex-col">
                    <h1 className="font-semibold text-xl uppercase">
                      {inputValue}
                    </h1>
                    <span className="text-[10px] text-gray-400">
                      yh, before i forget, what's your name?
                    </span>
                  </div>
                  <div className="flex h-full w-[30%] items-center justify-end">
                    <form className="w-max flex flex-col items-end">
                      <label
                        htmlFor="noResults"
                        className="block text-[10px] font-medium text-gray-400 text-center"
                      >
                        No of Result
                      </label>
                      <div className='flex items-center gap-1.5'>
                    <IoFilterSharp className="w-4 h-4 text-[#FF5722]" />

                      <select
                        id="noResults"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none block w-[40px] p-1"
                        value={noOfResults}
                        onChange={handleSelectChange}
                      >
                        <option value={4}>4</option>
                        <option value={5}>5</option>
                        <option value={6}>6</option>
                        <option value={7}>7</option>
                        <option value={8}>8</option>
                      </select>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="w-full overflow-auto h-[75%] flex flex-col gap-1">
                  {termDefinition && termDefinition.length > 0 && !isLoading
                    ? termDefinition.map((term, index) => {
                        return (
                          <div
                            key={index}
                            className="w-full h-[50px] flex justify-between items-center p-1 border rounded-md"
                          >
                            <span className="font-medium text-[13px]">{term}</span>
                            <div className='flex items-center'>
                            <span className="text-[#6200EA] lowercase text-[9px] rounded-full px-1 border">
                              {termCategory[index]}
                            </span>
                            <span className='text-[#FF5722] text-[15px] cursor-pointer'>
                            <CiBookmark />
                            </span>
                            </div>
                          </div>
                        );
                      })
                      : !isLoading && termDefinition.length === 0 ? (
                        <p className="text-gray-500 text-center">Not Found</p>
                      ) : null
                      }
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
};
