import Layout from "@/components/Layout";
import data from "@/utils/data";
import { Grid } from "@mui/material";
import Image from "next/image";
import React from "react";

export default function Searchevent() {
  return (
    <Layout title="Search Event">
      <div className="min-w-full min-h-full overflow-hidden flex flex-col">
        <div className="left-0 top-[-100px] min-w-screen min-h-[500px] bg-hero">
          <div className="flex mt-40 justify-center items-center">
            <form>
              <input
                type="text"
                className="rounded-full border border-slate-800"
                placeholder="Search Events"
              ></input>
            </form>
          </div>
        </div>
        <div className="min-w-full h-[130px] bg-third mt-20 ">
          <ul className=" flex flex-row space-x-8 mt-8 ml-5">
            <li>
              <button className="rounded-full px-10 py-3 text-black bg-white ">
                All
              </button>
            </li>
            <li>
              <button className="rounded-full px-10 py-3 text-black bg-white ">
                Free
              </button>
            </li>
            <li>
              <button className="rounded-full px-10 py-3 text-black bg-white ">
                Today
              </button>
            </li>
            <li>
              <button className="rounded-full px-10 py-3 text-black bg-white ">
                This Weekend
              </button>
            </li>
            <li>
              <button className="rounded-full px-10 py-3 text-black bg-white ">
                Charity
              </button>
            </li>
          </ul>
        </div>
        <div className="flex flex-col min-w-full min-h-full mt-12">
          <div className="w-full">
            <h1 className="text-textprimary text-5xl ml-5 font-righteous ">
              Popular Catagory
            </h1>
          </div>
          <div className="min-w-full min-h-full mt-12  bg-[#1CAE81]">
            <div className="grid grid-cols-3 mx-20  mt-10">
              {data.events.map((events) => (
                <div
                  key={events.id}
                  className="bg-cardbg flex rounded flex-row mb-7 justify-between p-5 items-center h-[100px] w-[300px]"
                >
                  <img src={events.image} width={50} height={50} />
                  <h1 className="text-textprimary text-xl ">{events.name}</h1>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
