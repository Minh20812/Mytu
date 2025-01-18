import React from "react";
import { CircleDot } from "lucide-react";

const Loading = ({ setTimeSkip }) => {
  const handleClick = () => {
    setTimeSkip(true);
  };
  return (
    <div className=" flex flex-col justify-center items-center h-screen text-2xl bg-black motion-opacity-out-0 motion-ease-spring-smooth motion-delay-20000 font-custom max-sm:p-4 max-sm:text-center">
      <h1 className="text-text motion-translate-y-in-100 motion-opacity-in-0 motion-delay-1000">
        Honoring our <strong>ancestors</strong>&nbsp;is a way to preserve our
        identity,
      </h1>
      <div className=" flex max-sm:flex-col">
        <div className=" text-text motion-translate-y-in-100 motion-opacity-in-0 motion-delay-2000">
          express gratitude,&nbsp;
        </div>
        <div className=" text-text motion-translate-y-in-100 motion-opacity-in-0 motion-delay-4000">
          and connect with our roots,&nbsp;
        </div>
        <div className=" text-text motion-translate-y-in-100 motion-opacity-in-0 motion-delay-6000">
          bringing balance and harmony to life.
        </div>
      </div>
      <img
        src="/images/mytu.png"
        alt="mytupic"
        className="h-16 motion-translate-y-in-100 motion-opacity-in-0 motion-delay-7000"
      />
      <img
        src="https://i.imgur.com/Qmlzjwd.jpeg"
        alt="bgloading"
        className=" absolute opacity-10 motion-scale-in-0 motion-opacity-in-0 motion-delay-2000 h-screen"
      />
      <div
        className=" text-white rounded-full bg-transparent p-20 cursor-pointer opacity-15 transition-all absolute max-sm:bottom-0 bottom-10 motion-scale-loop-125 motion-translate-y-in-100 motion-opacity-in-0 motion-delay-1000"
        onClick={handleClick}
      >
        <CircleDot />
      </div>
    </div>
  );
};

export default Loading;
