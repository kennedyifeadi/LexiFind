import { Greetings } from "../components/Greetings"
import { Dailyword } from "../components/Dailyword"
import { SearchWord } from "../components/Dicsearch"
import { motion } from "framer-motion"


export const Dictionary = () =>{
    return(
        <motion.div 
        className="h-full w-full flex flex-col relative"
        initial={{opacity:0}}
        animate={{opacity:1}}
        exit={{opacity:0}}
        >
            <iframe src="https://lottie.host/embed/06d55fb4-2388-487c-b58b-ee52d64a63f5/e1dQ6BCtTX.json" className="absolute top-[-150px] right-[50px] w-[50%] h-[80%] "></iframe>
            <Greetings />
            <Dailyword />
            <SearchWord />
        </motion.div>
    )
}