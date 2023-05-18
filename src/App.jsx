import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { algorithm } from "./utils/algorithm";
import Typewriter from "typewriter-effect";
import { li, ul } from "./utils/animation";

import "./index.css";
import { typingTitle, typingLoading } from "./utils/typing";

function App() {
  const input = useRef(null);
  const [result, setResult] = useState([]);
  const [loading, setLoading] = useState(false);
  const handleClick = () => {
    if (input.current.value !== "") {
      setResult([]);
      setLoading(true);
      const event = setInterval(() => {
        setLoading(false);
        setResult([...algorithm(input.current.value)]);
        input.current.value = "";
        clearInterval(event);
      }, 4300);
    }
  };
  return (
    <>
      <section className="flex flex-col gap-4 w-[300px] lg:w-[500px]">
        <h1 className="flex flex-col items-center justify-center text-center text-neutral-800 text-[3rem] font-bold">
          <Typewriter options={typingTitle} />
        </h1>
        <input
          ref={input}
          placeholder="ENTER A NUMBER..."
          className="bg-neutral-50 drop-shadow-lg rounded-sm p-2 "
        />
        <button
          onClick={() => handleClick()}
          className="bg-neutral-800 text-neutral-50 font-bold rounded-sm transition-all p-2 "
        >
          GENERATE
        </button>
        {loading && (
          <span className="text-neutral-800 text-center font-bold">
            <Typewriter options={typingLoading} />
          </span>
        )}
        {result.length > 0 && (
          <motion.ul
            variants={ul}
            initial="hidden"
            animate="visible"
            className="bg-neutral-800 flex flex-wrap items-center justify-start rounded-sm border-2 border-neutral-300 gap-4 p-4"
          >
            {result.map((value, index) => (
              <motion.li
                key={index}
                variants={li}
                className="bg-neutral-50 text-neutral-800 text-[1rem] font-bold rounded-full flex items-center justify-center w-[50px] h-[50px]"
              >
                {value}
              </motion.li>
            ))}
          </motion.ul>
        )}
      </section>
    </>
  );
}

export default App;
