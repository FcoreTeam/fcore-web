"use client";

import Brief from "@/components/brief/Brief";
import StoreProvider from "@/store/StoreProvider";

const page = () => {
  return (
    <StoreProvider>
      <Brief />
    </StoreProvider>
  );
};
export default page;
