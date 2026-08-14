"use client";
import { getCalApi } from "@calcom/embed-react";
import React, { useEffect } from "react";

const BookaCallPopUp = ({ children }) => {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "bookfreewebsite" });
      cal("ui", { hideEventTypeDetails: false, layout: "month_view" });
    })();
  }, []);
  return (
    <div
      data-cal-namespace="bookfreewebsite"
      data-cal-link="yash-vishnoi-ou1y8q/bookfreewebsite"
      data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'
    >
      {children}
    </div>
  );
};

export default BookaCallPopUp;
