import { motion } from "framer-motion"
import { TranslateWriteUp } from "../components/Translate"
import { TranslateDashboard } from "../components/TranslateDashboard"
import { AiOutlineAudio } from "react-icons/ai"
import { LuScrollText } from "react-icons/lu";
import { GiSoundWaves } from "react-icons/gi";



export const Translator = () =>{
    return(
        <motion.div 
        className="h-full w-full flex flex-col justify-between p-4"
        initial={{opacity:0}}
        animate={{opacity:1}}
        exit={{opacity:0}}
        >
            <TranslateWriteUp/>
            <div className="w-full flex justify-around mb-8">
                <TranslateDashboard icon={<LuScrollText />} text={"Translate written text quickly and accurately between languages."} title={"Text to Text"} color={"#daf4fe"}/>
                <TranslateDashboard icon={<AiOutlineAudio />} text={"Convert spoken words into precise text effortlessly."} title={"Audio to Text"} color={"#f8e5ce"}/>
                <TranslateDashboard icon={<GiSoundWaves />} text={"Extract subtitles or transcriptions from videos seamlessly."} title={"Video to Text"} color={"#f8e3f8"}/>
            </div>
        </motion.div>
    )
}