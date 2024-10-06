import Image from "next/image";

const About = () => {
  return (
    <div className="container mx-auto my-20">
      <div className="grid grid-cols-2 gap-16 ">
        <div className="relative">
          <Image
            src="/assets/images/about_us/person.jpg"
            width={700}
            height={700}
            alt="image"
            className="rounded-lg"
          />
          <Image
            src="/assets/images/about_us/parts.jpg"
            width={400}
            height={400}
            alt="image"
            className="rounded-lg absolute  -bottom-16 -right-10 border-white border-4"
          />
        </div>
        <div className=" space-y-8">
          <p className=" text-primary text-xl">About</p>
          <h2 className="text-3xl font-bold">
            We are qualified & of experience in this field
          </h2>
          <p className="text-gray-500">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable. <br /> <br />
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </p>
          <button className="btn px-14 bg-primary text-white hover:text-primary  hover:border-primary hover:bg-white border-none ">
            Get More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
