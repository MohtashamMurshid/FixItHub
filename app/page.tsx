"use client";
import { useUser } from "@clerk/nextjs";
import { FaTools } from "react-icons/fa";

export default function Example() {
  const { isLoaded, isSignedIn, user } = useUser();

  if (!isLoaded || !isSignedIn) {
    return null;
  }

  return (
    <main className="flex flex-col items-center">
      <h1 className="text-2xl font-bold">Hello, {user.firstName} </h1>
      <h2 className="text-xl flex flex-row gap-2 items-center  justify-center">
        Welcome to FixItHub <FaTools />
      </h2>
    </main>
  );
}
