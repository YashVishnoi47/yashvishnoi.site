"use client";
import React, { useEffect } from "react";
import Cal, { getCalApi } from "@calcom/embed-react";

const BookaCall = () => {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "30min" });
      cal("ui", {
        theme: "light",
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);

  return (
    <div className="bg-[#F9F9F9] mt-16 flex flex-col justify-center items-center h-fit w-full max-w-360 relative">
      <Cal
        namespace="30min"
        calLink="yash-vishnoi/30min"
        style={{ width: "100%", height: "100%", overflow: "scroll" }}
        config={{ layout: "month_view", theme: "light" }}
      />
    </div>
  );
};

export default BookaCall;
