import React from "react";
import { star } from "../assets/icons";

const PopularProductsCard = ({ imgURL, name, price, rating }) => {
  return (
    <div className="flex flex-1 flex-col w-full items-center max-sm:w-full">
      <img
        src={imgURL}
        alt={name}
        className="w-[280px] h-[280px] hover:scale-105 hover:ease-in-out duration-200 ... cursor-pointer"
      />
      <div className="mt-8 flex  justify-start gap-2.5">
        <img src={star} alt="rating" width={24} height={24} />
        <p className="font-montserrat text-xl leading-normal text-slate-500">
          {rating}
        </p>
      </div>
      <h3 className="mt-2 text-2xl leading-normal font-semibold font-palanquin">
        {name}
      </h3>
      <p className="mt-2 font-semibold font-montserrat text-coral-red leading-normal text-2xl">
        {price}
      </p>
    </div>
  );
};

export default PopularProductsCard;
