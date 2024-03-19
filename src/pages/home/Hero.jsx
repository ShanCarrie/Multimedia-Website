import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import ExampleWrapper from "./ExampleWrapper";

const Hero = () => {
  return (
    <section className="w-full pt-[130px] pb-8 py-12 grid grid-cols-1 md:grid-cols-2 items-center gap-8 max-w-6xl mx-auto">
      <div>
        <span className="block mb-4 text-xs md:text-sm text-indigo-500 font-medium">
          Everyday Activities
        </span>
        <h3 className="text-4xl md:text-6xl font-semibold">
          Let's have Fun in Nairobi!
        </h3>
        <p className="text-base md:text-lg text-slate-700 my-4 md:my-6">
          Welcome to NaiReview, my digital journal that shows you a glimpse of my past year in Nairobi.
        </p>
        <ExampleWrapper/>
      </div>
      <ShuffleGrid />
    </section>
  );
};

const shuffle = (array) => {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

const squareData = [
  {
    id: 1,
    src: "src/assets/images/hero/bao.jpg",
  },
  {
    id: 2,
    src: "src/assets/images/hero/bartender.jpg",
  },
  {
    id: 3,
    src: "src/assets/images/hero/margarita.jpg",
  },
  {
    id: 4,
    src: "src/assets/images/hero/bao2.jpg",
  },
  {
    id: 5,
    src: "src/assets/images/hero/flower.jpg",
  },
  {
    id: 6,
    src: "src/assets/images/hero/ostrich.jpg",
  },
  {
    id: 7,
    src: "src/assets/images/hero/pong.jpg",
  },
  {
    id: 8,
    src: "src/assets/images/hero/sunset.jpg",
  },
  {
    id: 9,
    src: "src/assets/images/hero/beer.jpg",
  },
  {
    id: 10,
    src: "src/assets/images/hero/football.jpg",
  },
  {
    id: 11,
    src: "src/assets/images/hero/cream.jpg",
  },
  {
    id: 12,
    src: "src/assets/images/hero/painting1.jpg",
  },
  {
    id: 13,
    src: "src/assets/images/hero/painting2.jpg",
  },
  {
    id: 14,
    src: "src/assets/images/hero/parking.jpg",
  },
  {
    id: 15,
    src: "src/assets/images/hero/taco.jpg",
  },
  {
    id: 16,
    src: "src/assets/images/hero/margarita.jpg",
  },
];

const generateSquares = () => {
  return shuffle(squareData).map((sq) => (
    <motion.div
      key={sq.id}
      layout
      transition={{ duration: 1.5, type: "spring" }}
      className="w-full h-full"
      style={{
        backgroundImage: `url(${sq.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    ></motion.div>
  ));
};

const ShuffleGrid = () => {
  const timeoutRef = useRef(null);
  const [squares, setSquares] = useState(generateSquares());

  useEffect(() => {
    shuffleSquares();

    return () => clearTimeout(timeoutRef.current);
  }, []);

  const shuffleSquares = () => {
    setSquares(generateSquares());

    timeoutRef.current = setTimeout(shuffleSquares, 3000);
  };

  return (
    <div className="grid grid-cols-4 grid-rows-4 h-[450px] gap-1">
      {squares.map((sq) => sq)}
    </div>
  );
};

export default Hero;