import ComingSoon from "@/components/layout/ComingSoon";
import CodeBox from "@/components/pages/CodePage/CodeBox";
import LibHeading from "@/components/pages/LibraryPage/LibHeading";
import { getComponentCode } from "@/lib/getCode";
import { ButtonsRegistry } from "@/LibraryDatabase/registry";
import { notFound } from "next/navigation";
import React from "react";

const page = async ({ params }) => {
  const { slug } = await params;
  const AllRegistries = [...ButtonsRegistry];
  const component = AllRegistries.find(
    (item) =>
      item.name.toLowerCase().replace(" ", "-") ===
      decodeURIComponent(slug.toLowerCase().replace(" ", "-")),
  );
  const code = await getComponentCode(component.code);

  if (!component) {
    return notFound();
  }

  if (process.env.NEXT_PUBLIC_ENV === "prod") {
    return <ComingSoon />;
  }

  return (
    <div className="w-full flex flex-col justify-start items-center min-h-screen">
      <div className="w-[80%] h-fit flex flex-col gap-12 justify-start items-start">
        <LibHeading
          heading={component.name}
          subHeading={component.description}
          className={"md:w-[80%]"}
        />

        <CodeBox code={code} component={component} />
      </div>
    </div>
  );
};

export default page;
