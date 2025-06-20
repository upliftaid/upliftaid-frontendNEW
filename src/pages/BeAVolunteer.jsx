import React, { useEffect, useRef, useState } from "react";
import Navbar from "../components/Navbar";
import MobileNavBar from "../components/MobileNavBar";
import Footer from "../components/Footer";
import VolunteerTopSection from "../layout/VolunteerTopSection";
import BecomeAVolunteer from "../layout/BecomeAVolunteer";
import HowToApply from "../layout/HowToApply";
import Teams from "../layout/Teams";
import Testimonials from "../components/Testimonals";
import { owlItems } from "../constants/OwlItems";

export default function BeAVolunteer() {
  const scrollRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    let scrollAmount = 0;
    const scrollSpeed = 1; // pixels per frame
    let animationFrameId;

    const autoScroll = () => {
      if (!isHovered && scrollContainer) {
        scrollAmount += scrollSpeed;
        if (
          scrollAmount >=
          scrollContainer.scrollWidth - scrollContainer.clientWidth
        ) {
          scrollAmount = 0;
        }
        scrollContainer.scrollLeft = scrollAmount;
        animationFrameId = requestAnimationFrame(autoScroll);
      }
    };

    animationFrameId = requestAnimationFrame(autoScroll);

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [isHovered]);

  return (
    <div className="w-full min-h-screen overflow-hidden flex flex-col">
      <Navbar />
      <MobileNavBar />
      <section className="flex-1 bg-fixed bg-no-repeat bg-contain bg-[url(https://zozothemes.com/html/the-charity/img/sections/bg/about-header-bg.jpg)] pt-[70px]">
        <VolunteerTopSection />
        <main className="flex flex-col bg-white w-full gap-4">
          <BecomeAVolunteer />
          <HowToApply />
          {/* <Teams /> */}
          <Testimonials />
          <div
            ref={scrollRef}
            className="flex gap-5 items-center overflow-x-scroll scroll-smooth hide-scrollbar justify-center h-25"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {owlItems.map((i) => (
              <img src={i.image} alt="logo" key={i.id} />
            ))}
          </div>
        </main>
      </section>
      <Footer />
    </div>
  );
}
