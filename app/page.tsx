"use client";
import ImageSlider from "@/components/ImageSlider";
import ServiceCard from "@/components/Post";
import { useUser } from "@clerk/nextjs";

export default function Example() {
  const { isLoaded, isSignedIn, user } = useUser();
  const services = [
    {
      title: "Home Cleaning",
      cost: "$50",
      ecoFriendly: true,
      imageSrc:
        "https://i.pinimg.com/736x/ca/22/a5/ca22a51e84e4acd0a837800b8bbed8f1.jpg",
    },
    {
      title: "Air-Conditioning Service",
      cost: "$70",
      ecoFriendly: false,
      imageSrc:
        "https://i.pinimg.com/474x/51/63/74/5163744d63c43361fc28bd3964f92d29.jpg",
    },
    {
      title: "Furniture Repair",
      cost: "$40",
      ecoFriendly: true,
      imageSrc:
        "https://i.pinimg.com/736x/6d/71/a7/6d71a726cc9b01d371a5364b375fe446.jpg",
    },
    {
      title: "Gardening",
      cost: "$30",
      ecoFriendly: true,
      imageSrc:
        "https://i.pinimg.com/474x/17/eb/94/17eb9442675c702bd29b1651a6b51bb1.jpg",
    },
    {
      title: "Plumbing",
      cost: "$60",
      ecoFriendly: false,
      imageSrc:
        "https://i.pinimg.com/474x/8b/e9/1a/8be91a33929660b1f32111173c176aa6.jpg",
    },
    {
      title: "Electrical Services",
      cost: "$80",
      ecoFriendly: false,
      imageSrc:
        "https://i.pinimg.com/474x/70/d2/a5/70d2a5bfb09edcb66b7507e1a3e199ec.jpg",
    },
  ];

  if (!isLoaded || !isSignedIn) {
    return null;
  }

  return (
    <main className="flex flex-col flex-1 w-full items-center">
      {/* Image Slider */}
      <div className="w-full">
        <ImageSlider />
      </div>
      <div>
        {/* Welcome Text */}
        <div className="mt-8 px-8">
          <h1 className="text-3xl font-light">Hello, {user.firstName}</h1>
        </div>

        {/* Service Cards Section */}
        <div className="mt-10 px-8">
          <h2 className="text-xl font-semibold mb-6">Available Services</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-3 gap-4">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                cost={service.cost}
                ecoFriendly={service.ecoFriendly}
                imageSrc={service.imageSrc}
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed etiam, quam in senectute sit vigiliae. Quae cum dixisset, finem ille."
              />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
