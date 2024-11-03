import axios from 'axios'
import { useEffect, useState } from 'react';

export const Dailyword = () =>{
    const [randomWord, setRandomWord] = useState("");
    const [wordMeaning, setWordMeaning] = useState("");

        useEffect(() => {
            const runRandomWord = async ()=>{
                const now = new Date(); 
                const lastRun = localStorage.getItem("lastRun");
                const lastRunDate = lastRun ? new Date(lastRun) : null;
                const storedWord = localStorage.getItem('word');
                if (storedWord) {
                    setRandomWord(storedWord);
                }


                if(!lastRunDate || (now - lastRunDate) >=  60000){
                        try {
                            const response = await axios.get("https://random-word-api.herokuapp.com/word");
                            const word = response.data[0];
                            setRandomWord(word)
                            localStorage.setItem('lastRun', now);
                            localStorage.setItem('word', word);
                        } catch (error) {
                            console.log(error)
                        }
                }
            }
            runRandomWord();
        },[randomWord])


        useEffect(() => {
            const fetchWordDefinition = async ()=>{
                try {
                    const res = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${randomWord}`);
                    const definition = res.data[0].meanings[0].definitions[0].definition;
                    console.log(definition)
                    setWordMeaning(definition);
                } catch (error) {
                    console.log(error)
            }
        }
            fetchWordDefinition();
        },[randomWord])


    return(
        <div className="flex flex-col gap-2 w-full h-[20%] px-6 z-20">
            <h1 className="font-bold text-[24px]"> <span className="text-[#6200EA]">Word</span> of the <span className="text-[#FF5722]">day</span>!</h1>
            <div className="flex gap-5">
                <h1 className="font-bold text-[18px] capitalize">{randomWord}</h1>
                <span className="text-[16px] border-2 border-[#6200EA] px-2 rounded-full"># <i>/eailu/</i> #</span>
            </div>
            <div className="felx justify-center items-center w-max">
                <p className="max-w-[520px] w-max italic text-wrap break-all ">{wordMeaning}</p>
            </div>
        </div>
    )
}