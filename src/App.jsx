import { useEffect, useState } from "react";
import "./App.css";
import ToggleTheme from "./components/ToggleTheme";
import useLocalStorage from "use-local-storage";
import RandomQuote from "./components/RandomQuote";
import getRandomQuotes from "./api/api";

function App() {
  const [quote, setQuote] = useState(
    "There is no greater weapon than a prepared mind."
  );
  const [author, setAuthor] = useState("Zhuge Liang");

  // useEffect(() => {
  //   handleGenerate();
  // },[])

  const userPreference = window.matchMedia(
    "(prefers-color-scheme:dark)"
  ).matches;
  const [isDark, setIsDark] = useLocalStorage("isDark", userPreference);
  const handleClick = () => {
    setIsDark(!isDark);
  };

  const handleGenerate = async () => {
    const response = await getRandomQuotes();
    setQuote(response[0].content);
    setAuthor(response[0].author);
  };

  const handleTweet = () => {
    window.open(`https://twitter.com/intent/tweet?text=${quote} - ${author}`);
  };

  return (
    <>
      <div className="container" data-theme={isDark ? "dark" : "light"}>
        <ToggleTheme isChecked={isDark} handleClick={handleClick} />
        <RandomQuote
          handleGenerate={handleGenerate}
          quote={quote}
          author={author}
          handleTweet={handleTweet}
        />
      </div>
    </>
  );
}

export default App;
