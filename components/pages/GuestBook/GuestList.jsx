"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import GithibLoginButton from "./GithibLoginButton";
import { signOut, useSession } from "next-auth/react";
import { Send } from "lucide-react";
import { toast } from "@/components/ui/toast";

const GuestList = () => {
  const { data: session, status } = useSession();
  const [dataMessages, setDataMessages] = useState();
  const [messages, setMessages] = useState([]);

  const handleCreateMessage = async (e) => {
    e.preventDefault();
    if (!dataMessages) {
      console.log("NO message");
      return;
    }
    if (!session) return;

    try {
      const finalData = {
        name: session?.user?.name,
        message: dataMessages,
        image: session?.user?.image,
        userId: session?.user?.id,
      };

      const res = await fetch("/api/createMessage", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(finalData),
      });

      if (!res.ok) {
        const error = await res.json();
        console.log(error);
        return;
      }

      const message = await res.json();
      if (message) {
        toast.add({
          type: "success",
          description: "Thank you for your Review.",
        });
        setMessages((prev) => [...prev, message.message]);
        setDataMessages("");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const res = await fetch("/api/getMessages", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (!res.ok) {
          const error = await res.json();
          console.log(error);
          return;
        }

        const mes = await res.json();

        setMessages(mes.messages);
      } catch (error) {
        console.log(error);
      }
    };

    fetchMessages();
  }, []);

  const renderInputArea = () => {
    if (status === "loading") {
      return (
        <div className="w-full h-full flex justify-center items-center text-main-text">
          Loading...
        </div>
      );
    }
    return (
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

        <GithibLoginButton />
      </div>
    );
  };

  return (
    <div className="w-full grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 justify-start items-start">
      <div className="w-full min-h-[220px] flex gap-2 flex-col  justify-start items-start border border-accent-border p-6 rounded-[8px] bg-accent-tint">
        <p className="text-[20px] text-main-text font-head italic">
          "Leave something behind"
        </p>
        <p className="text-[14px] text-sec-text">
          Sign in to post — takes a few seconds.
        </p>

        {!session ? (
          renderInputArea()
        ) : (
          <form
            onSubmit={handleCreateMessage}
            className="w-full flex flex-col gap-4"
          >
            <textarea
              placeholder="Leave something behind"
              name="message"
              id="message"
              value={dataMessages}
              onChange={(e) => setDataMessages(e.target.value)}
              className="w-full min-h-[100px] border mt-4 border-accent-border outline-none rounded-[8px] bg-accent-tint p-4 hsb2 text-main-text placeholder:text-[14px]"
            />
            <button
              type="submit"
              className="py-2 w-full flex justify-center items-center gap-2 cursor-pointer rounded-[8px] transition-all duration-300 ease-out text-[14px] text-main-text font-label bg-accent-tint hover:bg-accent-tint/50 border border-accent-border hover:border-accent-border group "
            >
              Post
              <Send size={18} />
            </button>
          </form>
        )}
      </div>

      {messages.map((item, idx) => (
        <div
          key={idx}
          className="w-full min-h-[220px] flex gap-2 flex-col justify-between itesta border border-main-border p-6 rounded-[8px] bg-sec-bg hover:border-accent-border transition-all duration-200 ease-out shadow-md shadow-bg-main hover:shadow-accent-tint"
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
      ))}
    </div>
  );
};

export default GuestList;
