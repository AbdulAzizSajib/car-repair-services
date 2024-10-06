import React from "react";
import { Carousel } from "antd";
import Image from "next/image";

const banners = [
  {
    title: "Affordable Price For Car Servicing",
    description:
      "There are many variations of passages of available, but the majority have suffered alteration in some form",
    img: "/assets/images/banner/1.jpg",
  },
  {
    title: "Affordable Price For Car Servicing",
    description:
      "There are many variations of passages of available, but the majority have suffered alteration in some form",
    img: "/assets/images/banner/2.jpg",
  },
  {
    title: "Affordable Price For Car Servicing",
    description:
      "There are many variations of passages of available, but the majority have suffered alteration in some form",
    img: "/assets/images/banner/3.jpg",
  },
  {
    title: "Affordable Price For Car Servicing",
    description:
      "There are many variations of passages of available, but the majority have suffered alteration in some form",
    img: "/assets/images/banner/4.jpg",
  },
];

const Slider = () => {
  return (
    <>
      <Carousel autoplay={true} arrows infinite={false} className="relative">
        {banners.map((banner, index) => (
          <div key={index} className="relative w-full h-[90vh]">
            <div className="relative w-full h-full">
              <Image
                src={banner.img}
                alt={`Banner ${index + 1}`}
                layout="fill"
                objectFit="cover"
                quality={100}
                className="rounded-lg"
              />
            </div>

            <div className="absolute rounded-lg inset-0 bg-gradient-to-r from-black/60 to-transparent"></div>

            <div className="absolute  inset-0 flex flex-col items-center justify-center text-white text-center px-4">
              <h2 className="text-3xl md:text-6xl font-bold mb-2">
                {banner.title}
              </h2>
              <p className=" text-xl ">{banner.description}</p>
              <div className="flex gap-3 mt-5 items-center">
                <button className="btn px-14 bg-primary text-white hover:text-primary  hover:border-primary hover:bg-white border-none ">
                  Discover More
                </button>
                <button className="btn px-14 btn-outline hover:border-white  text-white  ">
                  Latest Project
                </button>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </>
  );
};

export default Slider;
