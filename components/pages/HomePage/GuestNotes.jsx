import { GetMessages } from "@/lib/funtion";
import React from "react";
import MessageBox from "../GuestBook/MessageBox";
import Link from "next/link";
import Marquee from "react-fast-marquee";
import PrimaryButtonV2 from "@/components/ui/PrimaryButtonV2";

const GuestNotes = async () => {
  const messages = await GetMessages();

  return (
    <div className="w-full h-fit flex flex-col md:gap-0 gap-12 justify-start items-center">
      <div className="w-full h-fit flex justify-start items-start">
        <Marquee
          gradient={true}
          gradientColor={"#0B0D0E"}
          gradientWidth={10}
          pauseOnHover={true}
          autofill={true}
        >
          {messages.map((item, idx) => (
            <MessageBox
              key={idx}
              item={item}
              className="w-[340px] h-[300px] mr-2 ml-2"
            />
          ))}
        </Marquee>
      </div>

      {/* <Link href="/guestbook" className="mt-10">
        <PrimaryButtonV2 text="Leave a Note" />
      </Link> */}
    </div>
  );
};

export default GuestNotes;
