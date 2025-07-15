import { useState, useRef } from "react";
import html2canvas from "html2canvas";
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
  const imageRef = useRef(null);

  const generateNew = () => {
    const randomIndex = Math.floor(Math.random() * animalImages.length);
    setIndex(randomIndex);
  };

  const randomName =
    spanishNames[Math.floor(Math.random() * spanishNames.length)] + ".";

  const downloadImage = async () => {
    if (!imageRef.current) return;

    const canvas = await html2canvas(imageRef.current);
    const link = document.createElement("a");
    link.download = `${randomName.slice(0, randomName.length - 1)}.png`;
    link.href = canvas.toDataURL("image/png");
    link.click();
  };

  return (
    <div className="text-center p-5">
      <h1 className="mb-4 text-2xl font-semibold">
        Animal Stuck in a Funny Place Generator!
      </h1>
      <div ref={imageRef} className="relative inline-block">
        <img
          src={animalImages[index]}
          alt="Animal stuck in a funny and weird place"
          className="w-[30rem] h-[30rem] rounded-[12px]"
        />
        <div className="absolute bottom-5 left-0 right-0 text-white text-4xl font-bold text-shadow-black">
          {randomName}
        </div>
      </div>
      <br />
      <div className="flex justify-center gap-6">
        <button
          onClick={generateNew}
          className="mt-5 bg-amber-400 p-4 rounded-xl font-semibold cursor-pointer  hover:bg-amber-600"
        >
          Generate Another
        </button>
        <button
          onClick={downloadImage}
          className="mt-5 bg-emerald-400 p-4 rounded-xl font-semibold cursor-pointer hover:bg-emerald-600"
        >
          Download Image
        </button>
      </div>
    </div>
  );
}

export default App;
