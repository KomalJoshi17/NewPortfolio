
'use client';

import { motion } from 'framer-motion';

interface CompaniesProps {
  skills: string[];
}

const Companies = ({ skills }: CompaniesProps) => {
  const repeatedSkills = [...skills, ...skills];

  const scrollVariants = {
    left: {
      animate: {
        x: [0, -1030],
        transition: {
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 25,
            ease: "linear",
          },
        },
      },
    },
    right: {
      animate: {
        x: [-1030, 0],
        transition: {
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 25,
            ease: "linear",
          },
        },
      },
    },
  };

  const headerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const skillItemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: i * 0.05,
        duration: 0.5,
        ease: "backOut"
      }
    })
  };

  return (
    <section className="py-16 bg-[#0B0D10]">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={headerVariants}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text text-white">
            Core <span className="text-4xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">Competencies</span>
          </h2>
          <p className="text-md text-gray-300 max-w-2xl mx-auto">
            The interpersonal skills that amplify my technical expertise and drive successful collaborations
          </p>
        </motion.div>

        {/* Scrolling skills - Top */}
        <div className="overflow-hidden py-4 mb-6 relative">
        <div className="absolute inset-0 bg-transparent z-10 pointer-events-none" />



        <motion.div
            variants={scrollVariants.left}
            animate="animate"
            className="flex gap-6 whitespace-nowrap"
          >
            {repeatedSkills.map((skill, index) => (
              <motion.div
                key={`top-${index}`}
                custom={index % skills.length}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={skillItemVariants}
                className="px-8 py-3 rounded-full bg-[#1e293b]/80 border border-cyan-400/20 shadow-sm text-gray-100 font-medium text-lg flex-shrink-0 hover:bg-cyan-500/10 hover:border-cyan-400/30 transition duration-300"

              >
                {skill}
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Scrolling skills - Bottom */}
        <div className="overflow-hidden py-4 relative">
        <div className="absolute inset-0 bg-transparent z-10 pointer-events-none" />
          <motion.div
            variants={scrollVariants.right}
            animate="animate"
            className="flex gap-6 whitespace-nowrap"
          >
            {repeatedSkills.map((skill, index) => (
              <motion.div
                key={`bottom-${index}`}
                custom={index % skills.length}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={skillItemVariants}
                className="px-8 py-3 rounded-full bg-gray-800 border border-gray-700 shadow-lg text-gray-100 font-medium text-lg flex-shrink-0 hover:bg-gray-700 transition-colors duration-300 hover:shadow-blue-500/20 hover:border-blue-400/30"
              >
                {skill}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Companies;
