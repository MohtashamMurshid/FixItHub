import { UserProfile } from "@clerk/nextjs";
import React from "react";

export default function page() {
  return (
    <div className="flex h-screen justify-center ">
      <UserProfile routing="hash" />
    </div>
  );
}
