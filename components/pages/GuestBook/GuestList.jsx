"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import GithibLoginButton from "./GithibLoginButton";
import { signIn, signOut, useSession } from "next-auth/react";
import { Send } from "lucide-react";
import { toast } from "@/components/ui/toast";
import MessageBox from "./MessageBox";
import { useRouter } from "next/navigation";
import Spinner from "@/assets/svg/Spinner";

const GuestList = ({ messages, latestMessage, loading }) => {
  const router = useRouter();
  const { data: session, status } = useSession();
  const [dataMessages, setDataMessages] = useState();

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

        setDataMessages("");
        router.refresh();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const renderInputArea = () => {
    if (status === "loading" || loading) {
      return (
        <div className="w-full h-full flex justify-center items-center text-main-text">
          <Spinner height={40} width={40} />
        </div>
      );
    }

    return (
      <div className="w-full flex flex-col gap-2 mt-4">
        <button
          onClick={() => signIn("google")}
          className="py-2 w-full flex justify-center items-center gap-4 cursor-pointer rounded-[8px] transition-all duration-300 ease-out text-[14px] text-main-text font-label hover:bg-accent-tint border border-main-border hover:border-accent-border"
        >
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
    <div className="w-full md:columns-3 sm:columns-2 columns-1 gap-x-6 justify-center items-center">
      <div className="w-full min-h-[220px] flex gap-2 flex-col  justify-start items-start border border-accent-border p-6 rounded-[8px] bg-accent-tint break-inside-avoid mb-6">
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
        <MessageBox key={idx} item={item} />
      ))}
    </div>
  );
};

export default GuestList;
