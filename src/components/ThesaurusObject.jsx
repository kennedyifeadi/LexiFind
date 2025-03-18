import axios from "axios";
import { FaEquals, FaBalanceScale, FaVolumeUp, FaSpellCheck, FaFont, FaBookOpen, FaCommentDots, FaAsterisk } from "react-icons/fa";
export const ThesaurusDashboardContent = [
    {
      id: 1,
      Title: "Synonyms",
      text: "Words with similar meanings (e.g., happy & joyful).",
      icon: <FaEquals />,
      color: "#daf4fe",
      async thesaurusFunction(word, noOfResults){
        try {
          const url = `https://api.api-ninjas.com/v1/thesaurus?word=${word}`
          
          const response = await axios(url, {
            method: "GET",
            headers: {
              "X-Api-Key": "mklK5ygNL15766A0ipyT9g==M6FAW9UkksJgi1PI",
              "Content-Type": "application/json",
            },
          });
          if (response.data.synonyms && response.data.synonyms.length > 0) {
              const definitions = [];
              const categories = [];
              for (let i = 0; i < Math.min(noOfResults, response.data.synonyms.length); i++) {
                definitions.push(response.data.synonyms[i]);
                let word = response.data.synonyms[i]
                const wordSearch = await axios.get(
                  `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
                );
                const partOfSpeech = wordSearch.data[0].meanings[0].partOfSpeech
                categories.push(partOfSpeech);
              }
        
              return { termDefinition: definitions, termCategory: categories };
          } else {
              return { termDefinition: ["No Synonyms found."], termCategory: [""] };
          }
        } catch (error) {
          console.error("Error fetching thesaurus data:", error);
          return { termDefinition: ["Error fetching thesaurus data"], termCategory: [""] };
        }
      }
    },
    {
      id: 2,
      Title: "Antonyms",
      text: "Words with opposite meanings (e.g., hot & cold).",
      icon: <FaBalanceScale />,
      color: "#f8e5ce",
      async thesaurusFunction(word, noOfResults){
        try {
          const url = `https://api.api-ninjas.com/v1/thesaurus?word=${word}`
          
          const response = await axios(url, {
            method: "GET",
            headers: {
              "X-Api-Key": "mklK5ygNL15766A0ipyT9g==M6FAW9UkksJgi1PI",
              "Content-Type": "application/json",
            },
          });
          if (response.data.antonyms && response.data.antonyms.length > 0) {
              const definitions = [];
              const categories = [];
              for (let i = 0; i < Math.min(noOfResults, response.data.antonyms.length); i++) {
                definitions.push(response.data.antonyms[i]);
                let word = response.data.antonyms[i]
                const wordSearch = await axios.get(
                  `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
                );
                const partOfSpeech = wordSearch.data[0].meanings[0].partOfSpeech
                categories.push(partOfSpeech);
              }
        
              return { termDefinition: definitions, termCategory: categories };
          } else {
              return { termDefinition: ["No Antonyms found."], termCategory: [""] };
          }
        } catch (error) {
          console.error("Error fetching thesaurus data:", error);
          return { termDefinition: ["Error fetching thesaurus data"], termCategory: [""] };
        }
      }
    },
    {
      id: 3,
      Title: "Homophones",
      text: "Words that sound alike but have different meanings and spellings (e.g., bare & bear).",
      icon: <FaVolumeUp />,
      color: "#f8e3f8",
      async thesaurusFunction(word, noOfResults){
        try {
          const url = `https://api.datamuse.com/words?rel_hom=${word}`
          
          const response = await axios(url);
          console.log(response);
          if (response.data && response.data.length > 0) {
              const definitions = [];
              const categories = [];
              for (let i = 0; i < Math.min(noOfResults, response.data.length); i++) {
                definitions.push(response.data[i].word);
                let word = response.data[i].word
                try {
                  const wordSearch = await axios.get(
                    `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
                  );
              
                  if (wordSearch.data.length > 0) {
                    const partOfSpeech = wordSearch.data[0].meanings[0]?.partOfSpeech || "nill";
                    categories.push(partOfSpeech);
                  } else {
                    categories.push("Not Found");
                  }
                } catch (error) {
                  // If the word is not found, push "nill" to categories
                  categories.push("Not Found");
                }
              }
        
              return { termDefinition: definitions, termCategory: categories };
          } else {
              return { termDefinition: ["No Homophones found."], termCategory: [""] };
          }
        } catch (error) {
          console.error("Error fetching thesaurus data:", error);
          return { termDefinition: ["Error fetching thesaurus data"], termCategory: [""] };
        }
      }
    },
    {
      id: 4,
      Title: "Homonyms",
      text: "Words that have the same spelling and pronunciation but different meanings (e.g., bat [an animal] & bat [used in sports]).",
      icon: <FaSpellCheck />,
      color: "#e8f7da",
      async thesaurusFunction(word, noOfResults) {
        try {
          const url = `https://api.datamuse.com/words?ml=${word}`
          const response = await axios.get(url);
          const homonyms = response.data.map((item) => item.word);
          console.log(homonyms);
          if (homonyms && homonyms.length > 0) {
            const definitions = [];
            const categories = [];
            for (let i = 0; i < Math.min(noOfResults, homonyms.length); i++) {
              definitions.push(homonyms[i]);
              let word = homonyms[i]
              try {
                const wordSearch = await axios.get(
                  `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
                );
            
                if (wordSearch.data.length > 0) {
                  const partOfSpeech = wordSearch.data[0].meanings[0]?.partOfSpeech || "nill";
                  categories.push(partOfSpeech);
                } else {
                  categories.push("Not Found");
                }
              } catch (error) {
                // If the word is not found, push "nill" to categories
                categories.push("Not Found");
              }
            }
      
            return { termDefinition: definitions, termCategory: categories };
        } else {
            return { termDefinition: ["No Homonyms found."], termCategory: [""] };
        }
        }catch (error) {
          console.error("Error fetching thesaurus data:", error);
          return { termDefinition: ["Error fetching thesaurus data"], termCategory: [""] };
        }
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
