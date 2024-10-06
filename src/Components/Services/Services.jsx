import React from "react";

import { ServicesInfo } from "../../lib/ServicesInfo";
import Card from "../Card/Card";

const Services = () => {
  return (
    <div className="container  mx-auto mt-32 mb-20 ">
      <div className="text-center flex flex-col items-center space-y-3 ">
        <p className="text-xl text-primary">Services</p>
        <h2 className="text-3xl font-bold">Our Service Area</h2>
        <p className="text-gray-500 max-w-xl">
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.{" "}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3  gap-6">
          {ServicesInfo.map((details) => (
            <Card key={details._id} details={details}></Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
