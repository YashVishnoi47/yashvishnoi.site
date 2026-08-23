import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

const MessageBox = ({ item, className }) => {
  return (
    <div
      className={cn(
        "w-full min-h-[220px] flex gap-2 flex-col justify-between itesta border border-main-border p-6 rounded-[8px] bg-sec-bg hover:border-accent-border transition-all duration-200 ease-out shadow-md shadow-bg-main hover:shadow-accent-tint break-inside-avoid mb-6",
        className,
      )}
    >
      <p className="text-[16px] text-main-text w-[80%]">{item.message}</p>

      <div className="w-full flex gap-2 mt-12">
        <div className="size-10 bg-card-bg border border-main-border rounded-full flex justify-center items-center shrink-0 overflow-hidden">
          <Image
            src={item.image}
            className="w-full h-full"
            width={30}
            height={30}
            alt="image"
          />
        </div>

        <div className="flex flex-col justify-start items-start">
          <span className="text-[14px] text-main-text">{item.Name}</span>
          <span className="text-[10px] text-sec-text">
            {new Date(item.createdAt).toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
              year: "numeric",
            })}
          </span>
        </div>
      </div>
    </div>
  );
};

export default MessageBox;
