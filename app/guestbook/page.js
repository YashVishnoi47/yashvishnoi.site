import { cn, getTimeAgo } from "@/lib/utils";
import GuestList from "@/components/pages/GuestBook/GuestList";
import HeadingSection from "@/components/pages/GuestBook/HeadingSection";
import React from "react";
import { GetMessages } from "@/lib/funtion";

const page = async () => {
  const messages = await GetMessages();

  const latestMessage = messages.reduce((latest, message) =>
    new Date(message.createdAt) > new Date(latest.createdAt) ? message : latest,
  );

  const timeAgo = getTimeAgo(latestMessage.createdAt);

  return (
    <div
      className={cn(
        "min-h-screen w-full relative",
        "flex flex-col justify-start items-center sm:px-0 p-2 md:gap-30 gap-20",
      )}
    >
      <HeadingSection messages={messages.length} latestUploaded={timeAgo} />
      <GuestList />
    </div>
  );
};

export default page;
