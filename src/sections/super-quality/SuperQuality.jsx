import React from "react";
import Button from "../../components/button/Button";
import { prod1 } from "../../assets/images";

const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className="flex justify-between items-center max-lg:flex-col gap-4 w-full max-container "
    >
      <div className="flex flex-1 flex-col justify-center items-center lg:items-start text-center lg:text-left">
        <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          Experience Excellence with Our{" "}
          <span className="span1 inline-block mt-3 ">Premium</span>
          <span className="span1 inline-block mt-3 ">Quality</span> Products
        </h2>

        <p className="mt-4 lg:max-w-lg info-text">
          Indulge in the epitome of sophistication with our premium-quality hats
          meticulously crafted to elevate your style. Each hat in our collection
          is a testament to superior craftsmanship and timeless elegance,
          ensuring unparalleled comfort and durability.
        </p>

        <p className="mt-6 lg:max-w-lg info-text">
          Discover a world of luxury where every detail reflects our commitment
          to excellence, making each hat a statement piece for the discerning
          fashion connoisseur.
        </p>

        <div className="mt-11">
          <Button label="View Details" />
        </div>
      </div>

      <div className="flex-1 md:flex justify-center items-center saturate-200 hidden ">
        <img
          src={prod1}
          alt="product"
          width={570}
          height={522}
          className="object-contain"
        />
      </div>
    </section>
  );
};

export default SuperQuality;
