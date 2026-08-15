import { CreateMessage } from "@/lib/funtion";
import { NextResponse } from "next/server";

export const POST = async (req) => {
  try {
    const data = await req.json();
    if (!data.name || !data.message || !data.image) {
      return NextResponse.json({
        message: "Please fill all the fields",
        status: 400,
      });
    }

    const newMessage = await CreateMessage(data);

    if (!newMessage) {
      return NextResponse.json({ message: "Message not created", status: 400 });
    }

    return NextResponse.json({ message: newMessage, status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Something went wrong", status: 500 });
  }
};
