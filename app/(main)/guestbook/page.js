import { cn, getTimeAgo } from "@/lib/utils";
import GuestList from "@/components/pages/GuestBook/GuestList";
import HeadingSection from "@/components/pages/GuestBook/HeadingSection";
import React from "react";
import { GetMessages } from "@/lib/funtion";
import MainGuestPage from "@/components/pages/GuestBook/MainGuestPage";

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
  return <MainGuestPage />;
};

export default page;
