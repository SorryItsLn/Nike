import React from "react";

export const ServiceCard = ({ imgURL, label, subtext }) => {
  return (
    <div className="flex-1 sm:w-[350px] sm:min-2-[350px] w-full rounded-[0px] shadow-3xl px-10 py-16">
      <div className="w-11 h-11 justify-center flex items-center bg-coral-red rounded-full">
        <img src={imgURL} alt={label} width={30} height={25} />
      </div>
      <h3 className="mt-5 font-palanquin text-3xl leading-normal">{label}</h3>
      <p className="mt-3 font-montserrat break-words text-lg leading-normal text-slate-gray">
        {" "}
        {subtext}
      </p>
    </div>
  );
};
