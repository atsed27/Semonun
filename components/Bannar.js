import Image from "next/image";
import React from "react";

export default function Bannar() {
  return (
    <div className="h-[100vh] w-full  bg-primary pt-32 top-0 flex flex-col-reverse md:flex-row ">
      <div className="flex flex-col w-full md:w-1/2 md:ml-7 space-y-5">
        <div className="flex flex-col mx-auto mt-[-10px] md:mt-10 space-y-4 mb-10 md:space-y-5">
          <h1 className="text-textprimary text-4xl w-full md:text-6xl lg:text-8xl font-righteous">
            Discover Events
          </h1>

          <h1 className="text-textSecondary text-4xl md:text-6xl lg:text-8xl font-righteous">
            Arround You
          </h1>
          <p className="md:text-lg lg:text-2xl text-md text-white">
            Lorem ipsum dolor sit amet, consectetur <br />
            adipiscing elit. Nunc vulputate libero et,
            <br />
            velit interdum, ac aliquet odio mattis.
          </p>
          <div className="flex flex-row items-center justify-between">
            <button className="md:p-3 p-2 rounded-full outline w-[40%] outline-white bg-orange text-white font-bold">
              Create Events
            </button>
            <button className="md:p-3 p-[7px] rounded-full outline w-[40%] outline-textprimary bg-white text-textprimary  font-bold">
              Browse Events
            </button>
          </div>
        </div>
      </div>
      <div className="flex max-w-screen mt-[-50px] md:mt-0 ">
        <div className="bg-home ">
          <Image src="/asset/event.png" width={370} height={350} />
        </div>
      </div>
    </div>
  );
}
