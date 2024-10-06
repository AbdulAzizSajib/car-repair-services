import Image from "next/image";
import React from "react";

const Banner = () => {
  const banners = [
    {
      title: "Affordable Price For Car Servicing",
      description:
        "There are many variations of passages of available, but the majority have suffered alteration in some form",
      next: "#slide2",
      prev: "#slide4",
      img: "/assets/images/banner/1.jpg", // Corrected path
    },
    {
      title: "Affordable Price For Car Servicing",
      description:
        "There are many variations of passages of available, but the majority have suffered alteration in some form",
      next: "#slide3",
      prev: "#slide1",
      img: "/assets/images/banner/2.jpg", // Corrected path
    },
    {
      title: "Affordable Price For Car Servicing",
      description:
        "There are many variations of passages of available, but the majority have suffered alteration in some form",
      next: "#slide4",
      prev: "#slide2",
      img: "/assets/images/banner/3.jpg", // Corrected path
    },
    {
      title: "Affordable Price For Car Servicing",
      description:
        "There are many variations of passages of available, but the majority have suffered alteration in some form",
      next: "#slide1",
      prev: "#slide3",
      img: "/assets/images/banner/4.jpg", // Corrected path
    },
  ];

  return (
    <div>
      <div className="carousel w-full  container mx-auto  ">
        {banners.map((banner, index) => (
          <div
            key={index}
            id={`slide${index + 1}`}
            className="carousel-item relative w-full h-[90vh] rounded-xl overflow-hidden  "
          >
            <div className="absolute inset-0 bg-gradient-to-r from-zinc-900 to-transparent"></div>
            <Image
              className="w-full"
              src={banner.img}
              width={1140}
              height={600}
              alt="Banner Image"
            />
            <div className="absolute">
              <h2>{banner.title}</h2>
              <p>{banner.description}</p>
            </div>
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href={banner.prev} className="btn btn-circle">
                ❮
              </a>
              <a href={banner.next} className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Banner;
