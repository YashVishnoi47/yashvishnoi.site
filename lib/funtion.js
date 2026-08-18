import { ConnectDB } from "./Database/connectDB";
import MessageSchema from "./Database/models/MessageSchema";

export const CreateMessage = async ({ data }) => {
  try {
    await ConnectDB();

    const newMessage = await MessageSchema.create({
      Name: data.name,
      message: data.message,
      image: data.image,
      userId: data.userId,
    });

    if (!newMessage) return false;

    return newMessage;
  } catch (error) {
    console.log(error);
  }
};

export const GetMessages = async () => {
  try {
    await ConnectDB();

    const messages = await MessageSchema.find().lean().sort({ createdAt: -1 });

    if (!messages) return false;


    return messages.map((message) => ({
      _id: message._id.toString(),
      Name: message.Name,
      message: message.message,
      image: message.image,
      userId: message.userId?.toString(),
      createdAt: message.createdAt?.toISOString(),
      updatedAt: message.updatedAt?.toISOString(),
    }));
  } catch (error) {
    console.log(error);
  }
};
