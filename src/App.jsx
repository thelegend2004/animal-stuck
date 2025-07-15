import { useState } from "react";
import spanishNames from "./data/names.json";

const images = import.meta.glob("./assets/animals/*.{jpg,jpeg,png,gif}", {
  eager: true,
  import: "default",
  query: { url: true },
});

const animalImages = Object.values(images);

function App() {
  const [index, setIndex] = useState(
    Math.floor(Math.random() * animalImages.length)
  );

  const generateNew = () => {
    const randomIndex = Math.floor(Math.random() * animalImages.length);
    setIndex(randomIndex);
  };

  const randomName =
    spanishNames[Math.floor(Math.random() * spanishNames.length)] + ".";

  return (
    <div className="text-center p-5">
      <h1 className="mb-4 text-2xl font-semibold">
        Animal Stuck in a Funny Place Generator!
      </h1>
      <div className="relative inline-block">
        <img
          src={animalImages[index]}
          alt="Animal stuck in a funny and weird place"
          className="w-[500px] h-[500px] rounded-[12px]"
        />
        <div className="absolute bottom-5 left-0 right-0 text-white text-4xl font-bold text-shadow-black">
          {randomName}
        </div>
      </div>
      <br />
      <button
        onClick={generateNew}
        className="mt-5 bg-amber-400 p-4 rounded-xl font-semibold cursor-pointer hover:p-5 hover:bg-amber-600"
      >
        Generate Another
      </button>
    </div>
  );
}

export default App;
