"use client";

import { useState } from "react";
import TopBar from "@/components/TopBar";

interface MixBoxInterface {
  title: string;
  imageUrl: string;
  color: string;
}

const MixBox = ({ title, imageUrl, color }: MixBoxInterface) => {
  return (
    <div className="relative rounded-s-lg overflow-clip">
      <img src={imageUrl} className="w-full" />
      <div className="absolute bottom-0 left-0 w-full text-white flex flex-col items-end">
        <div className="flex flex-row pt-4 pb-4 gap-5 items-center justify-start w-full">
          <div className="h-12 w-2" style={{ backgroundColor: color }}></div>
          <p className="text-white font-bold lg:text-2xl md:text-lg sm:text-xs">
            {title}
          </p>
        </div>
        <div className="h-2 w-full" style={{ backgroundColor: color }} />
      </div>
    </div>
  );
};

const MixCard = ({ title, imageUrl, color }: MixBoxInterface) => {
  return (
    <div className="bg-[#00000040] rounded-s-lg rounded-e-lg overflow-clip max-h-24  ">
      <div className="flex flex-row items-start items-center gap-10 justify-start h-full">
        <img src={imageUrl} className="h-full" />
        <p className="text-white font-bold lg:text-2xl md:text-lg sm:text-xs">
          {title}
        </p>
      </div>
    </div>
  );
};

export default function Home() {
  const [currentDate, setCurrentDate] = useState(new Date());

  const mixes = [
    {
      title: "Chill Mix",
      artist: ["The Weeknd, Taylor Swift, Travis Scott"],
      color: "#A13890",
      imageUrl:
        "https://cdns-images.dzcdn.net/images/cover/4508090cc8470e71e12480b7deeda0b4/350x350.jpg",
    },
    {
      title: "Pop Mix",
      artist: ["The Weeknd, Taylor Swift, Travis Scott"],
      color: "#F8E558",
      imageUrl:
        "https://cdns-images.dzcdn.net/images/cover/4508090cc8470e71e12480b7deeda0b4/350x350.jpg",
    },
    {
      title: "Pheelz Mix",
      artist: ["The Weeknd, Taylor Swift, Travis Scott"],
      color: "#6BDF92",
      imageUrl:
        "https://cdns-images.dzcdn.net/images/cover/4508090cc8470e71e12480b7deeda0b4/350x350.jpg",
    },
    {
      title: "Indie Mix",
      artist: ["The Weeknd, Taylor Swift, Travis Scott"],
      color: "#D13923",
      imageUrl:
        "https://cdns-images.dzcdn.net/images/cover/4508090cc8470e71e12480b7deeda0b4/350x350.jpg",
    },
    {
      title: "Bhindie Mix",
      artist: ["The Weeknd, Taylor Swift, Travis Scott"],
      color: "#D13923",
      imageUrl:
        "https://cdns-images.dzcdn.net/images/cover/4508090cc8470e71e12480b7deeda0b4/350x350.jpg",
    },
  ];

  return (
    <main className="flex min-h-screen flex-col items-center bg-gradient-to-b from-[#3333A3] to-[#121212]">
      <TopBar />

      <div className="flex flex-col justify-between w-full gap-5 p-12 ">
        <p className="text-white text-4xl font-bold ">
          {currentDate.getHours() > 12 ? "Good afternoon" : "Good morning"}
        </p>

        <div className="grid md:grid-cols-2 sm:grid-col-1 gap-6 ">
          {mixes.map((item, index) => (
            <MixCard
              key={`mix-${index}`}
              title={item.title}
              imageUrl={item.imageUrl}
              color={item.color}
            />
          ))}
        </div>
      </div>

      <div className="flex flex-col justify-between w-full gap-5 p-12 ">
        <p className="text-white text-4xl font-bold ">Your Top Mixes</p>

        <div className="grid grid-cols-4 gap-12 ">
          {mixes.map((item, index) => (
            <MixBox
              key={`mix-${index}`}
              title={item.title}
              imageUrl={item.imageUrl}
              color={item.color}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
