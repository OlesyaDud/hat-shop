import React from "react";
import { products } from "../../constants";
import PopularProductCard from "../../components/product-card/PopularProductCard";

const PopularProducts = () => {
  return (
    <section id="products" className="max-sm:mt-12">
      <div className="flex flex-col justify-center items-center  sm:items-start gap-5 text-center sm:text-left mt-10">
        <div className="flex flex-col justify-center sm:items-start items-center text-center sm:text-left">
          <h2 className="text-4xl font-palanquin font-bold">
            See What's <span className="text-yellow-400">Just In!</span>
          </h2>
          <p className="lg:max-w-lg mt-2 font-montserrat text-slate-gray">
            Discover our latest hat arrivals, from trendy styles to classic
            designs, perfect for completing any look.
          </p>
        </div>

        <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-14 sm:gap-4">
          {products.map((product) => (
            <PopularProductCard key={product.name} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularProducts;
