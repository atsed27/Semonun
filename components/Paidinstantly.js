import Image from "next/image";
import React from "react";

export default function Paidinstantly() {
  return (
    <div className="flex flex-col min-w-full min-h-full space-y-10">
      <div className="min-w-full min-h-full bg-primary flex-col-reverse flex md:flex-row justify-center items-center">
        <div className="flex w-full md:w-1/2 ml-20 justify-center items-center md:mr-32">
          <Image
            src="/asset/sell/happy.png"
            width={500}
            height={400}
            alt="sell ticket"
          />
        </div>
        <div className="flex w-full md:w-1/2 md:justify-center mx-auto mt-20 md:mt-0 space-y-5 md:items-center flex-col">
          <h1 className="text-textprimary text-4xl text-center md:text-6xl font-righteous">
            Get Paid Instantly
          </h1>
          <p className="text-xl text-center  text-white">
            Lorem ipsum dolor sit amet, consectetur <br />
            adipiscing elit. Nunc vulputate libero et,
            <br />
            velit interdum, ac aliquet odio mattis.
          </p>
        </div>
      </div>
      <div className="min-w-full min-h-full justify-center items-center">
        <h1 className="text-orange md:border rounded-full m-20 border-slate-400  p-3 text-center font-righteous text-4xl md:text-5xl">
          Discover Events Hangout With{" "}
          <span className=" text-textprimary font-righteous text-4xl md:text-5xl">
            Awesome People
          </span>
        </h1>
      </div>
    </div>
  );
}
