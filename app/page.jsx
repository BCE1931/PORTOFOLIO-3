// src/page.jsx (or app/page.jsx, depending on routing setup)

import { personalData } from "../utils/data/personal-data";
import AboutSection from "./components/homepage/about";
import ContactSection from "./components/homepage/contact";
import Education from "./components/homepage/education";
import Experience from "./components/homepage/experience";
import HeroSection from "./components/homepage/hero-section";
import Projects from "./components/homepage/projects";
import Skills from "./components/homepage/skills";

import Navbar from "./components/navbar";
import Footer from "./components/footer";
import ScrollToTop from "./components/helper/scroll-to-top";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./css/card.scss";
import "./css/globals.scss";

// ✅ Vite-style env import
const GTM_ID = import.meta.env.VITE_GTM_ID;

export default function Page() {
  return (
    <>
      <ToastContainer />
      <Navbar />
      <main className="min-h-screen relative mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] text-white">
        <HeroSection />
        <AboutSection />
        <Experience />
        <Skills />
        <Projects />
        <Education />
        <ContactSection />
        <ScrollToTop />
      </main>
      <Footer />
      {/* OPTIONAL: Google Tag Manager */}
      {GTM_ID && (
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','${GTM_ID}');
            `,
          }}
        />
      )}
    </>
  );
}
