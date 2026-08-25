"use client";
import React from "react";
import { motion, useMotionValueEvent } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import { FaLinkedin, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Image from "next/image";
import Link from "next/link";
import { BookText } from "lucide-react";
const easing = [0.19, 1, 0.22, 1];

const NavOptionsMenu = ({ open, setOpen }) => {
  const MotionLink = motion(Link);
  const iconClasses = "text-sec-text size-5";

  const socialLinks = [
    {
      name: "Blog",
      at: "What I have been up to",
      href: "/blog",
      icon: <BookText className={iconClasses} />,
    },
    {
      name: "X (Twitter)",
      at: "@Yash_Vishnoi7",
      href: "https://x.com/Yash_Vishnoi7",
      icon: <FaXTwitter className={iconClasses} />,
    },
    {
      name: "linkedin",
      at: "@yash-vishnoi-654318384",
      href: "https://www.linkedin.com/in/yash-vishnoi-654318384/",
      icon: <FaLinkedinIn className={iconClasses} />,
    },
  ];

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="w-full absolute left-1/2 -translate-x-1/2 top-0 h-full rounded-[12px] border border-main-border"
          onMouseEnter={() => open && setOpen(true)}
          onMouseLeave={() => open && setOpen(false)}
          initial={{
            backgroundColor: "#0B0D0E",
            width: "100%",
            height: "100%",
          }}
          animate={{
            height: "280px",
            width: "670px",
            backgroundColor: "#111417",
          }}
          exit={{
            height: "100%",
            width: "100%",
            backgroundColor: "#0B0D0E",
            transition: { duration: 0.7, delay: 0, ease: easing },
            opacity: 0,
          }}
          transition={{ duration: 0.7, ease: easing }}
        >
          {open && <div className="w-full h-[50px] shrink-0"></div>}
          <div className="w-full h-[80%] brder px-4 py-4 flex justify-center gap-4 items-center">
            {open && (
              <MotionLink
                href="/guestbook"
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: easing, delay: 0.4 }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.2, delay: 0, ease: easing },
                }}
                className="w-1/3 aspect-square bg-white/10 rounded-[12px] flex justify-center items-end overflow-hidden relative cursor-pointer group p-2"
              >
                <Image
                  src="/images/guestbook.png"
                  className="w-full h-full object-cover absolute inset-0 group-hover:scale-110 transition-all duration-300 ease-out"
                  unoptimized
                  width={50}
                  height={50}
                  alt="logo"
                />

                <div className="w-full flex flex-col gap- justify-around items-start relative z-2 shrink-0 whitespace-nowrap">
                  <span className="text-[16px] text-white font-medium">
                    Guestbook
                  </span>
                  <span className="text-[13px] text-sec-text">
                    Let me know you were here
                  </span>
                </div>

                <div className="h-1/2 group-hover:h-[70%] w-full bg-gradient-to-t from-black/90 via-black/35 to-transparent absolute bottom-0 z-1 transition-all duration-300 ease-out" />
              </MotionLink>
            )}

            {open && (
              <MotionLink
                className="w-1/3 aspect-square bg-white/10 rounded-[12px] flex justify-center items-end overflow-hidden relative cursor-pointer group p-2"
                href="/library/components"
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: easing, delay: 0.45 }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.2, delay: 0, ease: easing },
                }}
              >
                <Image
                  src="/images/library.png"
                  className="w-full h-full object-cover absolute inset-0 group-hover:scale-110 transition-all duration-300 ease-out"
                  unoptimized
                  width={50}
                  height={50}
                  alt="logo"
                />

                <div className="w-full flex flex-col gap- justify-around items-start relative z-2 shrink-0 whitespace-nowrap">
                  <span className="text-[16px] text-white font-medium">
                    Components
                  </span>
                  <span className="text-[13px] text-sec-text">
                    Reusable components
                  </span>
                </div>

                <div className="h-1/2 group-hover:h-[70%] w-full bg-gradient-to-t from-black/90 via-black/35 to-transparent absolute bottom-0 z-1 transition-all duration-300 ease-out" />
              </MotionLink>
            )}

            {open && (
              <motion.div
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: easing, delay: 0.45 }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.2, delay: 0, ease: easing },
                }}
                className="w-1/3 aspect-square flex flex-col justify-center items-end py-2 relative gap-2"
              >
                {socialLinks.map((item, idx) => (
                  <Link
                    href={item.href}
                    key={idx}
                    target="_blank"
                    className="w-full h-1/3 flex justify-center items-center gap-3 rounded-[4px] border border-sec-border bg-card-bg overflow-hidden p-2 hover:scale-105 transition-all duration-200 ease-out"
                  >
                    <div className="h-full flex justify-center items-center aspect-square shrink-0 bg-white/5 rounded-[4px] border border-sec-border">
                      {item.icon}
                    </div>
                    <div className="h-fit flex flex-col justify-start items-start w-full">
                      <span className="text-white text-[12px] font-medium capitalize">
                        {item.name}
                      </span>
                      <span className="text-sec-text text-[12px] line-clamp-1">
                        {item.at}
                      </span>
                    </div>
                  </Link>
                ))}
              </motion.div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default NavOptionsMenu;
