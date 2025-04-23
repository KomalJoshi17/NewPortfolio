"use client";

import Carousel from "../components/ui/carousel";

const projects = [
  {
    title: "EzzGrow - Social Media App",
    description: "Full-stack app to connect, post & grow socially.",
    image: "/assets/project1.png",
    link: "https://ezzgrow.vercel.app/",
  },
  {
    title: "E-Commerce Store",
    description: "Modern store with seamless UX & Stripe payments.",
    image: "/assets/project2.png",
    link: "https://clone1-nine.vercel.app/",
  },
  {
    title: "Weather Forecast App",
    description: "Real-time weather dashboard using OpenWeather API.",
    image: "/assets/project3.png",
    link: "https://weather-app-pk-52.vercel.app/",
  },
];

export function CarouselDemo() {
  return (
    <section
      id="projects"
      className="w-full min-h-screen bg-[#0B0D10] px-6 py-24 scroll-mt-10 -mt-5"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-5xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-500">
          My Projects
        </h2>
        <p className="text-gray-400 text-lg mb-16">
          A collection of web apps I've crafted using modern tools & tech.
        </p>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Carousel key={index} index={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
