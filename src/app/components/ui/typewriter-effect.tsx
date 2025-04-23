"use client";

import { cn } from "@/lib/utils";
import { motion, stagger, useAnimate, useInView } from "motion/react";
import { useEffect } from "react";

export const TypewriterEffect = ({
  words,
  className,
  cursorClassName,
}: {
  words: {
    text: string;
    className?: string;
  }[];
  className?: string;
  cursorClassName?: string;
}) => {
  // split text inside of words into array of characters
  const wordsArray = words.map((word) => {
    return {
      ...word,
      text: word.text.split(""),
    };
  });

  const [scope, animate] = useAnimate();
  const isInView = useInView(scope);
  useEffect(() => {
    if (isInView) {
      animate(
        "span",
        {
          display: "inline-block",
          opacity: 1,
          width: "fit-content",
        },
        {
          duration: 0.3,
          delay: stagger(0.1),
          ease: "easeInOut",
        }
      );
    }
  }, [isInView]);

  const renderWords = () => {
    return (
      <motion.div ref={scope} className="inline">
        {wordsArray.map((word, idx) => {
          return (
            <div key={`word-${idx}`} className="inline-block">
              {word.text.map((char, index) => (
                <motion.span
                  initial={{}}
                  key={`char-${index}`}
                  className={cn(
                    `dark:text-white text-black opacity-0 hidden`,
                    word.className
                  )}
                >
                  {char}
                </motion.span>
              ))}
              &nbsp;
            </div>
          );
        })}
      </motion.div>
    );
  };
  return (
    <div
      className={cn(
        "text-base sm:text-xl md:text-3xl lg:text-5xl font-bold text-center",
        className
      )}
    >
      {renderWords()}
      <motion.span
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 0.8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className={cn(
          "inline-block rounded-sm w-[4px] h-4 md:h-6 lg:h-10 bg-blue-500",
          cursorClassName
        )}
      ></motion.span>
    </div>
  );
};

export const TypewriterEffectSmooth = ({
  words,
  className,
  cursorClassName,
}: {
  words: {
    text: string;
    className?: string;
  }[];
  className?: string;
  cursorClassName?: string;
}) => {
  // split text inside of words into array of characters
  const wordsArray = words.map((word) => {
    return {
      ...word,
      text: word.text.split(""),
    };
  });
  const renderWords = () => {
    return (
      <div>
        {wordsArray.map((word, idx) => {
          return (
            <div key={`word-${idx}`} className="inline-block">
              {word.text.map((char, index) => (
                <span
                  key={`char-${index}`}
                  className={cn(`dark:text-white text-black `, word.className)}
                >
                  {char}
                </span>
              ))}
              &nbsp;
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div className={cn("flex space-x-1 my-6", className)}>
      <motion.div
        className="overflow-hidden pb-2"
        initial={{
          width: "0%",
        }}
        whileInView={{
          width: "fit-content",
        }}
        transition={{
          duration: 2,
          ease: "linear",
          delay: 1,
        }}
      >
        <div
          className="text-xs sm:text-base md:text-xl lg:text:3xl xl:text-5xl font-bold"
          style={{
            whiteSpace: "nowrap",
          }}
        >
          {renderWords()}{" "}
        </div>{" "}
      </motion.div>
      <motion.span
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 0.8,

          repeat: Infinity,
          repeatType: "reverse",
        }}
        className={cn(
          "block rounded-sm w-[4px]  h-4 sm:h-6 xl:h-12 bg-blue-500",
          cursorClassName
        )}
      ></motion.span>
    </div>
  );
};



// "use client";

// import { cn } from "@/lib/utils";
// import { motion, useInView } from "framer-motion"; // 🛠️ changed from motion/react
// import { useEffect, useRef, useState } from "react";

// export const TypewriterEffectSmooth = ({
//   words,
//   className,
//   cursorClassName,
// }: {
//   words: {
//     text: string;
//     className?: string;
//   }[];
//   className?: string;
//   cursorClassName?: string;
// }) => {
//   const containerRef = useRef(null);
//   const isInView = useInView(containerRef);
//   const [revealedChars, setRevealedChars] = useState(0);

//   const fullText = words.map((w) => w.text).join(" ");
//   const totalChars = fullText.length;

//   // 🛠️ Faster typing effect
//   useEffect(() => {
//     if (!isInView) return;

//     const interval = setInterval(() => {
//       setRevealedChars((prev) => {
//         if (prev >= totalChars) {
//           clearInterval(interval);
//           return prev;
//         }
//         return prev + 1;
//       });
//     }, 35); // 🛠️ faster typing speed

//     return () => clearInterval(interval);
//   }, [isInView, totalChars]);

//   // 🛠️ Helper to count characters dynamically
//   const getVisibleText = () => {
//     let charCount = 0;
//     return words.map((word, wordIdx) => {
//       const visibleChars = [];

//       for (let i = 0; i < word.text.length; i++) {
//         if (charCount < revealedChars) {
//           visibleChars.push(
//             <span
//               key={`char-${wordIdx}-${i}`}
//               className={cn("dark:text-white text-black", word.className)}
//             >
//               {word.text[i]}
//             </span>
//           );
//         }
//         charCount++;
//       }

//       return (
//         <span key={`word-${wordIdx}`} className="inline-block">
//           {visibleChars}
//           {charCount < revealedChars && <span>&nbsp;</span>}
//         </span>
//       );
//     });
//   };

//   return (
//     <div
//       ref={containerRef}
//       className={cn("flex items-center space-x-1 my-6", className)}
//     >
//       <div
//         className="text-xs sm:text-base md:text-xl lg:text-3xl xl:text-5xl font-bold whitespace-nowrap"
//         style={{
//           overflow: "hidden",
//         }}
//       >
//         {getVisibleText()}
//       </div>

//       {/* Cursor */}
//       <motion.span
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{
//           duration: 0.6,
//           repeat: Infinity,
//           repeatType: "reverse",
//         }}
//         className={cn(
//           "block rounded-sm w-[2px] h-5 sm:h-6 md:h-8 lg:h-10 xl:h-12 bg-blue-500",
//           cursorClassName
//         )}
//       ></motion.span>
//     </div>
//   );
// };









// "use client";

// import { cn } from "@/lib/utils";
// import { motion, stagger, useAnimate, useInView } from "motion/react";
// import { useEffect } from "react";

// // TypewriterEffect — single character animation
// export const TypewriterEffect = ({
//   words,
//   className,
//   cursorClassName,
// }: {
//   words: {
//     text: string;
//     className?: string;
//   }[];
//   className?: string;
//   cursorClassName?: string;
// }) => {
//   const wordsArray = words.map((word) => ({
//     ...word,
//     text: word.text.split(""),
//   }));

//   const [scope, animate] = useAnimate();
//   const isInView = useInView(scope);

//   useEffect(() => {
//     if (isInView) {
//       animate(
//         "span",
//         { display: "inline-block", opacity: 1 },
//         {
//           duration: 0.2,
//           delay: stagger(0.05),
//           ease: "easeOut",
//         }
//       );
//     }
//   }, [isInView]);

//   return (
//     <div
//       className={cn(
//         "text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-center",
//         className
//       )}
//     >
//       <motion.div ref={scope} className="inline">
//         {wordsArray.map((word, idx) => (
//           <div key={`word-${idx}`} className="inline-block">
//             {word.text.map((char, index) => (
//               <motion.span
//                 key={`char-${index}`}
//                 className={cn(
//                   "dark:text-white text-black opacity-0",
//                   word.className
//                 )}
//               >
//                 {char}
//               </motion.span>
//             ))}
//             &nbsp;
//           </div>
//         ))}
//       </motion.div>

//       {/* Blinking cursor */}
//       <motion.span
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{
//           duration: 0.5,
//           repeat: Infinity,
//           repeatType: "reverse",
//         }}
//         className={cn(
//           "inline-block rounded-sm w-[3px] h-5 md:h-6 lg:h-10 bg-blue-500 ml-1",
//           cursorClassName
//         )}
//       ></motion.span>
//     </div>
//   );
// };

// // TypewriterEffectSmooth — word-by-word reveal
// export const TypewriterEffectSmooth = ({
//   words,
//   className,
//   cursorClassName,
// }: {
//   words: {
//     text: string;
//     className?: string;
//   }[];
//   className?: string;
//   cursorClassName?: string;
// }) => {
//   const wordsArray = words.map((word) => ({
//     ...word,
//     text: word.text.split(""),
//   }));

//   const renderWords = () => (
//     <div>
//       {wordsArray.map((word, idx) => (
//         <div key={`word-${idx}`} className="inline-block">
//           {word.text.map((char, index) => (
//             <span
//               key={`char-${index}`}
//               className={cn("dark:text-white text-black", word.className)}
//             >
//               {char}
//             </span>
//           ))}
//           &nbsp;
//         </div>
//       ))}
//     </div>
//   );

//   return (
//     <div className={cn("flex space-x-1 my-6", className)}>
//       <motion.div
//         className="overflow-hidden pb-2"
//         initial={{ width: "0%" }}
//         whileInView={{ width: "fit-content" }}
//         transition={{ duration: 1.4, ease: "easeInOut", delay: 0.5 }}
//       >
//         <div
//           className="text-base sm:text-xl md:text-3xl lg:text-5xl font-bold whitespace-nowrap"
//         >
//           {renderWords()}
//         </div>
//       </motion.div>

//       <motion.span
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{
//           duration: 0.6,
//           repeat: Infinity,
//           repeatType: "reverse",
//         }}
//         className={cn(
//           "block rounded-sm w-[3px] h-4 sm:h-6 lg:h-10 bg-blue-500",
//           cursorClassName
//         )}
//       ></motion.span>
//     </div>
//   );
// };

















// import { cn } from "@/lib/utils";
// import { motion, useInView } from "motion/react";
// import { useEffect, useState, useRef } from "react";

// // Cursor component that blinks
// const BlinkingCursor = ({ className }: { className?: string }) => (
//   <motion.span
//     initial={{ opacity: 0 }}
//     animate={{ opacity: 1 }}
//     transition={{
//       duration: 0.5,
//       repeat: Infinity,
//       repeatType: "reverse",
//     }}
//     className={cn(
//       "inline-block w-[2px] h-5 md:h-6 lg:h-10 bg-blue-500 ml-1",
//       className
//     )}
//   />
// );

// // TypewriterEffect — cursor moves with text
// export const TypewriterEffect = ({
//   words,
//   className,
//   cursorClassName,
// }: {
//   words: { text: string; className?: string }[];
//   className?: string;
//   cursorClassName?: string;
// }) => {
//   const [typedChars, setTypedChars] = useState(0);
//   const fullText = words.map((w) => w.text).join(" ");
  
//   // Create a ref and pass it to the useInView hook
//   const ref = useRef(null);
//   const isInView = useInView(ref);

//   useEffect(() => {
//     if (isInView && typedChars < fullText.length) {
//       const timeout = setTimeout(() => setTypedChars((prev) => prev + 1), 50);
//       return () => clearTimeout(timeout);
//     }
//   }, [typedChars, fullText.length, isInView]);

//   const getVisibleText = () => {
//     let charCount = 0;
//     return words.map((word, i) => {
//       const chars = word.text.split("").map((char, j) => {
//         charCount++;
//         const isVisible = charCount <= typedChars;
//         return (
//           <span
//             key={`char-${i}-${j}`}
//             className={cn(
//               "transition-opacity duration-200",
//               isVisible ? "opacity-100" : "opacity-0",
//               word.className,
//               "dark:text-white text-black"
//             )}
//           >
//             {char}
//           </span>
//         );
//       });
//       return (
//         <span key={`word-${i}`} className="inline-block mr-1">
//           {chars}
//         </span>
//       );
//     });
//   };

//   return (
//     <div
//       ref={ref}  // Add ref here
//       className={cn(
//         "text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-center flex items-center",
//         className
//       )}
//     >
//       {getVisibleText()}
//       <BlinkingCursor className={cursorClassName} />
//     </div>
//   );
// };
