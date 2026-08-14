"use client";
import React from "react";
import Image from "next/image";

const GuestList = () => {
  return (
    <div className="w-full grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 justify-start items-start">
      <div className="w-full h-[220px] flex gap-2 flex-col  justify-start items-start border border-accent-border p-6 rounded-[8px] bg-accent-tint">
        <p className="text-[20px] text-main-text font-head italic">
          "Leave something behind"
        </p>
        <p className="text-[14px] text-sec-text">
          Sign in to post — takes a few seconds.
        </p>

        <div className="w-full flex flex-col gap-2 mt-4">
          <button className="py-2 w-full flex justify-center items-center gap-4 cursor-pointer rounded-[8px] transition-all duration-300 ease-out text-[14px] text-main-text font-label hover:bg-accent-tint border border-main-border hover:border-accent-border">
            <Image
              src="/socials/google.svg"
              width={18}
              height={18}
              alt="google"
            />
            Continue with Google
          </button>
          <button className="py-2 w-full flex justify-center items-center gap-4 cursor-pointer rounded-[8px] transition-all duration-300 ease-out text-[14px] text-main-text font-label hover:bg-accent-tint border border-main-border hover:border-accent-border">
            <Image
              src="/socials/github.svg"
              width={18}
              height={18}
              alt="google"
            />
            Continue with Google
          </button>
        </div>
      </div>

      <div className="w-full min-h-[220px] flex gap-2 flex-col justify-between itesta border border-main-border p-6 rounded-[8px] bg-sec-bg hover:border-accent-border transition-all duration-200 ease-out shadow-md shadow-bg-main hover:shadow-accent-tint">
        <p className="text-[16px] text-main-text w-[80%]">
          Clean. Fast. No fluff. More sites should look like this.
        </p>

        <div className="w-full flex gap-2 mt-12">
          <div className="size-10 bg-card-bg border border-main-border rounded-full flex justify-center items-center shrink-0">
            <span className="text-[14px] text-accent-main">YV</span>
          </div>

          <div className="flex flex-col justify-start items-start">
            <span className="text-[14px] text-main-text">Yash Vishnoi</span>
            <span className="text-[10px] text-sec-text">Aug 10, 2026</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GuestList;
