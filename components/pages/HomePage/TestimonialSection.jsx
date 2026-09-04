import BookaCallPopUp from "@/components/ui/BookaCallPopUp";
import PrimaryButtonV2 from "@/components/ui/PrimaryButtonV2";
import { User } from "lucide-react";
import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";

const TestimonialSection = () => {
  const testies = [
  {
    name: "Alvin Okoli",
    positions: "Backend Developer",
    image: "/testimonials/alvin.webp",
    message:
      "It has been a pleasure working alongside Yash. He is a talented developer with a rare, keen eye for design. He consistently translates visual concepts into clean, intuitive UI without missing a beat. Beyond his technical and aesthetic skills, he makes everyday collaboration effortless as he solves problems quickly, communicates clearly, and elevates the quality of every project he touches. Any team would be lucky to have him!",
  },
  {
    name: "Mohit Kar",
    positions: "Founder of Wiscripts",
    image: "/testimonials/Wiscripts.png",
    message:
      "Yash is a great developer. He is a talented developer with a rare, and unique talent for creating something that is both visually stunning and functional.",
  },
  {
    name: "Danial R.",
    positions: "Law & Founder, Law Firm",
    image: "/testimonials/danial.jpg",
    message:
      "I had the best freelance experience with Yash. He was very responsive and professional. He is a talented developer. If you are a Law Firm Looing for a talented developer, Yash is the one. He is a best Developer you can hire.",
  },
  {
    name: "Michael Anderson",
    positions: "Managing Partner, Law Group",
    image: "/testimonials/Michael.jpg",
    message:
      "Yash did a really good job on our website. We wanted something professional without making it look like every other law firm website, and he understood that right away. He was easy to work with, made the changes we asked for, and paid attention to the small details. Very happy with how everything turned out.",
  },
  {
    name: "Sarah Mitchell",
    positions: "Attorney & Founder, Law Firm",
    image: "/testimonials/sarah.jpg",
    message:
      "Working with Yash was honestly much easier than I expected. He took our ideas and turned them into a website that actually feels like our firm. Communication was great throughout the project and he was always quick to respond when we had questions. The final website looks clean, modern and most importantly, our clients can actually find what they need.",
  },
  {
    name: "James Carter",
    positions: "Partner, Carter & Associates",
    image: "/testimonials/James.jpg",
    message:
      "We needed a new website that looked more professional and made it easier for potential clients to contact us. Yash understood what we were trying to achieve and delivered exactly that. He was patient with our feedback and made several small improvements along the way that made a big difference. I would definitely recommend working with him.",
  },
];

  return (
    <div className="w-full h-fit flex flex-col gap-10 justify-center items-center">
      <Marquee
        gradient={true}
        gradientColor={"#0B0D0E"}
        gradientWidth={15}
        speed={50}
        autoFill={true}
        pauseOnHover={true}
        className={"w-full overflow-y-hidden"}
      >
        {testies.map((item, idx) => (
          <div
            key={idx}
            className="h-[500px] md:w-[460px] w-[360px] flex flex-col justify-between items-center bg-accent-tint border border-accent-border rounded-[8px] p-6 mx-2 hover:scale-[0.99] transition-all duration-300 ease-in-out overflow-hidden"
          >
            <p className="text-[18px] text-white/85 tracking-wide leading-relaxed text-pretty">
              {item.message}
            </p>

            <div className="w-full flex gap-4 justify-start items-start">
              <div className="size-10 rounded-full flex  justify-center items-center bg-white overflow-hidden border border-border-main">
                {item.image.length > 0 ? (
                  <Image
                    src={item.image || "/testimonials/alvin.webp"}
                    className="w-full h-full object-cover rounded-full"
                    width={30}
                    height={30}
                    alt="image"
                  />
                ) : (
                  <User />
                )}
              </div>
              <div className="flex flex-col  justify-start items-start">
                <p className="text-[14px] font-medium text-white">
                  {item.name}
                </p>
                <p className="text-[14px] font-medium text-sec-text">
                  {item.positions}
                </p>
              </div>
            </div>
          </div>
        ))}
      </Marquee>

      <BookaCallPopUp>
        <PrimaryButtonV2 text="Work with me" className={"w[190px]"} />
      </BookaCallPopUp>
      {/* right */}
    </div>
  );
};

// <div className="h-full w-[32%] flex flex-col justify-center items-center gap-4">
//   <div className="w-full h-1/2 flex flex-col justify-between items-center border border-main-border bg-card-bg rounded-[4px] p-4">
//     <p className="text-[16px] text-white/70 tracking-wide leading-relaxed text-pretty">
//       "Amazing developer"
//     </p>
//     <div className="w-full flex gap-2 justify-start items-start">
//       <div className="size-10 rounded-full bg-white/30" />
//       <div className="flex flex-col  justify-start items-start">
//         <p className="text-[14px] font-medium text-white">Jeffrey Stoller</p>
//         <p className="text-[14px] font-medium text-sec-text">
//           Lawer
//         </p>
//       </div>
//     </div>
//   </div>

//   <div className="w-full h-1/2 flex flex-col justify-between items-center border border-main-border bg-card-bg rounded-[4px] p-4">
//     <p className="text-[16px] text-white/70 tracking-wide leading-relaxed text-pretty">
//       "It has been a pleasure working alongside Yash. He is a talented
//       developer with a rare, keen eye for design."
//     </p>
//     <div className="w-full flex gap-2 justify-start items-start">
//       <div className="size-10 rounded-full bg-white/30" />
//       <div className="flex flex-col  justify-start items-start">
//         <p className="text-[14px] font-medium text-white">Mohit Kar</p>
//         <p className="text-[14px] font-medium text-sec-text">
//           Founder of Wiscripts
//         </p>
//       </div>
//     </div>
//   </div>
// </div>
export default TestimonialSection;
