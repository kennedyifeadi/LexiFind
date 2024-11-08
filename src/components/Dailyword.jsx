import axios from 'axios'
import { useEffect, useState } from 'react';
import { useWordOfDay } from '../hooks/useWordOfDay';

export const Dailyword = () =>{
    const [wordMeaning, setWordMeaning] = useState("");
    const [wordTranscription, setWordTranscrpition] = useState('');
    const {wordOfDay: randomWord} = useWordOfDay();

        useEffect(() => {
            const fetchWordDefinition = async ()=>{
                try {
                    const res = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${randomWord}`);
                    const definition = res.data[0].meanings[0].definitions[0].definition;
                    const transcription = res.data.flatMap((e) =>
                        e.phonetics.map((p) => p.text)
                      )
                    console.log(definition)
                    console.log(transcription)
                    setWordTranscrpition(transcription)
                    setWordMeaning(definition);
                } catch (error) {
                    console.log(error)
            }
        }
            fetchWordDefinition();
        },[randomWord])


    return(
        <div className="flex flex-col gap-2 w-full mb-5 h-max px-4 md:px-6 z-20">
            <h1 className="font-bold text-[18px] md:text-[24px]"> <span className="text-[#6200EA]">Word</span> of the <span className="text-[#FF5722]">day</span>!</h1>
            <div className="flex gap-5">
                <h1 className="font-bold text-[18px] capitalize">{randomWord}</h1>
                <span className="text-[16px] border-2 h-[30px] border-[#6200EA] flex justify-center items-center py-1 px-2 rounded-full"># <i>{wordTranscription[0]}</i> #</span>
            </div>
            <div className="felx justify-center items-center w-max">
                <p className="md:max-w-[620px] w-max italic text-wrap break-all ">{wordMeaning}</p>
            </div>
        </div>
    )
}