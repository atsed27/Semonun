import React from "react";
import data from "@/utils/data";
import Image from "next/image";

export default function Promotion() {
  return (
    <div className="min-w-full flex flex-col min-h-full mx-auto my-24 md:my-32 ">
      <h1 className="text-center text-4xl md:text-5xl text-textprimary font-righteous font-bold">
        Fast Online{" "}
        <span className="text-4xl md:text-5xl text-textthrid font-bold">
          Payment
        </span>
      </h1>
      <div className="grid grid-cols-5 lg:grid-cols-6 mt-10 md:ml-36 md:mt-20">
        {data.banks.map((payments) => (
          <div
            key={payments.id}
            className="flex flex-row items-center justify-center"
          >
            <Image
              src={payments.image}
              alt={payments.name}
              width={200}
              height={150}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
