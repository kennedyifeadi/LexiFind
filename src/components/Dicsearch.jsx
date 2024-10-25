import { useState, useEffect } from 'react';

export const SearchWord = () => {
  // Array of placeholder texts
  const placeholderTexts = ["Search word...", "Search phrase...", "Search idiom..."];
  
  // State to track the current placeholder index
  const [currentPlaceholder, setCurrentPlaceholder] = useState(0);
  const [isFading, setIsFading] = useState(false); // Control fading effect

  useEffect(() => {
    const changePlaceholder = () => {
      // Trigger fade-out animation
      setIsFading(true);
      
      setTimeout(() => {
        // After fade-out, change the placeholder text
        setCurrentPlaceholder((prevIndex) => (prevIndex + 1) % placeholderTexts.length);
        
        // Trigger fade-in animation
        setIsFading(false);
      }, 500); // 500ms fade-out duration
    };

    // Change the placeholder every 3 seconds
    const intervalId = setInterval(changePlaceholder, 3000);

    return () => clearInterval(intervalId); // Clean up the interval on component unmount
  });

  return (
    <div>
      <div className="w-full px-4 h-max flex gap-4">
        {/* Input field */}
        <input
          type="text"
          name="searchWord"
          className="w-[80%] h-[50px] border-2 outline-none border-[#6200EA] px-4 italic rounded-full"
          placeholder={placeholderTexts[currentPlaceholder]}
          style={{
            transition: 'color 0.5s ease', // Smooth transition for text color (for effect)
            color: isFading ? 'transparent' : 'black' // Fade out/in placeholder by changing color
          }}
        />
        
        {/* Search button */}
        <button className="px-2 rounded-full text-white bg-[#FF5722] text-[20px] w-[12%]">Search</button>
      </div>
    </div>
  );
};
