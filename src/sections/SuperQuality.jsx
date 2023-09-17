import React from "react";
import Button from "../components/Button";
import { shoe8 } from "../assets/images";

const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className="flex justify-between items-center 
      max-lg:flex-col gap-10 w-full max-container"
    >
      <div className="flex flex-1 flex-col">
        <h2 className="mt-10 font-palanquin text-4xl capitalize font-bold max-sm:text-[72px] max-sm:leading-[82px] lg:max-w-lg">
          We Provide You
          <span className="text-coral-red"> Super </span>
          <span className="text-coral-red">Quality </span>
          Shoes
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Ensuring premium comfort and style, our meticulousely crafted footwear
          id desogned to elevate your experience, provide you with unmatched
          quality, innovation, and a touch of elegance.
        </p>
        <p className="mt-6 mb-2 lg:max-w-lg info-text">
          {" "}
          Our dedicatin to detail and excellence ensures your satisfaction
        </p>
        <div className="mt-11">
          <Button className="" label="View detalies" iconURL={""} />
        </div>
      </div>
      <div className="flex flex-1 justify-center items-center">
        <img
          src={shoe8}
          alt="Big Shoe8"
          width={570}
          height={522}
          className="object-contain"
        />
      </div>
    </section>
  );
};

export default SuperQuality;
