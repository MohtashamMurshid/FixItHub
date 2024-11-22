"use client";
import ImageSlider from "@/components/ImageSlider";
import ServicesPage from "@/components/ui/ServicesPage";
import { useUser } from "@clerk/nextjs";
import { FaTools } from "react-icons/fa";

export default function Example() {
  const { isLoaded, isSignedIn, user } = useUser();

  if (!isLoaded || !isSignedIn) {
    return null;
  }

  return (
    <main className="flex flex-col items-center flex-1 ">
      <ImageSlider />
      <div className="mt-4">
        <h1 className="text-2xl font-bold ">Hello, {user.firstName}</h1>
        <h2 className="text-xl flex flex-row gap-2 items-center  justify-center">
          Welcome to FixItHub <FaTools />
        </h2>
        <div className="flex flex-col justify-start  ">
          <ServicesPage title="Our Services" />
        </div>
      </div>
    </main>
  );
}
