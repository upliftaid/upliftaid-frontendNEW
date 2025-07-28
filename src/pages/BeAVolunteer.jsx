import React, { useEffect, useRef, useState } from "react";
import Navbar from "../layout/Navbar";
import MobileNavBar from "../layout/MobileNavBar";
import Footer from "../layout/Footer";
import VolunteerTopSection from "../components/aboutUs/BeAVolunteer/VolunteerTopSection";
import BecomeAVolunteer from "../components/aboutUs/BeAVolunteer/BecomeAVolunteer";
import HowToApply from "../components/aboutUs/BeAVolunteer/HowToApply";
import Testimonials from "../components/aboutUs/BeAVolunteer/Testimonals";
import { owlItems } from "../constants/aboutUs/BeVolunteer/OwlItems";
import Teams from "../components/aboutUs/BeAVolunteer/Teams";

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
    <div className="w-full min-h-screen overflow-hidden flex flex-col font-[Poppins]">
      <Navbar />
      <MobileNavBar />
        <VolunteerTopSection />
        <main className="flex flex-col w-full gap-4">
          <BecomeAVolunteer />
          <HowToApply />
          <Teams/>
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
      <Footer />
    </div>
  );
}
