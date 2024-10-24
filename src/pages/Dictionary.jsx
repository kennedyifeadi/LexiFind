import { Greetings } from "../components/Greetings"
import { Dailyword } from "../components/Dailyword"
import { SearchWord } from "../components/Dicsearch"
import { motion } from "framer-motion"


export const Dictionary = () =>{
    return(
        <motion.div 
        className="h-full w-full flex flex-col"
        initial={{opacity:0}}
        animate={{opacity:1}}
        exit={{opacity:0}}
        >
            <Greetings />
            <Dailyword />
            <SearchWord />
        </motion.div>
    )
}