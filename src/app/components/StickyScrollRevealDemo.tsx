

"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

export function StickyScrollRevealDemo() {
  const content = [
    {
      title: "LearnYard DSA Course",
      description:
        "Certified for successful completion of the 100% Job Ready DSA Course by LearnYard, demonstrating strong foundations in Data Structures and Algorithms essential for technical interviews and real-world problem solving.",
      content: (
        <div className="flex h-48 w-full items-center justify-center bg-gray-700">
          <img
            src="/assets/certificates/webdev.png"
            alt="Web Development Certificate"
            className="w-full object-cover rounded-md"
          />
        </div>
      ),
    },
    {
      title: "IBM DevOps and Software Engineering (Coursera)",
      description:
        "Earned IBM’s Professional Certificate for mastering DevOps and Cloud Engineering tools like Docker, Kubernetes, GitHub, and CI/CD pipelines. Built hands-on experience in Agile, Linux scripting, and microservices development.",
      content: (
        <div className="flex h-48 w-full items-center justify-center bg-gray-700">
          <img
            src="/assets/certificates/react.png"
            alt="React Certificate"
            className="w-full object-cover rounded-md"
          />
        </div>
      ),
    },
    {
      title: "Hack-a-Throne 1.0 - GeeksforGeeks",
      description:
        "Successfully completed the Hack-a-Throne 1.0 hackathon organized by AIESEC in Jalandhar in collaboration with GeeksforGeeks. Demonstrated strong coding skills, problem-solving ability, and innovation under time constraints in a real-world tech challenge.",
      content: (
        <div className="flex h-48 w-full items-center justify-center bg-gray-700">
          <img
            src="/assets/certificates/aws.png"
            alt="AWS Certificate"
            className="w-full object-cover rounded-md"
          />
        </div>
      ),
    },
  ];

  return (
    <div className="w-full py-4">
      <StickyScroll content={content} />
    </div>
  );
}



