import { useState, useEffect, useCallback } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import axios from 'axios';

export const SearchWord = () => {
  const [searchParams] = useSearchParams();
  const searchWord = searchParams.get('q') || '';
  const [word, setWord] = useState("");
  const navigate = useNavigate();
  const [definitions, setDefinitions] = useState([]);
  const [transcriptions, setTranscriptions] = useState([]);
  const [examples, setExamples] = useState([]);
  const [partOfSpeech, setPartOfSpeech] = useState([]);
  const [audio, setAudio] = useState([]);


        useEffect(() => {
          console.log(definitions) 
          console.log(examples)
          console.log(audio)
          console.log(partOfSpeech)
        }, [definitions, examples, audio, partOfSpeech])
        useEffect(() => {console.log(transcriptions)}, [transcriptions])

  const handleSearch = useCallback((e) => {
    e.preventDefault();
    if (word) {
      navigate(`/?q=${word}`, { replace: true });
    }
  }, [word, navigate]);

  // useEffect(()=> console.log(searchWord), [searchWord])
  

const handleChange = (e) =>{
  setWord(e.target.value)
  navigate(`/?q=${e.target.value}`, { replace: true });
}




  useEffect(() => {
    const fetchDictionary = async () => {
      try {
        const response = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/beautiful`);

        const wordDefinitions = response.data.flatMap(entry => 
          entry.meanings.flatMap(meaning => 
            meaning.definitions.map(def => def.definition)
          )
        );

        const wordTranscriptions = response.data.flatMap(e =>(e.phonetics.map(p => p.text)));
        const wordExamples = response.data.flatMap(e => (e.meanings.flatMap(m => m.definitions.map(d => d.example))));
        const wordAudio = response.data.flatMap(e => (e.phonetics.map(p => p.audio)));
        const partOfSpeech = response.data.flatMap(e => (e.meanings.map(m => m.partOfSpeech)));

        setExamples(wordExamples);
        setAudio(wordAudio);
        setPartOfSpeech(partOfSpeech);
        setTranscriptions(wordTranscriptions);
        setDefinitions(wordDefinitions)


      } catch (error) {
        console.error(error);
        
      }
    };
    fetchDictionary();
  }, [searchWord]);





  // Array of placeholder texts
  const placeholderTexts = ["Search Word...", "Search Phrase...", "Search Idiom..."];
  
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

  return (
    <div className="flex flex-col w-full max-h-[50%] h-max z-20">
      <div className="w-full px-4 h-max flex gap-4">
        <form onSubmit={handleSearch} className='w-full px-4 h-max flex gap-4'>
        <input
          type="text"
          name="searchWord"
          value={word}
          onChange={handleChange}
          placeholder={placeholderTexts[currentPlaceholder]}
          className={`w-[80%] h-[50px] border-2 outline-none border-[#6200EA] px-4 italic rounded-full `}
        />

        <button className="rounded-full flex items-center  justify-center text-white cursor-pointer hover:shadow-[0px_0px_5px_#0000008a] duration-500 bg-[#FF5722] h-[50px] text-[20px] w-[12%]">
          Search
        </button>
        </form>
      </div>
      <div className="w-full max-h-[300px] h-[300px] flex ">
        <div className="flex-1 flex flex-col h-[300px] p-4 before:w-[2px] before:h-[80%] relative before:absolute before:top-[5%] before:right-0 before:bg-[#e7d6de] ">
          <div className='flex w-full justify-between items-center'>
            <h1 className='font-bold text-[18px] flex justify-center items-center gap-2'> Word
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-5 text-[#6200EA] cursor-pointer"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.114 5.636a9 9 0 0 1 0 12.728M16.463 8.288a5.25 5.25 0 0 1 0 7.424M6.75 8.25l4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z"
              />
            </svg>
            </h1>
            <span className='text-[16px] border-2 border-[#6200EA] px-2 py-1 italic rounded-full'>#/ euile /#</span>
          </div>
          <div className='flex flex-col h-max w-full mt-4'>
            <p>
            This method is excellent for high-quality, interactive animations and is generally more efficient than embedding complex animations directly as video or GIF files.
            </p>
            <span className='italic text-[15px] text-[#6200EA] flex justify-end items-center w-full h-max'> <span className='font-bold '>• </span> latin origin <span className='font-bold'> •</span></span>
          </div>
        </div>
        <div className="flex-1 h-[300px] p-4">
          <div className="flex justify-between w-full">
            <h1 className='text-[18px] font-bold'>Use Case</h1>
            <span className='text-[16px] border-2 border-[#6200EA] py-1 px-2 rounded-full'>Verb </span>
          </div>
          <div className="flex flex-col w-full h-max mt-4">
            <ul>
              <li>
                <span className='font-bold'>•</span> This method is excellent for high-quality, interactive animations and is generally more efficient than embedding complex animations directly as video or GIF files.
              </li>
              <li>
                <span className='font-bold'>•</span> This method is excellent for high-quality, interactive animations and is generally more efficient than embedding complex animations directly as video or GIF files.
              </li>
              <li>
                <span className='font-bold'>•</span> This method is excellent for high-quality, interactive animations and is generally more efficient than embedding complex animations directly as video or GIF files.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
