import { motion } from "framer-motion"
import { ThesaurusDashboard } from "../components/ThesaurusDashboard";
import { ThesaurusModal } from "../components/ThesaurusModal";
import { ThesaurusDashboardContent } from "../components/ThesaurusObject";



export const Thesaurus = () =>{

    return (
      <motion.div
        className="h-full w-full flex flex-col p-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div className="w-full h-[30%]">
          <h1 className="font-bold text-5xl">
            Thesaurus
          </h1>
          <p className="text-[gray] text-[15px]"> Get top-notch thesaurus with the help of our assistive AI</p>
        </div>
        <div className="w-full h-[70%] flex flex-wrap justify-between gap-4">
          {
            ThesaurusDashboardContent.map((Dashboard, index)=>{
              return(
                <ThesaurusDashboard key={index} Title={Dashboard.Title} text={Dashboard.text} icon={Dashboard.icon} color={Dashboard.color} id={Dashboard.id} thesaurusFunction={Dashboard.thesaurusFunction}/>
              )
            })
          }
          {/* 1. synomymes 2. anthonmys 3. parts of Speech 4. figure of speech 5. homophones 6. homonyms 7. homographs 8. plindromes */}
        </div>
        <div className="w-full h-full">
          <ThesaurusModal/>
        </div>
      </motion.div>
    );
}