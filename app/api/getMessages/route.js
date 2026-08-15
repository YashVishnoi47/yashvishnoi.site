import { GetMessages } from "@/lib/funtion";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    const messages = await GetMessages();
    if (!messages)
      return NextResponse.json({ message: "No messages found", status: 400 });
    return NextResponse.json({ messages });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Something went wrong", status: 500 });
  }
};
