import React from "react";
import {
  Globe,
  ShoppingCart,
  Smartphone,
  Palette,
  Search,
  Wrench,
  Rocket,
  Bot,
} from "lucide-react";
import Link from "next/link";
import PrimaryButtonV2 from "@/components/ui/PrimaryButtonV2";

const ServicesSection = () => {
  const IconStyles = "size-4 text-accent-main";

  const Services = [
    {
      icon: <Globe className={IconStyles} />,
      heading: "Custom Websites",
      subheading:
        "A site built around your business, not a template — fast, clean, and yours.",
    },
    {
      icon: <ShoppingCart className={IconStyles} />,
      heading: "E-commerce Stores",
      subheading:
        "From product pages to checkout — a store that actually sells while you sleep.",
    },
    {
      icon: <Smartphone className={IconStyles} />,
      heading: "Responsive Design",
      subheading:
        "Looks sharp on phones, tablets, and desktops — no zooming, no squinting.",
    },
    {
      icon: <Palette className={IconStyles} />,
      heading: "UI/UX Design",
      subheading:
        "Interfaces people enjoy using, with a flow that just makes sense.",
    },
    {
      icon: <Search className={IconStyles} />,
      heading: "SEO Optimization",
      subheading: "Built to get found on Google, not just built to look good.",
    },
    {
      icon: <Wrench className={IconStyles} />,
      heading: "Website Maintenance",
      subheading:
        "Updates, fixes, and check-ins — so your site stays fast and never breaks silently.",
    },
    // {
    //   icon: <Rocket className={IconStyles} />,
    //   heading: "Landing Pages",
    //   subheading:
    //     "High-converting pages built for launches, campaigns, and ads.",
    // },
    // {
    //   icon: <Bot className={IconStyles} />,
    //   heading: "Automation & Integrations",
    //   subheading:
    //     "Connect your tools and cut the repetitive busywork out of your day.",
    // },
    // {
    //   icon: <Bot className={IconStyles} />,
    //   heading: "Automation & Integrations",
    //   subheading:
    //     "Connect your tools and cut the repetitive busywork out of your day.",
    // },
  ];
  return (
    <div id="work" className="w-full grid grid-rows-2 gap-20">
      <div className="w-full grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 justify-center items-center">
        {Services.map((item, idx) => (
          <div
            key={idx}
            className="flex gap-3 w-full flex-col justify-start items-start sm:px-0 px-2 py-4"
          >
            <div className="size-10 rounded-[4px] flex justify-center items-center border border-main-border bg-sec-bg">
              {item.icon}
            </div>

            <p className="text-[20px] font-head text-main-text mt-3">
              {item.heading}
            </p>

            <p className="md:text-[16px] text-[14px] text-sec-text text-pretty tracking-wide leading-[1.5]">
              {item.subheading}
            </p>
          </div>
        ))}
      </div>

      <div className="w-full h-100 bg-card-bg border border-main-border rounded-[12px] flex justify-between items-center md:flex-row flex-col-reverse">
        <div
          className={
            "h-full md:w-[55%] w-full flex gap-4 flex-col justify-start items-start md:p-10 p-8"
          }
        >
          <p className="text-[12px] text-accent-main font-label uppercase tracking-wider">
            GET STARTED
          </p>
          <p className="text-main-text font-head text-[28px] text-pretty">
            See Your Site Live — Before You Pay a Dime
          </p>
          <p className="text-[16px] w-[90%] text-sec-text text-pretty tracking-wide leading-[1.5]">
            Book a free call. If it's a fit, I'll build your landing page first
            — you only move forward if you like what you see.
          </p>

          <Link href="/" className={"mt-4"}>
            <PrimaryButtonV2 text={"Start a Project"} />
          </Link>
        </div>
        <div
          className={"md:w-[45%] w-full md:h-full bg-sec-bg border-l border-main-border"}
        ></div>
      </div>
    </div>
  );
};

export default ServicesSection;
