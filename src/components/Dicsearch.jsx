import { useState, useEffect } from 'react';

export const SearchWord = () => {
  // Array of placeholder texts
  const placeholderTexts = ["Search word...", "Search phrase...", "Search idiom..."];
  
  // State to track the current placeholder index
  const [currentPlaceholder, setCurrentPlaceholder] = useState(0);

  useEffect(() => {
    const changePlaceholder = () => {
      
      setTimeout(() => {
        setCurrentPlaceholder((prevIndex) => (prevIndex + 1) % placeholderTexts.length);
        
      }, 500); // 500ms fade-out duration
    };

    // Change the placeholder every 3 seconds
    const intervalId = setInterval(changePlaceholder, 3000);

    return () => clearInterval(intervalId); // Clean up the interval on component unmount
  });
  const display = ()=>{
    console.log("displayed");
};

  return (
    <div className='flex felx-col w-full h-max z-20'>
      <div className="w-full px-4 h-max flex gap-4">

        <input
          type="text"
          name="searchWord"
          placeholder={placeholderTexts[currentPlaceholder]}
          className={`w-[80%] h-[50px] border-2 outline-none border-[#6200EA] px-4 italic rounded-full `}
        />
        
        <span className="rounded-full flex items-center justify-center text-white cursor-pointer hover:bg-[#ff5622e0] duration-500 bg-[#FF5722] h-[50px] text-[20px] w-[12%]" onClick={display}>Search</span>
      </div>
    </div>
  );
};
