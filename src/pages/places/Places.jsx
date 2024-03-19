import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import { SwipeCarousel } from "./SwipeCarousel";
import { SwipeCarousel2 } from "./SwipeCarousel2";

const Example = () => {
  return (
    <div className="bg-white pt-[80px]">
      <div className="flex h-40 items-center justify-end flex-col">
        <span className="font-semibold text-3xl uppercase text-purple-500">
          MY BIRTHDAY
        </span>
        <p className="py-3 font-semibold text-md">I spent my birthday at Frango's and Village Market.</p>
      </div>
      <SwipeCarousel2 />
      <div className="flex h-40 items-center justify-end flex-col">
        <span className="font-semibold text-3xl uppercase text-purple-500">
          CHRISTMAS DAY
        </span>
        <p className="py-3 font-semibold text-md">I spent Christmas with my family at Bambino.</p>
      </div>
      <Places />
      <div className="flex h-40 items-center justify-end flex-col">
        <span className="font-semibold text-3xl uppercase text-purple-500">
          NEW YEAR'S DAY
        </span>
        <p className="py-3 font-semibold text-md">I spent the last day of 2023 at Dusit Princess Hotel.</p>
      </div>
      <SwipeCarousel />
    </div>
  );
};

const Places = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-neutral-900">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4">
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card }) => {
  return (
    <div
      key={card.id}
      className="group relative h-[450px] w-[450px] overflow-hidden bg-neutral-200"
    >
      <div
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
      ></div>
      
    </div>
  );
};

export default Example;

const cards = [
  {
    url: "src/assets/images/bambino/c1.jpg",
    id: 1,
  },
  {
    url: "src/assets/images/bambino/c2.jpg",
    id: 2,
  },
  {
    url: "src/assets/images/bambino/c3.jpg",
    id: 3,
  },
  {
    url: "src/assets/images/bambino/c4.jpg",
    id: 4,
  },
  {
    url: "src/assets/images/bambino/c5.jpg",
    id: 5,
  },
  {
    url: "src/assets/images/bambino/c6.jpg",
    id: 6,
  },
  {
    url: "src/assets/images/bambino/c7.jpg",
    id: 7,
  },
];