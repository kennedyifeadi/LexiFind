import { useState, useEffect, useCallback, useRef } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Player } from "@lottiefiles/react-lottie-player";
import axios from "axios";

export const SearchWord = () => {
  const [searchParams] = useSearchParams();
  const searchWord = searchParams.get("q") || "";
  const [word, setWord] = useState("");
  const navigate = useNavigate();
  const [definitions, setDefinitions] = useState([]);
  const [transcriptions, setTranscriptions] = useState([]);
  const [examples, setExamples] = useState([]);
  const [audio, setAudio] = useState([]);
  const [wordExist, setWordExist] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const audioRef = useRef(null); // Reference for the audio element

  const handleChange = (e) => {
    setWord(e.target.value);
    navigate(`/?q=${e.target.value}`, { replace: true });
  };
  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  const fetchDictionary = async (query) => {
    try {
      const response = await axios.get(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${searchWord}`
      );
      await sleep(1000);
      setIsLoading(false);
      const wordDefinitions = response.data.flatMap((entry) =>
        entry.meanings.flatMap((meaning) =>
          meaning.definitions.map((def) => ({
            definition: def.definition,
            partOfSpeech: meaning.partOfSpeech,
          }))
        )
      );

      const wordExamples = response.data.flatMap((entry) =>
        entry.meanings.flatMap((meaning) =>
          meaning.definitions
            .filter((def) => def.example)
            .map((def) => ({
              example: def.example,
              partOfSpeech: meaning.partOfSpeech,
            }))
        )
      );

      const wordTranscriptions = response.data.flatMap((e) =>
        e.phonetics.map((p) => p.text)
      );
      const wordAudio = response.data.flatMap((e) =>
        e.phonetics.map((p) => p.audio)
      );

      setExamples(wordExamples.filter(Boolean));
      setAudio(wordAudio.filter(Boolean));
      setTranscriptions(wordTranscriptions.filter(Boolean));
      setDefinitions(wordDefinitions.filter(Boolean));
    } catch (error) {
      setWordExist(false);
    }
  };

  const groupedDefinitions = definitions.reduce(
    (acc, { definition, partOfSpeech }) => {
      if (!acc[partOfSpeech]) {
        acc[partOfSpeech] = [];
      }
      acc[partOfSpeech].push(definition);
      return acc;
    },
    {}
  );

  const groupedExamples = examples.reduce((acc, { example, partOfSpeech }) => {
    if (!acc[partOfSpeech]) {
      acc[partOfSpeech] = [];
    }
    acc[partOfSpeech].push(example);
    return acc;
  }, {});

  const handleSearch = useCallback(
    (e) => {
      e.preventDefault();
      if (word) {
        navigate(`/?q=${word}`, { replace: true });
        fetchDictionary(word);
        setWordExist(true);
        setIsLoading(true);
      }
    },
    [word, navigate]
  );

  const placeholderTexts = [
    "Search Word...",
    "Search Phrase...",
    "Search Idiom...",
  ];
  const [currentPlaceholder, setCurrentPlaceholder] = useState(0);

  useEffect(() => {
    const changePlaceholder = () => {
      setTimeout(() => {
        setCurrentPlaceholder(
          (prevIndex) => (prevIndex + 1) % placeholderTexts.length
        );
      }, 500);
    };

    const intervalId = setInterval(changePlaceholder, 3000);
    return () => clearInterval(intervalId);
  }, []);

  const playAudio = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  return (
    <div className="flex flex-col relative w-full overflow-y-auto md:max-h-[50%] h-max z-20">
      <div className="w-full sticky top-0 z-30  px-4 h-max flex gap-4">
        <form onSubmit={handleSearch} className="w-full h-max flex bg-white gap-4 rounded-full">
          <input
            type="text"
            name="searchWord"
            value={word}
            onChange={handleChange}
            placeholder={placeholderTexts[currentPlaceholder]}
            className={`w-[70%] md:w-[90%] h-[40px] md:h-[50px] border-2 outline-none border-[#6200EA] px-4 italic rounded-full `}
          />
          <button className="rounded-full ease-in-out flex items-center outline-none active:scale-90 justify-center text-white cursor-pointer duration-300 bg-[#FF5722] h-[40px] md:h-[50px] text:[18px] md:text-[20px] w-[30%] md:w-[12%]">
            Search
          </button>
        </form>
      </div>
      <div className="w-full h-max md:max-h-[300px] md:h-[300px] flex md:flex-row flex-col ">
        <div className="flex-1 flex flex-col h-max md:h-[300px] p-4 md:before:w-[2px] md:before:h-[80%] relative md:before:absolute md:before:top-[5%] md:before:right-0 md:before:bg-[#e7d6de] ">
          <div className="flex w-full justify-between sticky top-0 items-center">
            <h1 className="font-bold text-[18px] flex justify-center items-center gap-2 capitalize">
              {wordExist ? (
                word || "Word"
              ) : (
                <span className="text-[red]">{word}</span>
              )}
              <svg
                onClick={playAudio}
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
              <audio ref={audioRef} src={audio[0]} className="hidden" />
            </h1>
            <span className="text-[16px] h-[30px] border-2 border-[#6200EA] flex justify-center items-center px-2 py-1 italic rounded-full">
              {isLoading ? (
                wordExist ? (
                  <div className="flex justify-center items-center w-full h-full">
                    <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-[#6200EA]"></div>
                  </div>
                ) : (
                  <span className=" text-[red] italic"># not found #</span>
                )
              ) : wordExist ? (
                transcriptions && transcriptions.length > 0 ? (
                  <span># {transcriptions[0]} #</span>
                ) : (
                  "/##/"
                )
              ) : (
                <span className=" text-[red] italic"># not found #</span>
              )}
            </span>
          </div>
          <div
            className={`flex flex-col h-max w-full gap-5 ${
              isLoading ? "overflow-hidden" : "overflow-y-auto"
            }`}
          >
            {isLoading ? (
              wordExist ? (
                <Player
                  src="https://lottie.host/9f110dcf-ff4f-4cd9-8c1b-e6f3b8a78983/GzKZe7Tgo3.json"
                  background="transparent"
                  speed={1}
                  loop
                  autoplay
                  className="w-[200px] h-[200px] mx-auto"
                />
              ) : (
                <span className=" flex justify-center items-center font-bold capitalize">
                  Oops! word not found, this is mostly caused by network error or wrong spelling
                </span>
              )
            ) : wordExist ? (
              Object.entries(groupedDefinitions).map(([partOfSpeech, defs]) => (
                <div key={partOfSpeech}>
                  <h3 className="font-semibold mt-4">
                    {partOfSpeech.charAt(0).toUpperCase() +
                      partOfSpeech.slice(1)}
                  </h3>
                  {defs.map((definition, index) => (
                    <div key={index}>
                      <p>
                        {defs.length > 1 ? (
                          <span className="text-[#6200EA] text-[20px]">•</span>
                        ) : (
                          ""
                        )}
                        {definition}
                      </p>
                      {index < defs.length - 1 && <hr />}
                    </div>
                  ))}
                </div>
              ))
            ) : (
              <span className="text-[red] flex justify-center items-center font-bold capitalize">
                Oops! word not found, this is mostly caused by network error or wrong spelling

              </span>
            )}
            <span className="hidden italic text-[15px] text-[#6200EA] md:flex justify-end items-center w-full h-max">
              <span className="font-bold ">• </span> latin origin{" "}
              <span className="font-bold"> •</span>
            </span>
          </div>
        </div>
        <div className="flex-1 h-max md:h-[300px] flex flex-col p-4">
          <div className="flex justify-between w-full">
            <h1 className="text-[18px] font-bold">Use Case</h1>
            <span className="text-[16px] h-[30px] flex justify-center items-center border-2 border-[#6200EA] py-1 px-2 rounded-full">
              Verb{" "}
            </span>
          </div>
          <div className="flex flex-col w-full h-max mt-4 overflow-y-auto">
            {isLoading ? (
              wordExist ? (
                <Player
                  src="https://lottie.host/9f110dcf-ff4f-4cd9-8c1b-e6f3b8a78983/GzKZe7Tgo3.json"
                  background="transparent"
                  speed={1}
                  loop
                  autoplay
                  className="w-[200px] h-[200px] mx-auto"
                />
              ) : (
                <span className=" flex justify-center items-center font-bold capitalize">
                  Oops! word not found, this is mostly caused by network error or wrong spelling

                </span>
              )
            ) : wordExist ? (
              Object.entries(groupedExamples).map(
                ([partOfSpeech, examples]) => (
                  <div key={partOfSpeech}>
                    <h3 className="font-bold text-lg">{partOfSpeech}</h3>
                    <ul className="pl-4">
                      {examples.map((example, index) => (
                        <li key={index}>
                          <span className="font-bold">•</span> {example}
                          <hr className="my-2 border-gray-300" />
                        </li>
                      ))}
                    </ul>
                  </div>
                )
              )
            ) : (
              <span className=" flex justify-center items-center font-bold capitalize">
                Oops! examples not found, this is mostly caused by network error or wrong spelling

              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
