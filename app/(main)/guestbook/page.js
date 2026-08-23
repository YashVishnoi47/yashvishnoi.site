import { cn, getTimeAgo } from "@/lib/utils";
import GuestList from "@/components/pages/GuestBook/GuestList";
import HeadingSection from "@/components/pages/GuestBook/HeadingSection";
import React from "react";
import { GetMessages } from "@/lib/funtion";

export const metadata = {
  title: "Guestbook",
  description:
    " Write-ups on the work — what I'm building, what I've learned shipping it, and the occasional note on running a one-person studio.",

  alternates: {
    canonical: "/guestbook",
  },

  openGraph: {
    title: "Guestbook | Yash Vishnoi",
    description:
      "Explore Yash Vishnoi's portfolio of web applications, SaaS products, and modern websites.",
    url: "https://yashvishnoi.site/guestbook",
  },
};

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
      <GuestList messages={messages} />
    </div>
  );
};

export default page;
