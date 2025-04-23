// src/components/CertificatesSection.tsx
'use client';  // This will make the component run on the client side

import { motion } from "framer-motion"; // Assuming you're using framer-motion for animations

const CertificatesSection = () => {
  const certificates = [
    {
      title: "AWS Certified Solutions Architect",
      description:
        "Certified Solutions Architect with expertise in designing distributed systems on AWS.",
      image: "/assets/certificates/aws.png", // Add your images inside the public folder
    },
    {
      title: "React.js Developer",
      description:
        "Proficient in React.js for building scalable and performant web applications.",
      image: "/assets/certificates/react.png", // Add your images inside the public folder
    },
    {
      title: "Full Stack Web Development",
      description:
        "Complete Full Stack Web Development course, with practical experience in MERN stack.",
      image: "/assets/certificates/webdev.png", // Add your images inside the public folder
    },
  ];

  return (
    <section className="py-10 bg-[#0B0D10] text-white">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-5xl font-extrabold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-500"
        >
          My Certifications
        </motion.h2>

        <motion.div
          className="grid gap-10 md:grid-cols-2 lg:grid-cols-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          {certificates.map((certificate, index) => (
            <motion.div
              key={index}
              className="relative rounded-xl overflow-hidden shadow-lg shadow-black/30"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="relative w-full h-56"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                {certificate.image && (
                  <img
                    src={certificate.image}
                    alt={certificate.title}
                    className="object-cover w-full h-full"
                  />
                )}
              </motion.div>

              <div className="p-6 bg-black/50 rounded-b-xl">
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7 }}
                  className="text-2xl font-semibold mb-4"
                >
                  {certificate.title}
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.3 }}
                  className="text-sm text-gray-400"
                >
                  {certificate.description}
                </motion.p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CertificatesSection;
