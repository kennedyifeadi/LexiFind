import { motion } from "framer-motion"
import { TranslateWriteUp } from "../components/Translate"
import { TranslateDashboard } from "../components/TranslateDashboard"
import { AiOutlineAudio } from "react-icons/ai"
import { LuScrollText } from "react-icons/lu";
import { GiSoundWaves } from "react-icons/gi";
import { useContext, useState } from "react";
import { TranslateContext } from "../context/TranslateContext";
import { DashboardContext } from "../context/DashboardContext";
import {AudioToText} from "../components/translatorCards/AudioToText"
import {TextToText} from "../components/translatorCards/TextToText"
import {TextToSpeech} from "../components/translatorCards/TextToSpeech"
export const Translator = () =>{
    const {isClicked, setIsClicked} = useContext(TranslateContext)
    const {id} = useContext(DashboardContext)
    const handleClick = () =>{
        setIsClicked(!isClicked);
    }
    const comp = (id)=>{
        switch (id) {
            case 0:
                return <TextToText/>
            case 1:
                return <AudioToText/>
            case 2:
                return <TextToSpeech/> 
        }
    }
    const translateObject = [{
        title: "Text to Text",
        text: "Translate written text quickly and accurately between languages.",
        icon: <LuScrollText />,
        color:"#daf4fe"
    },
{
        title: "Audio to Text",
        text: "Convert spoken words into precise text effortlessly.",
        icon: <AiOutlineAudio />,
        color:"#f8e5ce"
},{
        title: "Text to Speech",
        text: "Extract subtitles or transcriptions from videos seamlessly.",
        icon: <GiSoundWaves />,
        color:"#f8e3f8"
}
]
    return(
        <motion.div 
        className="h-full w-full flex flex-col md:justify-between p-4 gap-10 relative"
        initial={{opacity:0}}
        animate={{opacity:1}}
        exit={{opacity:0}}
        >
            <TranslateWriteUp/>
            <div className="w-full flex md:flex-row flex-col justify-around gap-4 px-6">
                {translateObject.map((dashboard, index)=>{
                    return (
                            <TranslateDashboard key={index} ids={index} icon={dashboard.icon} text={dashboard.text} title={dashboard.title} color={dashboard.color}/>
                        
                    )
                }) }
            </div>
            <div className={`w-[100dvw] h-[100dvh] flex absolute bg-transparent top-0 z-40 duration-1000 ease-in-out ${isClicked ? 'right-0' : 'right-[-100dvw]'}`}>
                <div className="bg-[#80808000] w-[45%]" onClick={handleClick}></div>
                <div className="bg-white w-[55%] rounded-tl-[2rem] shadow-md rounded-bl-[2rem]">
                    {comp(id)}
                </div>
            </div>
        </motion.div>
    )
}