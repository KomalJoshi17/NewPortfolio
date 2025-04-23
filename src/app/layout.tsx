// import './globals.css';
// import Navbar from './components/Navbar';
// import Hero from './components/ui/Hero';
// import About from './components/ui/About';
// import Service from './components/ui/Service'; // Changed from Service to Services
// import { AnimatedTestimonialsDemo } from './components/AnimatedTestimonialsDemo';
// import { StickyScrollRevealDemo } from './components/StickyScrollRevealDemo';
// import { CarouselDemo } from './components/CarouselDemo';
// import ContactSection from "./components/ContactSection";


// export const metadata = {
//   title: 'My App',
//   description: 'App description',
// };

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="en" className='dark'>
//       <body className='bg-[#121626] text-white'>
//         <Navbar />
//         <main> 
//            <Hero />
//            <About />
//            <Service /> 
//            <AnimatedTestimonialsDemo/>
//            <StickyScrollRevealDemo/>
//            <CarouselDemo/>   
//            <ContactSection/>
//         </main>
//       </body>
//     </html>
//   );
// }



import './globals.css';
import Navbar from './components/Navbar';
import Hero from './components/ui/Hero';
import About from './components/ui/About';
import Service from './components/ui/Service';
import { AnimatedTestimonialsDemo } from './components/AnimatedTestimonialsDemo';
// import { StickyScrollRevealDemo } from './components/StickyScrollRevealDemo';
import { CarouselDemo } from './components/CarouselDemo';
import ContactSection from './components/ContactSection';
import CertificatesSection from './components/CertificatesSection';

export const metadata = {
  title: 'My App',
  description: 'App description',
};

export default function RootLayout() {
  return (
    <html lang="en" className="dark">
      <body className="bg-[#121626] text-white">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Service />
          <AnimatedTestimonialsDemo />
          <CertificatesSection/>
          <CarouselDemo />
          <ContactSection />
        </main>
      </body>
    </html>
  );
}
