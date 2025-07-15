import { useState } from "react";

const spanishNames = ["Pepe", "Lola", "Cipriano", "Bruno"];

const animalImages = [
  "/animals/1.jpg",
  "/animals/2.jpg",
  "/animals/3.jpg",
  "/animals/4.jpg",
];

function App() {
  const [index, setIndex] = useState(0);

  const generateNew = () => {
    const randomIndex = Math.floor(Math.random() * animalImages.length);
    setIndex(randomIndex);
  };

  const randomName =
    spanishNames[Math.floor(Math.random() * spanishNames.length)] + ".";

  return (
    <div className="text-center p-5">
      <h1>Animal Stuck in a Funny Place Generator!</h1>
      <div className="relative inline-block">
        <img
          src={animalImages[index]}
          alt="Animal stuck in a funny and weird place"
          className="w-[400px] h-[500px] rounded-[12px]"
        />
        <div className="absolute bottom-5 left-0 right-0 text-white text-4xl font-bold text-shadow-black">
          {randomName}
        </div>
      </div>
      <br />
      <button onClick={generateNew} className="mt-5">
        Generate Another
      </button>
    </div>
  );
}

export default App;
