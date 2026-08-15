import { signIn } from "next-auth/react"
import Image from "next/image";
import React from "react";

const GithibLoginButton = () => {
  return (
    <form
      action={async () => {
        await signIn("github");
      }}
    >
      <button
        type="submit"
        className="py-2 w-full flex justify-center items-center gap-4 cursor-pointer rounded-[8px] transition-all duration-300 ease-out text-[14px] text-main-text font-label hover:bg-accent-tint border border-main-border hover:border-accent-border"
      >
        <Image src="/socials/github.svg" width={18} height={18} alt="google" />
        Continue with Google
      </button>
    </form>
  );
};

export default GithibLoginButton;
