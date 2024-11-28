import { AiOutlineAudio } from "react-icons/ai";

import { motion } from "framer-motion"
import { TranslateWriteUp } from "../components/Translate"
import { TranslateDashboard } from "../components/translateDashboard"

export const Translator = () =>{
    return(
        <motion.div 
        className="h-full w-full flex flex-col justify-between p-4"
        initial={{opacity:0}}
        animate={{opacity:1}}
        exit={{opacity:0}}
        >
            <TranslateWriteUp/>
            <div className="w-full flex justify-around mb-4">
            <TranslateDashboard icon={<AiOutlineAudio />} text={"is workkiing"} title={"text to audio"}/>
            <TranslateDashboard icon={<AiOutlineAudio />} text={"is workkiing"} title={"text to audio"}/>
            <TranslateDashboard icon={<AiOutlineAudio />} text={"is workkiing"} title={"text to audio"}/>
            </div>
        </motion.div>
    )
}