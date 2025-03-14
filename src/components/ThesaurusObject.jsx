import axios from "axios";
import { FaEquals, FaBalanceScale, FaVolumeUp, FaSpellCheck, FaFont, FaBookOpen, FaCommentDots, FaAsterisk } from "react-icons/fa";
export const ThesaurusDashboardContent = [
    {
      id: 1,
      Title: "Synonyms",
      text: "Words with similar meanings (e.g., happy & joyful).",
      icon: <FaEquals />,
      color: "#daf4fe",
      thesaurusFunction(word){
        console.log("Synomys")
        return "Synomys"
      }
    },
    {
      id: 2,
      Title: "Antonyms",
      text: "Words with opposite meanings (e.g., hot & cold).",
      icon: <FaBalanceScale />,
      color: "#f8e5ce",
      thesaurusFunction(word){
        console.log("antonyms")
        return "antonyms"
      }
    },
    {
      id: 3,
      Title: "Homophones",
      text: "Words that sound alike but have different meanings and spellings (e.g., bare & bear).",
      icon: <FaVolumeUp />,
      color: "#f8e3f8",
      thesaurusFunction(word){
        console.log("homophones")
        return "homophones"
      }
    },
    {
      id: 4,
      Title: "Homonyms",
      text: "Words that have the same spelling and pronunciation but different meanings (e.g., bat [an animal] & bat [used in sports]).",
      icon: <FaSpellCheck />,
      color: "#e8f7da",
      thesaurusFunction(word){
        console.log("homonyms")
        return "homonyms"
      }
    },
    {
      id: 5,
      Title: "Homographs",
      text: "Words that are spelled the same but have different pronunciations and meanings (e.g., lead [to guide] & lead [a type of metal]).",
      icon: <FaFont />,
      color: "#fdeed9",
      thesaurusFunction(word){
        console.log("homographs")
        return "homographs"
      }
    },
    {
      id: 6,
      Title: "Parts of Speech",
      text: "Categories of words based on their function in a sentence (e.g., noun, verb, adjective).",
      icon: <FaBookOpen />,
      color: "#e3e3fa",
      thesaurusFunction(word){
        console.log("parts of speech")
        return "parts of speech"
      }
    },
    {
      id: 7,
      Title: "Figures of Speech",
      text: "Expressions that go beyond literal meaning (e.g., simile, metaphor, personification).",
      icon: <FaCommentDots />,
      color: "#fbe5e5",
      thesaurusFunction(word){
        console.log("figures of speech")
        return "figures of speech"
      }
    },
    {
      id: 8,
      Title: "Acronyms",
      text: "Words formed from the first letters of a phrase (e.g., NASA – National Aeronautics and Space Administration).",
      icon: <FaAsterisk />,
      color: "#d9f7f7",
      async thesaurusFunction(word, noOfResults) {
        try {
          const url = `https://www.stands4.com/services/v2/abbr.php?uid=13169&tokenid=EmUL8KGWlXMfwDrT&term=${word}&format=json`;
          const response = await axios.get(url);
          console.log(response);
          if (response.data.result && response.data.result.length > 0) {
              const definitions = [];
              const categories = [];
        
              for (let i = 0; i < Math.min(noOfResults, response.data.result.length); i++) {
                definitions.push(response.data.result[i].definition);
                categories.push(response.data.result[i].category);
              }
        
              return { termDefinition: definitions, termCategory: categories };
          } else {
              return { termDefinition: ["No definition found."], termCategory: [""] };
          }
        } catch (error) {
          console.error("Error fetching thesaurus data:", error);
          return { termDefinition: ["Error fetching thesaurus data"], termCategory: [""] };
        }
      }
    },
  ];
