import axios from "axios";
import { useEffect, useState } from "react";

export const useWordOfDay = () => {
  const [randomWord, setRandomWord] = useState("");

  useEffect(() => {
    const getWord = () => {
      const wordOfDay = localStorage.getItem("wordOfDay");
      const today = new Date().getDate();
      
      if (wordOfDay) {
        const storedData = JSON.parse(wordOfDay);
        if (storedData.date === today) {
          return storedData.word;
        }
      }
      return null;
    };

    const setWord = (word) => {
      const today = new Date().getDate();
      const value = JSON.stringify({ word, date: today });
      localStorage.setItem("wordOfDay", value);
    };

    const fetchWord = async () => {
      let word = getWord();
      if (!word) {
        const response = await axios.get("https://random-word-api.herokuapp.com/word");
        word = response.data[0];
        setWord(word);
      }
      setRandomWord(word);
    };

    fetchWord();
  }, []);

  return { wordOfDay: randomWord };
};
