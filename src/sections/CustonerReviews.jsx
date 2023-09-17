import React from "react";
import ReviewCard from "../components/ReviewCard";
import { reviews } from "../constants/constants";

const CustonerReviews = () => {
  return (
    <section className="max-container ">
      <h3 className=" font-palaquin text-center text-4xl font-bold ">
        Waht Our
        <span className="text-coral-red  "> Customers </span>
        Say?
      </h3>
      <p className="info-text mt-4 m-auto max-w-lg text-center">
        {" "}
        Hear genuine storues from our satisfied customers about their
        exceptional expirences with us
      </p>
      <div className="mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14 ">
        {reviews.map((reviews) => (
          <ReviewCard
            key={reviews.customerName}
            customerName={reviews.customerName}
            imgURL={reviews.imgURL}
            rating={reviews.rating}
            feedback={reviews.feedback}
          />
        ))}
      </div>
    </section>
  );
};

export default CustonerReviews;
