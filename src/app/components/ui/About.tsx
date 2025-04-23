// 'use client';

// import { motion } from 'framer-motion';
// import Image from 'next/image';

// const About = () => {
//   return (
//     <section
//       id="about"
//       className="text-white pt-24 pb-24 bg-[#0B0D10] min-h-[calc(100vh-100px)] flex items-center relative overflow-hidden"
//     >
//       <div className="absolute inset-x-0 top-0 h-[1px] bg-transparent"></div>
//       <div className="absolute inset-x-0 bottom-0 h-[1px] bg-transparent"></div>

//       <div className="container mx-auto px-4 relative z-10">
//         {/* Heading */}
//         <div className="text-center mb-12">
//           <motion.h2
//             initial={{ opacity: 0, y: 50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             className="text-4xl md:text-5xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400"
//           >
//             About Me
//           </motion.h2>

//           <motion.p
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.3, duration: 0.6 }}
//             className="text-lg md:text-xl font-medium text-gray-400 max-w-2xl mx-auto"
//           >
//             Building Digital Experiences That Matter — With Precision & Passion
//           </motion.p>
//         </div>

//         <div className="flex flex-col lg:flex-row items-center gap-12">
//           {/* Image Section */}
//           <motion.div
//   initial={{ opacity: 0, x: -50 }}
//   animate={{ opacity: 1, x: 0 }}
//   transition={{ duration: 0.6 }}
//   className="w-full lg:w-1/2 flex justify-center"
// >
//   <div className="relative w-full max-w-sm aspect-square bg-[#0A0D14] rounded-xl shadow-xl ring-4 ring-cyan-500/20 overflow-hidden">
//     <Image
//       src="/assets/aboutImg.png"
//       alt="Puneet Kathpalia"
//       fill
//       className="object-cover rounded-xl z-10"
//       quality={100}
//       priority
//     />
//     {/* Subtle dark overlay for depth */}
//     <div className="absolute inset-0 bg-black/40 z-20 rounded-xl mix-blend-multiply" />
//   </div>
// </motion.div>


//           {/* Text Section */}
//           <motion.div
//             initial={{ opacity: 0, x: 50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.6 }}
//             className="w-full lg:w-1/2 text-left space-y-4"
//           >
//             <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-cyan-400 ">
//               Puneet Kathpalia
//             </h3>

//             <p className="text-gray-300 text-lg leading-relaxed font-medium">
//               Hey there! I'm <span className="font-extrabold text-white">Puneet</span>, a Full Stack Developer passionate about transforming ideas into sleek, functional, and intuitive digital products.
//             </p>

//             <p className="text-gray-300 text-lg leading-relaxed font-medium">
//               With expertise in the <span className="text-cyan-800 font-bold">MERN Stack</span> and <span className="text-cyan-800 font-bold">DevOps</span>, I combine code quality with design sense to build engaging experiences that perform flawlessly.
//             </p>

//             <div className="space-y-2">
//               {[
//                 "Passionate about clean, scalable code and real-world impact.",
//                 "Focused on smooth user interactions and lightning-fast performance.",
//                 "Constantly evolving with the tech landscape and mentoring others.",
//               ].map((text, idx) => (
//                 <div key={idx} className="flex items-start gap-3">
//                   <div className="mt-1 text-cyan-800">▹</div>
//                   <p className="text-gray-400 font-medium">{text}</p>
//                 </div>
//               ))}
//             </div>

//             <p className="text-gray-300 text-lg leading-relaxed font-medium">
//               From concept to deployment, I enjoy crafting software that's not just functional, but delightful. My mission? Deliver <span className="text-cyan-800 font-bold">impactful digital experiences</span> with purpose.
//             </p>

//             <p className="text-gray-300 text-lg leading-relaxed font-medium">
//               When I'm not coding, I love contributing to open-source, engaging with tech communities, and helping new developers grow.
//             </p>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;


'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const About = () => {
  return (
    <section
      id="about"
      className="text-white pt-24 pb-24 bg-[#0B0D10] min-h-[calc(100vh-100px)] flex items-center relative overflow-hidden"
    >
      <div className="absolute inset-x-0 top-0 h-[1px] bg-transparent"></div>
      <div className="absolute inset-x-0 bottom-0 h-[1px] bg-transparent"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Heading */}
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400"
          >
            About Me
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-lg md:text-xl font-medium text-gray-400 max-w-2xl mx-auto"
          >
            Building Digital Experiences That Matter — With Precision & Passion
          </motion.p>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Image Section with Lightning Border Animation */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/2 flex justify-center"
          >
            <div className="relative w-full max-w-sm aspect-square bg-[#0A0D14] rounded-xl shadow-xl ring-4 ring-cyan-500/20 overflow-hidden">
              {/* Lightning Animation Layer */}
              <motion.div
                className="absolute inset-0 rounded-xl z-30 pointer-events-none"
                initial={{ opacity: 0.7 }}
                animate={{
                  opacity: [0.7, 1, 0.7],
                  boxShadow: [
                    '0 0 10px rgba(0,255,255,0.3)',
                    '0 0 30px rgba(0,255,255,0.7)',
                    '0 0 10px rgba(0,255,255,0.3)',
                  ],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />

              {/* Image */}
              <Image
                src="/assets/aboutImg.png"
                alt="Puneet Kathpalia"
                fill
                className="object-cover rounded-xl z-10"
                quality={100}
                priority
              />
              {/* Subtle overlay */}
              <div className="absolute inset-0 bg-grey/20 z-20 rounded-xl mix-blend-multiply" />
            </div>
          </motion.div>

          {/* Text Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/2 text-left space-y-4"
          >
            <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-cyan-400 ">
              Puneet Kathpalia
            </h3>

            <p className="text-gray-300 text-lg leading-relaxed font-medium">
              Hey there! I&apos;m <span className="font-extrabold text-white">Puneet</span>, a Full Stack Developer passionate about transforming ideas into sleek, functional, and intuitive digital products.
            </p>

            <p className="text-gray-300 text-lg leading-relaxed font-medium">
              With expertise in the <span className="text-cyan-800 font-bold">MERN Stack</span> and <span className="text-cyan-800 font-bold">DevOps</span>, I combine code quality with design sense to build engaging experiences that perform flawlessly.
            </p>

            <div className="space-y-2">
              {[
                'Passionate about clean, scalable code and real-world impact.',
                'Focused on smooth user interactions and lightning-fast performance.',
                'Constantly evolving with the tech landscape and mentoring others.',
              ].map((text, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="mt-1 text-cyan-800">▹</div>
                  <p className="text-gray-400 font-medium">{text}</p>
                </div>
              ))}
            </div>

            <p className="text-gray-300 text-lg leading-relaxed font-medium">
              From concept to deployment, I enjoy crafting software that&apos;s not just functional, but delightful. My mission? Deliver <span className="text-cyan-800 font-bold">impactful digital experiences</span> with purpose.
            </p>

            <p className="text-gray-300 text-lg leading-relaxed font-medium">
              When I&apos;m not coding, I love contributing to open-source, engaging with tech communities, and helping new developers grow.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
