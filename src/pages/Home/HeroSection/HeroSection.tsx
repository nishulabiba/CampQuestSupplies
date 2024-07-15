import { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import TextTransition, { presets } from "react-text-transition";

const HeroSection = () => {
  const TEXTS = ["Gear Up for Adventure", "Nature Awaits", "Camp in Comfort"];
  const [index, setIndex] = useState(0);
  const [isForward, setIsForward] = useState(true);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prevIndex) => {
        let newIndex = isForward ? prevIndex + 1 : prevIndex - 1;
        if (newIndex >= TEXTS.length) {
          newIndex = TEXTS.length - 1;
          setIsForward(false);
        } else if (newIndex < 0) {
          newIndex = 0;
          setIsForward(true);
        }
        return newIndex;
      });
    }, 2000);

    return () => clearInterval(intervalId);
  }, [isForward, TEXTS.length]);

  return (
    <section className="relative w-full max-w-7xl mx-auto">
      <Carousel autoPlay interval={5000} infiniteLoop  className="mx-auto z-10">
        <div className="relative overflow-hidden h-[500px]">
          <img
            className="w-full h-full object-cover object-top"
            src="https://images.pexels.com/photos/22590547/pexels-photo-22590547/free-photo-of-vehicle-parked-by-the-lake.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Vehicle parked by the lake"
          />
        </div>
        <div className="relative overflow-hidden h-[500px]">
          <img
            className="w-full h-full object-cover object-top"
            src="https://images.pexels.com/photos/2398220/pexels-photo-2398220.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Camping site"
          />
        </div>
        <div className="relative overflow-hidden h-[500px]">
          <img
            className="w-full h-full object-cover object-top"
            src="https://images.pexels.com/photos/6212576/pexels-photo-6212576.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Tent in the forest"
          />
        </div>
        <div className="relative overflow-hidden h-[500px]">
          <img
            className="w-full h-full object-cover object-top"
            src="https://images.pexels.com/photos/6271625/pexels-photo-6271625.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Mountains and lake"
          />
        </div>
      </Carousel>

      <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center z-20">
        <div className="mb-10 flex justify-center items-center">
          <TextTransition
            
            springConfig={presets.wobbly}
            className="uppercase font-bold text-white text-xl md:text-7xl"
          >{TEXTS[index]}</TextTransition>
        </div>
        <p className="uppercase font-bold text-[#3791a5] text-lg md:text-6xl"><span className="text-yellow-400">Embrace</span> the <span className="text-white">Wild</span></p>
        <div className="flex gap-8 mt-8">
          <p className="md:w-[450px] text-white bg-slate-400 bg-opacity-30 md:py-4 md:px-10 rounded-lg">
            Elevate your living environment to new heights of cleanliness and hygiene. We serve both <span className="font-bold text-[#153339]">residential</span> and <span className="font-bold text-[#153339]">commercial</span> clients.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
