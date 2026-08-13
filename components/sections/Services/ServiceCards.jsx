import ConnectPopOver from "@/components/shared/ConnectPopOver";
import HeadingCard from "@/components/ui/HeadingCard";
import Tag from "@/components/ui/Tag";
import { Check, Cross, CrossIcon, X } from "lucide-react";
import Link from "next/link";
import React from "react";

const ServiceCards = () => {
  return (
    <div
      id="services"
      className="w-full max-w-360 h-fit flex flex-col gap-16 justify-center items-center min-h-165 borde border-black mt-32 overflow-hidden"
    >
      <HeadingCard
        head={"Websites tailored to your goals"}
        subHead={"Choose a plan that fits your business stage"}
      />

      <div className="w-full flex md:flex-row flex-col gap-8 justify-center items-center">
        <div className="lg:w-[42%] w-full lg:h-216.5 min-h-216.5 p-6 border flex flex-col justify-between border-black/40 rounded-xl bg-bg-light gap-10">
          <div className="gap-2 flex flex-col justify-start items-start w-full">
            <Tag text={"Best for small Businesses"} />
            <h4 className="lg:text-[32px] text-text text-[30px] lg:text-left font-medium text-start">
              Business Starter Website
            </h4>
            <span className="text-[14px] text-text-muted2 font-light text-left">
              Perfect for small businesses & personal brands who need a strong,
              trustworthy online presence.
            </span>
          </div>

          <div className="w-full h-[70%] border-black flex flex-col gap-4 jucctify-start items-start">
            {[
              "Up to 5 strategic Website pages",
              "Custom UI design tailored for your website",
              "Modern, mobile-optimized design for all devices",
              "Lead capture forms with email integration",
              "SEO-ready structure for better visibility",
              "Fast-loading optimized performance",
              "Custom Code and file based CMS integration",
              "Delivered within 10–15 business days",
            ].map((item, index) => {
              return (
                <div
                  key={index}
                  className="w-full flex justify-start items-center gap-2"
                >
                  <div className="w-5 h-5 bg-[#7C3AED] rounded-full border-black flex justify-center items-center">
                    <Check size={10} className="text-white" />
                  </div>
                  <span className="text-text lg:text-[15px] text-[12px] font-">
                    {item}
                  </span>
                </div>
              );
            })}
          </div>

          <div className="w-full flex flex-col gap-6 h-fit">
            <ConnectPopOver>
              <div className="w-full text-text flex justify-center items-center border border-black py-3 rounded-md cursor-pointer shadow-sm shadow-white hover:shadow-[#7C3AED]/50 transition-all duration-300 ease-in-out inset-shadow-sm inset-shadow-black/10 hover:inset-shadow-white text-[15px]">
                Start your project
              </div>
            </ConnectPopOver>

            <div className="flex flex-col gap-3 justify-start items-start w-full">
              <span className="text-text-muted text-[14px]">
                Questions?{" "}
                <span className="text-text font-medium cursor-pointer hover:underline transition-all duration-300 ease-in-out">
                  Chat with us
                </span>
              </span>
              <span className="text-text text-[14px]">
                or email us at{" "}
                <Link
                  data-text="Email me"
                  href="mailto:hello@yashvishnoi.site"
                  className="text-text font-medium"
                >
                  hello@yashvishnoi.site
                </Link>
              </span>
            </div>
          </div>
        </div>

        <div className="lg:w-[45%] w-full lg:h-220 min-h-216.5 p-1.5 shadow-2xl shadow-black/15 rounded-xl bg-[#303030]">
          <div className="w-full flex flex-col justify-between items-center h-full p-6 border-black rounded-lg gap-10 bg-white relative">
            <div className="bg-[#303030] text-white font- w-fit rounded-bl-xl px-6 py-2 text-xs absolute right-0 top-0">
              Best for Growth
            </div>

            <div className="gap-2 flex flex-col justify-start items-start w-full">
              <Tag text={"Engaging. Scalable. Conversion-Focused."} />
              <h4 className="lg:text-[32px] text-[30px] text-text lg:text-left font-medium text-start">
                Premium Business Website
              </h4>
              <span className="text-[15px] font-light text-text-muted2 text-left">
                For brands that want to stand out, build authority, and convert
                more visitors into customers.
              </span>
            </div>

            <div className="w-full h-[70%]  border-black flex flex-col gap-4 jucctify-start items-start">
              <span className="text-[15px] text-text mb-2 font-bold">
                Everything in Tier 1, plus:
              </span>
              {[
                "8–12 strategically structured pages",
                "Custom-designed UI components with interactive animations",
                "Blog or dynamic content system setup",
                "Advanced technical & on-page SEO optimization",
                "Core Web Vitals & performance optimization",
                "Scalable architecture built for future growth",
                "CMS dashboard for easy content management",
                "Priority project timeline (20–30 business days)",
                "10 days of post-launch priority support",
              ].map((item, index) => {
                return (
                  <div
                    key={index}
                    className="w-full flex justify-start items-center gap-2"
                  >
                    <div className="w-5 h-5 bg-[#7C3AED] rounded-full border-black text-black flex justify-center items-center">
                      <Check size={12} className="text-white" />
                    </div>
                    <span className="text-text lg:text-[15px] text-[15px] font-">
                      {item}
                    </span>
                  </div>
                );
              })}
            </div>

            <div className="w-full flex flex-col gap-6 h-fit">
              <ConnectPopOver>
                <div className="w-full text-text flex justify-center items-center border border-black py-3 rounded-md cursor-pointer shadow-sm shadow-white hover:shadow-[#7C3AED]/50 transition-all duration-300 ease-in-out inset-shadow-sm inset-shadow-black/10 hover:inset-shadow-white ">
                  Start your project
                </div>
              </ConnectPopOver>

              <div className="flex flex-col gap-3 justify-start items-start w-full">
                <span className="text-text-muted text-[16px]">
                  Questions?{" "}
                  <span className="text-text font-medium cursor-pointer hover:underline transition-all duration-300 ease-in-out">
                    Chat with us
                  </span>
                </span>
                <span className="text-text text-[16px]">
                  or email us at{" "}
                  <Link
                    data-text="Email me"
                    href="mailto:hello@yashvishnoi.site"
                    className="text-text font-medium"
                  >
                    hello@yashvishnoi.site
                  </Link>
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:w-[42%] w-full lg:h-216.5 min-h-216.5 p-6 border flex flex-col justify-between border-black/40 rounded-xl bg-bg-light gap-10">
          <div className="gap-2 flex flex-col justify-start items-start w-full">
            <Tag text={"Best for small Businesses"} />
            <h4 className="lg:text-[32px] text-text text-[30px] lg:text-left font-medium text-start">
              Advanced Growth Website
            </h4>
            <span className="text-[14px] text-text-muted2 font-light text-left">
              Built to scale your business and maximize conversions.
            </span>
          </div>

          <div className="w-full h-[70%]  border-black flex flex-col gap-4 jucctify-start items-start">
            <span className="text-[15px] text-text mb-2 font-bold">
              Everything in Tier 1 and Tier 2, plus:
            </span>
            {[
              "Conversion strategy planning ",
              "Funnel-based page structure (not just pages)",
              "Advanced caching + performance tuning",
              "Analytics setup (Google Analytics / tracking)",
              "Core Web Vitals & performance optimization",
              "Scalable architecture for future expansion",
              "30 days of post-launch priority support",
              "Priority project timeline (60–90 business days)",
              "Unlimited revisions",
            ].map((item, index) => {
              return (
                <div
                  key={index}
                  className="w-full flex justify-start items-center gap-2"
                >
                  <div className="w-5 h-5 bg-[#7C3AED] rounded-full border-black text-black flex justify-center items-center">
                    <Check size={12} className="text-white" />
                  </div>
                  <span className="text-text lg:text-[15px] text-[15px] font-">
                    {item}
                  </span>
                </div>
              );
            })}
          </div>

          <div className="w-full flex flex-col gap-6 h-fit">
            <ConnectPopOver>
              <div className="w-full text-text flex justify-center items-center border border-black py-3 rounded-md cursor-pointer shadow-sm shadow-white hover:shadow-[#7C3AED]/50 transition-all duration-300 ease-in-out inset-shadow-sm inset-shadow-black/10 hover:inset-shadow-white text-[15px]">
                Start your project
              </div>
            </ConnectPopOver>

            <div className="flex flex-col gap-3 justify-start items-start w-full">
              <span className="text-text-muted text-[14px]">
                Questions?{" "}
                <span className="text-text font-medium cursor-pointer hover:underline transition-all duration-300 ease-in-out">
                  Chat with us
                </span>
              </span>
              <span className="text-text text-[14px]">
                or email us at{" "}
                <Link
                  data-text="Email me"
                  href="mailto:hello@yashvishnoi.site"
                  className="text-text font-medium"
                >
                  hello@yashvishnoi.site
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCards;
