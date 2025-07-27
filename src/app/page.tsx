"use client";
import AboutSection from "@/components/About";
import Features from "@/components/Features";
import  Hero  from "@/components/Hero";

import SkillsSection from "@/components/Skills";
import { LinkPreviews } from "@/components/Url";
import React, { useRef } from "react";

const Page = () => {
  const aboutRef = useRef<HTMLDivElement>(null);

  const scrollToAbout = () => {
    aboutRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Hero scrollToAbout={scrollToAbout} />
      <div ref={aboutRef}>
        <AboutSection />
      </div>
      <SkillsSection />
      <Features />
      <LinkPreviews />
      
   
    </>
  );
};

export default Page;
