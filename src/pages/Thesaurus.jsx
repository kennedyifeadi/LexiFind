import { motion } from "framer-motion"
import { Player } from '@lottiefiles/react-lottie-player';


export const Thesaurus = () =>{
    return (
      <motion.div
        className="h-full w-full flex flex-col"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        ewgergergreg
        <Player
      src="https://lottie.host/9f110dcf-ff4f-4cd9-8c1b-e6f3b8a78983/GzKZe7Tgo3.json"
      background="transparent"
      speed={1}
      style={{ width: '300px', height: '300px' }}
      loop
      autoplay
    />
      </motion.div>
    );
}