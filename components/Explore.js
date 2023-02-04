import Image from "next/image";
import React from "react";

export default function Explore() {
  return (
    <div className="min-w-full min-h-full flex flex-col space-y-10 my-20 justify-center items-center">
      <h1 className="text-textprimary text-4xl text-center font-righteous font-bold md:text-5xl">
        Share Your Events On{" "}
        <span className=" text-textSecondary text-center text-4xl font-righteous md:text-5xl">
          Social Media
        </span>
      </h1>
      <h1 className="text-textprimary text-center md:text-center text-xl font-righteous  md:text-2xl ">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc <br />
        vulputate libero et velit interdum, ac aliquet odio mattis.
      </h1>
      <div className="flex flex-row space-x-10 mt-20 items-center justify-center">
        <Image src="/asset/sell/insta.png" width={50} height={50} alt="insta" />
        <Image
          src="/asset/sell/facebook.png"
          width={50}
          height={50}
          alt="insta"
        />
        <Image
          src="/asset/sell/telegram.png"
          width={50}
          height={50}
          alt="insta"
        />
        <Image
          src="/asset/sell/tweeter.png"
          width={50}
          height={50}
          alt="insta"
        />
      </div>
    </div>
  );
}
