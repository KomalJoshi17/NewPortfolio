// // 'use client';

// // import Image from 'next/image';
// // import { motion } from 'framer-motion';
// // import Link from 'next/link';
// // import { TypewriterEffect } from '../../components/ui/typewriter-effect';

// // const Hero = () => {
// //   return (
// //     <div
// //       id="home"
// //       className="bg-[#0B0D10] pt-24 pb-16 text-white min-h-screen flex flex-col items-center justify-center"
// //     >
// //       {/* Avatar Image */}
// //       <motion.div
// //         initial={{ opacity: 0, scale: 0 }}
// //         animate={{ opacity: 1, scale: 1 }}
// //         transition={{ delay: 0.5, duration: 0.5 }}
// //         className="w-48 md:w-56 lg:w-64"
// //       >
// //         <Image
// //           src="/assets/hero2.png"
// //           alt="Puneet's avatar"
// //           width={256}
// //           height={256}
// //           className="rounded-full border-2 border-cyan-400 shadow-lg mx-auto"
// //           priority
// //         />
// //       </motion.div>

// //       {/* Text Content */}
// //       <motion.div
// //         initial={{ opacity: 0 }}
// //         animate={{ opacity: 1 }}
// //         transition={{ duration: 0.5 }}
// //         className="text-center mt-8 px-4"
// //       >
// //         <motion.h1
// //           initial={{ opacity: 0, y: 60 }}
// //           animate={{ opacity: 1, y: 0 }}
// //           transition={{ delay: 1, duration: 0.5 }}
// //           className="text-4xl md:text-6xl font-extrabold leading-snug mb-3"
// //         >
// //           Hi, I'm{' '}
// //           <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400">
// //             Puneet Kathpalia👋
// //           </span>
// //         </motion.h1>

// //         {/* Typewriter Effect */}
// //         <motion.div
// //           initial={{ opacity: 0, y: 60 }}
// //           animate={{ opacity: 1, y: 0 }}
// //           transition={{ delay: 1.1, duration: 0.5 }}
// //           className="mb-6"
// //         >
// //           <TypewriterEffect
// //             words={[
// //               { text: 'Full Stack Developer', className: 'text-cyan-400' },
// //               { text: '|', className: 'text-white' },
// //               { text: 'Problem Solver', className: 'text-purple-400' },
// //               { text: '|', className: 'text-white' },
// //               { text: 'Tech Enthusiast', className: 'text-green-400' },
// //             ]}
// //             className="text-lg md:text-2xl"
// //             cursorClassName="bg-cyan-400"
// //           />
// //         </motion.div>

// //         {/* Description */}
// //         <motion.p
// //           initial={{ opacity: 0, y: 60 }}
// //           animate={{ opacity: 1, y: 0 }}
// //           transition={{ delay: 1.2, duration: 0.5 }}
// //           className="text-gray-400 text-sm md:text-base mb-6"
// //         >
// //           Code with Purpose. Design with Logic.
// //         </motion.p>

// //         {/* Buttons */}
// //         <div className="flex justify-center gap-4 flex-wrap">
// //           {/* Download CV Button */}
// //           <motion.a
// //             href="/assets/CV.pdf"
// //             download="Puneet_Kathpalia_CV.pdf"
// //             initial={{ opacity: 0, x: 100 }}
// //             animate={{ opacity: 1, x: 0 }}
// //             transition={{ delay: 1.5, duration: 0.5 }}
// //             className="border border-cyan-400 text-cyan-400 hover:bg-cyan-500 hover:text-black px-6 py-3 rounded-full transition-all shadow-md"
// //           >
// //             Download CV
// //           </motion.a>

// //           {/* Video CV Button */}
// //           <motion.a
// //             href="https://drive.google.com/file/d/1-fp8tGXm40MwzNC-L9chn3uxNhTW_YJE/view?usp=drivesdk"
// //             target="_blank"
// //             rel="noopener noreferrer"
// //             initial={{ opacity: 0, x: 100 }}
// //             animate={{ opacity: 1, x: 0 }}
// //             transition={{ delay: 1.6, duration: 0.5 }}
// //             className="border border-purple-400 text-purple-400 hover:bg-purple-500 hover:text-black px-6 py-3 rounded-full transition-all shadow-md"
// //           >
// //             Watch Video CV
// //           </motion.a>
// //         </div>
// //       </motion.div>
// //     </div>
// //   );
// // };

// // export default Hero;



// "use client";

// import Carousel from "../components/ui/carousel";

// const projects = [
//   {
//     title: "EzzGrow - Social Media App",
//     description: "Full-stack app to connect, post & grow socially.",
//     image: "/assets/project1.png",
//     link: "https://ezzgrow.vercel.app/",
//   },
//   {
//     title: "E-Commerce Store",
//     description: "Modern store with seamless UX & Stripe payments.",
//     image: "/assets/project2.png",
//     link: "https://clone1-nine.vercel.app/",
//   },
//   {
//     title: "Weather Forecast App",
//     description: "Real-time weather dashboard using OpenWeather API.",
//     image: "/assets/project3.png",
//     link: "https://weather-app-pk-52.vercel.app/",
//   },
// ];

// export function CarouselDemo() {
//   return (
//     <section
//       id="projects"
//       className="w-full min-h-screen bg-[#0B0D10] px-6 py-24 scroll-mt-10 -mt-5"
//     >
//       <div className="max-w-6xl mx-auto text-center">
//         <h2 className="text-5xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-500">
//           My Projects
//         </h2>
//         <p className="text-gray-400 text-lg mb-16">
//           A collection of web apps I&apos;ve crafted using modern tools & tech.
//         </p>

//         <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
//           {projects.map((project, index) => (
//             <Carousel key={index} index={index} {...project} />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }



'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
// Removed unused import: Link
import { TypewriterEffect } from '../../components/ui/typewriter-effect';

const Hero = () => {
  return (
    <div
      id="home"
      className="bg-[#0B0D10] pt-24 pb-16 text-white min-h-screen flex flex-col items-center justify-center"
    >
      {/* Avatar Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="w-48 md:w-56 lg:w-64"
      >
        <Image
          src="/assets/hero2.png"
          alt="Puneet&apos;s avatar"
          width={256}
          height={256}
          className="rounded-full border-2 border-cyan-400 shadow-lg mx-auto"
          priority
        />
      </motion.div>

      {/* Text Content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center mt-8 px-4"
      >
        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="text-4xl md:text-6xl font-extrabold leading-snug mb-3"
        >
          Hi, I&apos;m{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400">
            Puneet Kathpalia👋
          </span>
        </motion.h1>

        {/* Typewriter Effect */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.5 }}
          className="mb-6"
        >
          <TypewriterEffect
            words={[
              { text: 'Full Stack Developer', className: 'text-cyan-400' },
              { text: '|', className: 'text-white' },
              { text: 'Problem Solver', className: 'text-purple-400' },
              { text: '|', className: 'text-white' },
              { text: 'Tech Enthusiast', className: 'text-green-400' },
            ]}
            className="text-lg md:text-2xl"
            cursorClassName="bg-cyan-400"
          />
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          className="text-gray-400 text-sm md:text-base mb-6"
        >
          Code with Purpose. Design with Logic.
        </motion.p>

        {/* Buttons */}
        <div className="flex justify-center gap-4 flex-wrap">
          {/* Download CV Button */}
          <motion.a
            href="/assets/CV.pdf"
            download="Puneet_Kathpalia_CV.pdf"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.5, duration: 0.5 }}
            className="border border-cyan-400 text-cyan-400 hover:bg-cyan-500 hover:text-black px-6 py-3 rounded-full transition-all shadow-md"
          >
            Download CV
          </motion.a>

          {/* Video CV Button */}
          <motion.a
            href="https://drive.google.com/file/d/1-fp8tGXm40MwzNC-L9chn3uxNhTW_YJE/view?usp=drivesdk"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.6, duration: 0.5 }}
            className="border border-purple-400 text-purple-400 hover:bg-purple-500 hover:text-black px-6 py-3 rounded-full transition-all shadow-md"
          >
            Watch Video CV
          </motion.a>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
