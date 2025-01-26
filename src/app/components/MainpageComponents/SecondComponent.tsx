"use client";

import EventList from "../EventSection/EventList";

const SecondComponent = () => {
  const imageVariants = {
    initial: {
      opacity: 0,
      x: -20,
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 3,
        delay: 0.5,
      },
    },
  };

  const componentVariants = {};

  return (
    <div className=" bg-white w-screen flex flex-row justify-center items-center h-screen p-2 ">
      <EventList />
    </div>
  );
};

export default SecondComponent;
