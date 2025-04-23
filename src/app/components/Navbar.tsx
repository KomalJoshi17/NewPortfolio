// // "use client";
// // import React from "react";
// // import { FloatingNav } from "./ui/floating-navbar";
// // import { 
// //   IconHome, 
// //   IconUser, 
// //   IconTool, 
// //   IconBriefcase, 
// //   IconCertificate,
// //   IconFileDescription,
// //   IconMail
// // } from "@tabler/icons-react";

// // export default function FloatingNavDemo() {
// //   const navItems = [
// //     {
// //       name: "Home",
// //       link: "/",
// //       icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
// //     },
// //     {
// //       name: "About",
// //       link: "/about",
// //       icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
// //     },
// //     {
// //       name: "Skills",
// //       link: "/skills",
// //       icon: <IconTool className="h-4 w-4 text-neutral-500 dark:text-white" />,
// //     },
// //     {
// //       name: "Work",
// //       link: "/work",
// //       icon: <IconBriefcase className="h-4 w-4 text-neutral-500 dark:text-white" />,
// //     },
// //     {
// //       name: "Projects",
// //       link: "/projects",
// //       icon: <IconFileDescription className="h-4 w-4 text-neutral-500 dark:text-white" />,
// //     },
// //     {
// //       name: "Certifications",
// //       link: "/certifications",
// //       icon: <IconCertificate className="h-4 w-4 text-neutral-500 dark:text-white" />,
// //     },
// //     {
// //       name: "Contact",
// //       link: "/contact",
// //       icon: <IconMail className="h-4 w-4 text-neutral-500 dark:text-white" />,
// //     }
// //   ];

// //   return (
// //     <div className="relative w-full">
// //       <FloatingNav navItems={navItems} />
// //       <DummyContent />
// //     </div>
// //   );
// // }

// // const DummyContent = () => {
// //   return (
// //     <div className="grid grid-cols-1 h-[40rem] w-full bg-white dark:bg-black relative border border-neutral-200 dark:border-white/[0.2] rounded-md">
// //       <p className="dark:text-white text-neutral-600 text-center text-4xl mt-40 font-bold">
// //         Scroll back up to reveal Navbar
// //       </p>
// //       <div className="inset-0 absolute bg-grid-black/[0.1] dark:bg-grid-white/[0.2]" />
// //     </div>
// //   );
// // };
// // "use client";
// // import {
// //   Navbar,
// //   NavBody,
// //   NavItems,
// //   MobileNav,
// //   NavbarLogo,
// //   NavbarButton,
// //   MobileNavHeader,
// //   MobileNavToggle,
// //   MobileNavMenu,
// // } from "../components/ui/floating-navbar";
// // import { useState } from "react";
// // import {
// //   IconHome,
// //   IconUser,
// //   IconTool,
// //   IconBriefcase,
// //   IconCertificate,
// //   IconFileDescription,
// //   IconMail,
// // } from "@tabler/icons-react";

// // function NavbarDemo() {
// //   const navItems = [
// //     { name: "Home", link: "/", icon: <IconHome className="h-5 w-5" /> },
// //     { name: "About", link: "/about", icon: <IconUser className="h-5 w-5" /> },
// //     { name: "Skills", link: "/skills", icon: <IconTool className="h-5 w-5" /> },
// //     { name: "Work", link: "/work", icon: <IconBriefcase className="h-5 w-5" /> },
// //     { name: "Projects", link: "/projects", icon: <IconFileDescription className="h-5 w-5" /> },
// //     { name: "Certifications", link: "/certifications", icon: <IconCertificate className="h-5 w-5" /> },
// //     { name: "Contact", link: "/contact", icon: <IconMail className="h-5 w-5" /> },
// //   ];

// //   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

// //   return (
// //     <div className="fixed top-0 left-0 z-50 w-full bg-white dark:bg-black shadow-sm">
// //       <Navbar>
// //         {/* Desktop Navigation */}
// //         <NavBody>
// //           <NavbarLogo />
// //           <NavItems items={navItems} />
// //           <div className="flex items-center gap-4">
// //             {/* <NavbarButton variant="secondary">Contact Us</NavbarButton> */}
// //           </div>
// //         </NavBody>

// //         {/* Mobile Navigation */}
// //         <MobileNav>
// //           <MobileNavHeader>
// //             <NavbarLogo />
// //             <MobileNavToggle
// //               isOpen={isMobileMenuOpen}
// //               onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
// //             />
// //           </MobileNavHeader>

// //           <MobileNavMenu
// //             isOpen={isMobileMenuOpen}
// //             onClose={() => setIsMobileMenuOpen(false)}
// //           >
// //             {navItems.map((item, idx) => (
// //               <a
// //                 key={`mobile-link-${idx}`}
// //                 href={item.link}
// //                 onClick={() => setIsMobileMenuOpen(false)}
// //                 className="flex items-center gap-3 px-4 py-3 text-neutral-600 dark:text-neutral-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg"
// //               >
// //                 {item.icon}
// //                 <span className="block">{item.name}</span>
// //               </a>
// //             ))}
// //             <div className="flex w-full flex-col gap-4 mt-4 px-4">
// //               {/* <NavbarButton
// //                 onClick={() => setIsMobileMenuOpen(false)}
// //                 variant="primary"
// //                 className="w-full"
// //               >
// //                 Contact Us
// //               </NavbarButton> */}
// //             </div>
// //           </MobileNavMenu>
// //         </MobileNav>
// //       </Navbar>
// //     </div>
// //   );
// // }

// // export default NavbarDemo;
// "use client";
// import { useState } from "react";
// import Link from "next/link";

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);

//   const navLinks = [
//     { name: "Home", href: "#home" },
//     { name: "About", href: "#about" },
//     { name: "Skills", href: "#skills" },
//     { name: "Work", href: "#work" },
//     { name: "Certifications", href: "#certifications" },
//     { name: "Projects", href: "#projects" },
//     { name: "Contact", href: "#contact" },
//   ];

//   return (
//     <nav className="fixed top-0 left-0 w-full z-50 bg-black shadow-md">
//       <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
//         {/* Gradient Logo */}
//         <span className="text-2xl font-bold bg-gradient-to-r text-white bg-clip-text text-transparent">
//           Portfolio
//         </span>

//         {/* Desktop Links */}
//         <div className="hidden md:flex gap-6 text-white font-medium text-sm">
//           {navLinks.map((link, idx) => (
//             <Link
//               key={idx}
//               href={link.href}
//               className="hover:text-cyan-400 transition"
//             >
//               {link.name}
//             </Link>
//           ))}
//         </div>

//         {/* Mobile Toggle */}
//         <button
//           className="md:hidden text-white"
//           onClick={() => setIsOpen(!isOpen)}
//         >
//           ☰
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       {isOpen && (
//         <div className="md:hidden bg-black px-6 pb-4 text-white flex flex-col gap-4">
//           {navLinks.map((link, idx) => (
//             <Link
//               key={idx}
//               href={link.href}
//               onClick={() => setIsOpen(false)}
//               className="hover:text-cyan-400 transition"
//             >
//               {link.name}
//             </Link>
//           ))}
//         </div>
//       )}
//     </nav>
//   );
// }

"use client";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Work", href: "#work" },
    { name: "Certifications", href: "#certifications" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <span className="text-2xl font-bold bg-gradient-to-r text-white bg-clip-text text-transparent">
          Portfolio
        </span>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-6 text-white font-medium text-sm">
          {navLinks.map((link, idx) => (
            <a
              key={idx}
              href={link.href}
              className="hover:text-cyan-400 transition cursor-pointer"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black px-6 pb-4 text-white flex flex-col gap-4">
          {navLinks.map((link, idx) => (
            <a
              key={idx}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="hover:text-cyan-400 transition"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
