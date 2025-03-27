import React from "react";
import { products } from "../../constants";
import PopularProductCard from "../../components/product-card/PopularProductCard";

const PopularProducts = () => {
  return (
    <section id="products" className="max-sm:mt-12 px-4">
      <div className="max-w-7xl mx-auto flex flex-col justify-center items-center gap-5 text-center">
        <div className="flex flex-col items-center text-center">
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
