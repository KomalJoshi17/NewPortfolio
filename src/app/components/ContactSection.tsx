
// "use client";

// import { useState } from "react";
// import { FloatingDock } from "../components/ui/floating-dock";
// import {
//   IconBrandGithub,
//   IconBrandLinkedin,
//   IconBrandInstagram,
//   IconMail,
//   IconPhone,
//   IconHome,
// } from "@tabler/icons-react";

// export default function ContactPage() {
//   const [form, setForm] = useState({ name: "", email: "", message: "" });

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     console.log(form);
//   };

//   const dockItems = [
//     {
//       title: "Home",
//       icon: <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
//       href: "/",
//     },
//     {
//       title: "Email",
//       icon: <IconMail className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
//       href: "mailto:puneetkathpalia99@gmail.com",
//     },
//     {
//       title: "Phone",
//       icon: <IconPhone className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
//       href: "tel:+91 9053457133",
//     },
//     {
//       title: "LinkedIn",
//       icon: <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
//       href: "https://www.linkedin.com/in/puneetkathpalia/",
//     },
//     {
//       title: "Instagram",
//       icon: <IconBrandInstagram className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
//       href: "https://www.instagram.com/puneetkathpalia/",
//     },
//     {
//       title: "GitHub",
//       icon: <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
//       href: "https://github.com/PuneetKathpalia",
//     },
//   ];

//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center bg-[#0B0D10] px-4 py-10 space-y-10">
//       <div className="w-full max-w-lg bg-white dark:bg-neutral-900 shadow-md rounded-lg p-8 space-y-6">
//         {/* Heading */}
//         <h1 className="text-3xl font-bold text-center text-[#F2F2F2] dark:text-neutral-100">
//           Get in Touch
//         </h1>

//         {/* Form */}
//         <form onSubmit={handleSubmit} className="space-y-6">
//           <input
//             type="text"
//             name="name"
//             placeholder="Your Name"
//             value={form.name}
//             onChange={handleChange}
//             className="w-full p-4 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-gray-50 dark:bg-neutral-800 text-neutral-900 dark:text-white focus:ring-2 focus:ring-blue-500"
//             required
//           />
//           <input
//             type="email"
//             name="email"
//             placeholder="Your Email"
//             value={form.email}
//             onChange={handleChange}
//             className="w-full p-4 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-gray-50 dark:bg-neutral-800 text-neutral-900 dark:text-white focus:ring-2 focus:ring-blue-500"
//             required
//           />
//           <textarea
//             name="message"
//             placeholder="Your Message"
//             rows={5}
//             value={form.message}
//             onChange={handleChange}
//             className="w-full p-4 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-gray-50 dark:bg-neutral-800 text-neutral-900 dark:text-white focus:ring-2 focus:ring-blue-500"
//             required
//           />
//           <button
//             type="submit"
//             className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-200"
//           >
//             Send Message
//           </button>
//         </form>
//       </div>

//       {/* Floating Dock */}
//       <FloatingDock
//         items={dockItems}
//         mobileClassName="translate-y-8"
//         desktopClassName="mt-8"
//       />
//     </div>
//   );
// }



// "use client";

// import { useState } from "react";
// import { FloatingDock } from "../components/ui/floating-dock";
// import {
//   IconBrandGithub,
//   IconBrandLinkedin,
//   IconBrandInstagram,
//   IconMail,
//   IconPhone,
//   IconHome,
// } from "@tabler/icons-react";

// export default function ContactPage() {
//   const [form, setForm] = useState({ name: "", email: "", message: "" });

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     console.log(form);
//   };

//   const dockItems = [
//     {
//       title: "Home",
//       icon: <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
//       href: "/",
//     },
//     {
//       title: "Email",
//       icon: <IconMail className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
//       href: "mailto:puneetkathpalia99@gmail.com",
//     },
//     {
//       title: "Phone",
//       icon: <IconPhone className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
//       href: "tel:+91 9053457133",
//     },
//     {
//       title: "LinkedIn",
//       icon: <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
//       href: "https://www.linkedin.com/in/puneetkathpalia/",
//     },
//     {
//       title: "Instagram",
//       icon: <IconBrandInstagram className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
//       href: "https://www.instagram.com/puneetkathpalia/",
//     },
//     {
//       title: "GitHub",
//       icon: <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
//       href: "https://github.com/PuneetKathpalia",
//     },
//   ];

//   return (
//     <div id="contact" className="scroll-mt-14   min-h-screen flex flex-col items-center justify-center bg-[#0B0D10] px-4 py-10 space-y-10">
//       <div className="w-full max-w-lg bg-white dark:bg-neutral-900 shadow-md rounded-lg p-8 space-y-6">
//         {/* Heading */}
//         <h1 className="text-3xl font-bold text-center text-[#F2F2F2] dark:text-neutral-100">
//           Get in Touch
//         </h1>

//         {/* Form */}
//         <form onSubmit={handleSubmit} className="space-y-6">
//           <input
//             type="text"
//             name="name"
//             placeholder="Your Name"
//             value={form.name}
//             onChange={handleChange}
//             className="w-full p-4 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-gray-50 dark:bg-neutral-800 text-neutral-900 dark:text-white focus:ring-2 focus:ring-blue-500"
//             required
//           />
//           <input
//             type="email"
//             name="email"
//             placeholder="Your Email"
//             value={form.email}
//             onChange={handleChange}
//             className="w-full p-4 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-gray-50 dark:bg-neutral-800 text-neutral-900 dark:text-white focus:ring-2 focus:ring-blue-500"
//             required
//           />
//           <textarea
//             name="message"
//             placeholder="Your Message"
//             rows={5}
//             value={form.message}
//             onChange={handleChange}
//             className="w-full p-4 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-gray-50 dark:bg-neutral-800 text-neutral-900 dark:text-white focus:ring-2 focus:ring-blue-500"
//             required
//           />
//           <button
//             type="submit"
//             className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-200"
//           >
//             Send Message
//           </button>
//         </form>
//       </div>

//       {/* Floating Dock */}
//       <FloatingDock
//         items={dockItems}
//         mobileClassName="translate-y-8"
//         desktopClassName="mt-8"
//       />
//     </div>
//   );
// }




"use client";

import { useState } from "react";
import { FloatingDock } from "../components/ui/floating-dock";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandInstagram,
  IconMail,
  IconPhone,
  IconHome,
} from "@tabler/icons-react";
import emailjs from "emailjs-com";

// EmailJS credentials
const SERVICE_ID = "service_fg0pamx";
const TEMPLATE_ID = "template_xwosto9";
const PUBLIC_KEY = "0IvWMIWIxi-QSNjty";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs.send(SERVICE_ID, TEMPLATE_ID, form, PUBLIC_KEY)
      .then(() => {
        alert("✅ Message sent successfully!");
        setForm({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        console.error("❌ EmailJS Error:", error);
        alert("Failed to send message. Please try again later.");
      });
  };

  const dockItems = [
    { title: "Home", icon: <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />, href: "/" },
    { title: "Email", icon: <IconMail className="h-full w-full text-neutral-500 dark:text-neutral-300" />, href: "mailto:puneetkathpalia99@gmail.com" },
    { title: "Phone", icon: <IconPhone className="h-full w-full text-neutral-500 dark:text-neutral-300" />, href: "tel:+91 9053457133" },
    { title: "LinkedIn", icon: <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />, href: "https://www.linkedin.com/in/puneetkathpalia/" },
    { title: "Instagram", icon: <IconBrandInstagram className="h-full w-full text-neutral-500 dark:text-neutral-300" />, href: "https://www.instagram.com/puneetkathpalia/" },
    { title: "GitHub", icon: <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />, href: "https://github.com/PuneetKathpalia" },
  ];

  return (
    <div id="contact" className="scroll-mt-14 min-h-screen flex flex-col items-center justify-center bg-[#0B0D10] px-4 py-10 space-y-10">
      <div className="w-full max-w-lg bg-white dark:bg-neutral-900 shadow-md rounded-lg p-8 space-y-6">
        <h1 className="text-3xl font-bold text-center text-[#F2F2F2] dark:text-neutral-100">Get in Touch</h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            className="w-full p-4 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-gray-50 dark:bg-neutral-800 text-neutral-900 dark:text-white focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            className="w-full p-4 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-gray-50 dark:bg-neutral-800 text-neutral-900 dark:text-white focus:ring-2 focus:ring-blue-500"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows={5}
            value={form.message}
            onChange={handleChange}
            className="w-full p-4 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-gray-50 dark:bg-neutral-800 text-neutral-900 dark:text-white focus:ring-2 focus:ring-blue-500"
            required
          />
          <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-200">
            Send Message
          </button>
        </form>
      </div>

      <FloatingDock items={dockItems} mobileClassName="translate-y-8" desktopClassName="mt-8" />
    </div>
  );
}
