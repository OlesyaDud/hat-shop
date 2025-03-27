import React from "react";
import { services } from "../../constants";
import ServiceCard from "../../components/service-card/ServiceCard";

const Services = ({ imgURL, label, subtext }) => {
  return (
    <section className="max-container flex justify-center mt-20 mb-20 md:mt-32 md:mb-32 flex-wrap gap-9 ">
      {services.map((service) => (
        <ServiceCard key={service.label} {...service} />
      ))}
    </section>
  );
};

export default Services;
