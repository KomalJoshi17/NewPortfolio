'use client';

import { motion } from 'framer-motion';
import {
  FaCss3, FaFigma, FaHtml5, FaJs, FaReact,
  FaJava, FaPython, FaNodeJs, FaAndroid, FaGithub
} from 'react-icons/fa';
import {
  SiRedis, SiMongodb, SiExpress, SiSpringboot,
  SiMysql, SiTypescript, SiC, SiCplusplus, SiKotlin,
  SiCanva, SiNextdotjs, SiPostgresql, SiOracle, SiSqlite, SiDocker,
  SiPrisma
} from 'react-icons/si';
import { useInView } from 'react-intersection-observer';
import Companies from './Companies';

interface SkillItem {
  icon: React.ReactNode;
  label: string;
}

interface SkillCategory {
  title: string;
  skills: SkillItem[];
}

const Services = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  const categories: SkillCategory[] = [
    {
      title: 'Frontend',
      skills: [
        { icon: <FaHtml5 color="#E34F26" size={32} />, label: 'HTML5' },
        { icon: <FaCss3 color="#1572B6" size={32} />, label: 'CSS3' },
        { icon: <FaJs color="#F7DF1E" size={32} />, label: 'JavaScript' },
        { icon: <FaReact color="#61DAFB" size={32} />, label: 'React' },
        { icon: <SiNextdotjs color="white" size={32} />, label: 'Next.js' },
        { icon: <SiTypescript color="#3178C6" size={32} />, label: 'TypeScript' },
        { icon: <FaFigma color="#F24E1E" size={32} />, label: 'Figma' },
        { icon: <SiCanva color="#00C4CC" size={32} />, label: 'Canva' },
      ]
    },
    {
      title: 'Backend',
      skills: [
        { icon: <FaNodeJs color="#339933" size={32} />, label: 'Node.js' },
        { icon: <SiExpress color="#000000" size={32} />, label: 'Express.js' },
        { icon: <SiSpringboot color="#6DB33F" size={32} />, label: 'Spring Boot' },
        { icon: <SiRedis color="#FF4438" size={32} />, label: 'Redis' },
        { icon: <SiPrisma color="#0C344B" size={32} />, label: 'Prisma ORM' },
      ]
    },
    {
      title: 'Database',
      skills: [
        { icon: <SiMongodb color="#47A248" size={32} />, label: 'MongoDB' },
        { icon: <SiMysql color="#00758F" size={32} />, label: 'MySQL' },
        { icon: <SiPostgresql color="#336791" size={32} />, label: 'PostgreSQL' },
        { icon: <SiOracle color="#F80000" size={32} />, label: 'Oracle DB' },
        { icon: <SiSqlite color="#003B57" size={32} />, label: 'SQLite' },
      ]
    },
    {
      title: 'Other Skills',
      skills: [
        { icon: <SiC color="#A8B9CC" size={32} />, label: 'C' },
        { icon: <SiCplusplus color="#00599C" size={32} />, label: 'C++' },
        { icon: <FaJava color="#007396" size={32} />, label: 'Java' },
        { icon: <FaPython color="#3776AB" size={32} />, label: 'Python' },
        { icon: <SiKotlin color="#7F52FF" size={32} />, label: 'Kotlin' },
        { icon: <FaAndroid color="#3DDC84" size={32} />, label: 'Android' },
        { icon: <SiDocker color="#0db7ed" size={32} />, label: 'Docker' },
        { icon: <FaGithub color="white" size={32} />, label: 'GitHub' },
      ]
    }
  ];

  const softSkills = [
    "Problem Solving", "Team Collaboration", "Communication",
    "Adaptability", "Time Management", "Critical Thinking",
    "Creativity", "Leadership", "Attention to Detail",
    "Continuous Learning"
  ];

  return (
    <div id="skills" className="scroll-mt-17  bg-[#0B0D10] text-white py-16 px-4">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="container mx-auto text-center"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-500">
          Tech Stack
        </h2>
        <p className="mb-10 text-slate-400 text-lg max-w-3xl mx-auto">
          A well-rounded stack with a blend of frontend finesse, backend strength, and a hunger for learning.
        </p>

        <div className="flex flex-wrap justify-center gap-8">
          {categories.map((category) => (
            <motion.div
              key={category.title}
              className="w-full sm:w-[40%] lg:w-[22%] min-h-[380px] bg-[#1e1b2e]/80 p-5 rounded-3xl shadow-md border border-cyan-500/30 hover:shadow-cyan-500/30 transition-all duration-300 flex flex-col"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-xl font-semibold mb-3 border-b border-slate-600 pb-2 text-cyan-300">
                {category.title}
              </h3>
              <div className="flex flex-wrap justify-center gap-3 mt-3">
                {category.skills.map((item) => (
                  <Skill key={item.label} icon={item.icon} label={item.label} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Soft Skills / Companies Section */}
      <div className="relative mt-16">
        <Companies skills={softSkills} />
      </div>
    </div>
  );
};

interface SkillProps {
  icon: React.ReactNode;
  label: string;
}

const Skill = ({ icon, label }: SkillProps) => (
  <motion.div
    whileHover={{ rotate: 2 }}
    whileTap={{ scale: 0.95 }}
    className="p-3 w-14 h-14 bg-[#0B0D10] flex items-center justify-center rounded-xl shadow-md hover:ring hover:ring-cyan-400 transition duration-300 relative group"
    aria-label={label}
  >
    <motion.div
      whileHover={{ scale: 1.4 }}
      transition={{ type: 'spring', stiffness: 100, damping: 10, duration: 0.2 }}
      className="cursor-pointer"
    >
      {icon}
    </motion.div>
    <span className="absolute opacity-0 group-hover:opacity-100 transition-opacity text-xs text-white bg-gray-800 px-2 py-1 rounded-lg bottom-full mb-2 z-10">
      {label}
    </span>
  </motion.div>
);

export default Services;
