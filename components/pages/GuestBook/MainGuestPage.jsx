"use client";
import React, { useEffect, useState } from "react";
import HeadingSection from "./HeadingSection";
import GuestList from "./GuestList";
import { GetMessages } from "@/lib/funtion";
import { cn, getTimeAgo } from "@/lib/utils";

const MainGuestPage = () => {
  const [messages, setMessages] = useState([]);
  const [latestMessage, setLatestMessage] = useState(null);
  const [timeAgo, setTimeAgo] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(async () => {
    const handleFetchMessages = async () => {
      setLoading(true);
      const messages = await GetMessages();
      if (!messages) return;
      setMessages(messages);
      setLoading(false);
    };

    await handleFetchMessages();
  }, []);

  useEffect(() => {
    if (messages.length === 0) return;
    const getLatestMessage = () => {
      const latestMessage = messages.reduce((latest, message) =>
        new Date(message.createdAt) > new Date(latest.createdAt)
          ? message
          : latest,
      );

      return latestMessage;
    };

    const latestMessage = getLatestMessage();

    const timeAgo = getTimeAgo(latestMessage.createdAt);

    setLatestMessage(latestMessage);
    setTimeAgo(timeAgo);
  }, [messages]);

  return (
    <div
      className={cn(
        "min-h-screen w-full relative",
        "flex flex-col justify-start items-center sm:px-0 p-2 md:gap-30 gap-20",
      )}
    >
      <HeadingSection messages={messages.length} latestUploaded={timeAgo} />
      <GuestList messages={messages} latestMessage={latestMessage} />
    </div>
  );
};

export default MainGuestPage;
