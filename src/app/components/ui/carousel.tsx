

// "use client";

// import { motion } from "framer-motion";
// import Image from "next/image";
// import Link from "next/link";

// interface ProjectCardProps {
//   title: string;
//   description: string;
//   image: string;
//   link: string;
//   index: number;
// }

// export default function Carousel({
//   title,
//   description,
//   image,
//   link,
//   index,
// }: ProjectCardProps) {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 50 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true }}
//       transition={{ duration: 0.6, delay: index * 0.2 }}
//       className="bg-[#0B0D10] rounded-xl overflow-hidden shadow-md hover:shadow-indigo-500/30 transform hover:scale-[1.02] transition-all"
//     >
//       <div className="relative w-full h-52">
//         <Image
//           src={image}
//           alt={title}
//           layout="fill"
//           objectFit="cover"
//           className="transition-transform duration-300 group-hover:scale-105"
//         />
//       </div>
//       <div className="p-5 text-left">
//         <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
//         <p className="text-gray-400 text-sm mb-4">{description}</p>
//         <Link
//           href={link}
//           target="_blank"
//           className="inline-block px-4 py-2 rounded-md bg-gradient-to-r from-blue-600 to-indigo-500 text-white font-medium hover:opacity-90 transition"
//         >
//           View Demo
//         </Link>
//       </div>
//     </motion.div>
//   );
// }




"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
  index: number;
}

export default function Carousel({
  title,
  description,
  image,
  link,
  index,
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="bg-[#0B0D10] rounded-xl overflow-hidden shadow-md hover:shadow-purple-500/30 transform hover:scale-[1.02] transition-all"
    >
      <div className="relative w-full h-52">
        <Image
          src={image}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="p-5 text-left">
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-400 text-sm mb-4">{description}</p>
        <Link
          href={link}
          target="_blank"
          className="inline-block px-4 py-2 rounded-md bg-gradient-to-r from-purple-800 to-blue-600 text-white font-medium hover:opacity-90 transition"
        >
          View Demo
        </Link>
      </div>
    </motion.div>
  );
}
