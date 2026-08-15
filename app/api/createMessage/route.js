import { CreateMessage } from "@/lib/funtion";
import { NextResponse } from "next/server";

export const POST = async (req) => {
  try {
    const finalData = await req.json();
    if (!finalData.name || !finalData.message || !finalData.image || !finalData.userId) {
      return NextResponse.json(
        {
          message: "Please fill all the fields",
        },
        { status: 400 },
      );
    }

    const newMessage = await CreateMessage({ data: finalData });

    if (!newMessage) {
      return NextResponse.json(
        { message: "Message not created" },
        { status: 400 },
      );
    }

    return NextResponse.json({ message: newMessage }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 },
    );
  }
};
