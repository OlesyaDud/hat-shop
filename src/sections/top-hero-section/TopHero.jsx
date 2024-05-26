import React, { useState } from "react";
import Button from "../../components/button/Button";
import { arrowRight } from "../../assets/icons";
import { hats, statistics } from "../../constants";
import { bigHat1 } from "../../assets/images";
import ProductCard from "../../components/product-card/ProductCard";

const TopHero = () => {
  const [bigProductImage, setBigProductImg] = useState(bigHat1);

  return (
    <section
      id="home"
      className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container"
    >
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:px-4 pt-28">
        <h1 className="mt-10 font-palanquin text-4xl lg:text-8xl  max-sm:leading-[82px] font-bold">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">
            Introducing
          </span>
          <span className="inline-block mt-3">Our Newest</span> Product
          Collection
        </h1>

        <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm">
          Be the first to explore our latest product innovations!
        </p>

        <Button
          label="Shop Now"
          iconURL={arrowRight}
          altText="arrow-right-icon"
        />
      </div>

      <div className="relative flex-1 flex flex-col justify-center items-center xl:min-h-screen max-xl:py-40 bg-cover bg-center">
        <img
          src={bigProductImage}
          alt="collection"
          width={610}
          height={500}
          className="object-contain relative z-10"
        />

        <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 mt-6 sm:mt-10">
          {hats.map((image, index) => (
            <div key={index} className="flex justify-center">
              <ProductCard
                index={index}
                imgURL={image}
                changeBigProductImage={(hat) => setBigProductImg(hat)}
                bigProductImage={bigProductImage}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopHero;
