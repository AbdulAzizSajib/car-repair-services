import Image from "next/image";

const Card = ({ details }) => {
  const { title, price, img } = details;
  return (
    <div>
      <div className="card card-compact bg-base-100 shadow-xl">
        <figure className="w-96 h-80 relative">
          <Image
            src={img}
            layout="fill"
            objectFit="cover"
            alt="image"
            className="rounded-lg"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <div className="card-actions justify-between items-center">
            <h2 className="text-primary text-xl font-semibold">
              Price: {price}
            </h2>
            <button className="btn btn-primary text-white">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
