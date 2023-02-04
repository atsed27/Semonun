import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Layout({ title, children }) {
  return (
    <>
      <Head>
        <title>{title ? title + "Semomun" : "Semonun"}</title>
      </Head>
      <div className="flex min-h-screen flex-col">
        <nav className="relative flex flex-col bg-primary w-full h-24 md:h-32 ">
          <div className="flex flex-row overflow-hidden justify-between px-2 md:px-5">
            <Link href="/" legacyBehavior>
              <h1 className="textprimary text-4xl mt-5 font-montez md:mt-10 md:text-6xl ml-3 ">
                Semonun
              </h1>
            </Link>
            <div className="hidden mr-[100px] p-2 mt-10  space-x-10 md:flex">
              <button className="primary-button">Events</button>
              <button className="primary-button">Login</button>
              <button className="primary-button">Sign Up</button>
            </div>
          </div>
        </nav>
        {children}
      </div>
    </>
  );
}
