import Image from "next/image";
import React from "react";

export default function Sellticket() {
  return (
    <div className="min-w-full min-h-full bg-primary flex flex-col space-y-10 md:flex-row mt-4 md:justify-center">
      <div className="flex flex-col w-full md:w-1/2 mt-20 space-y-10 ">
        <h1 className="md:text-6xl text-5xl text-center text-textprimary font-righteous">
          Sell Ticket Online
        </h1>
        <h1 className="md:text-xl text-lg  space-x-3 text-center text-white  ">
          Lorem ipsum dolor sit amet, consectetur <br />
          adipiscing elit.Nunc vulputate libero <br /> et velit interdum, ac
          aliquet odio mattis.
        </h1>
        <button className="px-4 py-3 ml-5 md:ml-32 rounded-full outline w-[78%]  md:w-[40%] outline-white bg-orange text-white font-bold">
          Create Event Now
        </button>
      </div>
      <div className="flex w-full  md:w-1/2 justify-center items-center mr-32">
        <Image
          src="/asset/sell/sellticket.png"
          width={550}
          height={400}
          alt="sell ticket"
        />
      </div>
    </div>
  );
}
