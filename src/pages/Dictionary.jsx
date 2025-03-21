import { Greetings } from "../components/Greetings"
import { SearchWord } from "../components/Dicsearch"
import { Player } from '@lottiefiles/react-lottie-player';
import { motion } from "framer-motion"
import { Dailyword } from "../components/Dailyword";


export const Dictionary = () => {
    return (
        <motion.div
            className="h-full w-full flex flex-col relative"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <Player
                src="https://lottie.host/06d55fb4-2388-487c-b58b-ee52d64a63f5/e1dQ6BCtTX.json"
                background="transparent"
                speed={1}
                loop
                autoplay
                className="absolute top-[-150px] md:top-[-200px] md:w-[100%] md:h-[100%] border right-[-30px] md:right-[-300px] w-[50%] h-[45%] "
            />
            <Greetings />
            <Dailyword />
            <SearchWord />
        </motion.div>
    )
}