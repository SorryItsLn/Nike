import React from "react";
import { offer } from "../assets/images";
import Button from "../components/Button";
import { arrowRight } from "../assets/icons";

const SpacialOffer = () => {
  return (
    <section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container">
      <div className="flex-1 ">
        <img
          src={offer}
          width={773}
          height={687}
          className=" object-contain w-full"
          alt=""
        />
      </div>
      <div className="flex flex-1 flex-col">
        <h2 className="mt-10 font-palanquin text-4xl capitalize font-bold max-sm:text-[72px] max-sm:leading-[82px] lg:max-w-lg">
          We Provide You
          <span className="text-coral-red"> Special </span>
          Offer
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
        <div className="mt-11 flex flex-wrap ga[-4">
          <Button className="" label="Shop now" iconURL={{ arrowRight }} />
          <Button
            className=""
            label="Lear More"
            backgroundColor="bg-white"
            borderColor="border-slate-gray"
            textColar="text-slate-gray"
          />
        </div>
      </div>
    </section>
  );
};

export default SpacialOffer;
