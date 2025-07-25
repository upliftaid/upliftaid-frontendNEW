
import React from "react";
// import { Link } from "react-router-dom";
import {   } from "react-icons/io";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { IoLocation } from "react-icons/io5";
import { TfiYoutube } from "react-icons/tfi";

const Footer = () => {
  return (
    <div className="w-full lg:h-[554px] text-white px-[50px] py-[40px] bg-[#206d6c] mt-24">
      <div className="lg:flex justify-evenly grid md:grid-cols-2 grid-cols-1">
        <div className="lg:w-[500px] min-w-[200px] md:w-[400px] h-[454px] flex flex-col gap-2 mr-16">
          <h1 className="text-[32px]">About Us</h1>
          <div className="bg-pink-600 w-16 h-1"></div>
          <div className="grid gap-4 text-sm md:text-base">
            <p>
              UpliftAid Foundation is more than just a non-profit—it's a
              movement.
            </p>
            <p>
              We invite you to join us in our efforts to make the world a
              better, kinder place. Whether through donations, volunteering, or
              raising awareness, your support can help us continue to create
              meaningful change.
            </p>
            <div className="md:mt-16 mt-10 grid gap-4">
              <h1>Read More</h1>
              <div className="flex gap-1">
                <a
                  href="https://www.facebook.com/Upliftaidfoundation/"
                  className="w-14 h-14 bg-[#1877F2] flex items-center justify-center hover:text-gray-400 hover:bg-blue-600 cursor-pointer"
                >
                  <FaFacebookF />
                </a>
                <a
                  href="https://www.instagram.com/upliftaidfoundation/#"
                  className="w-14 h-14 bg-[#c13584] flex items-center justify-center hover:bg-[#c13584]/50 cursor-pointer"
                >
                  <FaInstagram />
                </a>
                <a
                  href="https://www.linkedin.com/company/upliftaidfoundation/"
                  className="w-14 h-14  flex items-center justify-center bg-[#0077B5] hover:text-gray-400 hover:bg-blue-500 cursor-pointer"
                >
                  <FaLinkedinIn />
                </a>
                <a
                  href="https://www.youtube.com/@upliftaidfoundation"
                  className="w-14 h-14 bg-[#FF0000] flex items-center justify-center hover:bg-[#FF0000]/50 cursor-pointer"
                >
                  <TfiYoutube />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="w-[300px] md:h-[454px] h-[350px] flex flex-col gap-2 md:ml-20 lg:ml-0">
          <h1 className="text-[32px]">Useful Links</h1>
          <div className="bg-pink-600 w-16 h-1"></div>
          <div className="grid gap-4 ml-8">
            <a className="hover:text-pink-500">Home</a>
            <a className="hover:text-pink-500">How it Works</a>
            <a className="hover:text-pink-500">Donate</a>
            <a className="hover:text-pink-500">About</a>
            <a className="hover:text-pink-500">Contact</a>
            <a className="hover:text-pink-500">Carrer</a>
          </div>
        </div>

        <div className="w-[300px] md:h-[454px] h-[300px] flex flex-col gap-2">
          <h1 className="text-[32px]">What we do</h1>
          <div className="bg-pink-600 w-16 h-1"></div>
          <div className="grid gap-4 ml-8">
            <a className="hover:text-pink-500">Latest Donations</a>
            <a className="hover:text-pink-500">Success Stories</a>
            <a className="hover:text-pink-500">Volunteer</a>
            <a className="hover:text-pink-500">Campaigns</a>
            <a className="hover:text-pink-500">Blogging</a>
          </div>
        </div>

        <div className="w-[300px] md:h-[454px] h-[300px] flex flex-col gap-2">
          <h1 className="text-[32px]">Contact Info</h1>
          <div className="bg-pink-600 w-16 h-1"></div>
          <div className="grid gap-8 ml-8">
            <div className="flex gap-2">
              <div className="mt-1.5">
                <IoLocation />
              </div>
              <div>
                <p>Ghaziabad,Uttar</p>
                <p>pradesh,India</p>
              </div>
            </div>
            <div className="flex gap-4 items-center">
              <FaPhone size={12} />
              <p>8319301961</p>
            </div>
            <div className="flex gap-3 items-center">
              <MdEmail />
              <p>hello@upliftaid.org</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center text-xs md:text-base">
        <p>Copyright© 2025 Upliftaid | All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;