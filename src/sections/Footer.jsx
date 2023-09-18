import React from "react";
import { footerLogo } from "../assets/images";
import { footerLinks, socialMedia } from "../constants/constants";
import { copyrightSign } from "../assets/icons";

export const Footer = () => {
  return (
    <footer className="max-container  ">
      <div className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col">
        <div className="flex flex-col items-start ">
          <a href="">
            <img src={footerLogo} width={150} height={46} />
          </a>
          <p className="mt-6 text-base leading-7 font-montserrat text-white-400 sm:max-w-sm">
            {" "}
            Get shoes ready for the new term at your nearesrt Nike store. Find
            Your perfect Size In Store. Get Rewards
          </p>
          <div className="flex items-center gap-5 mt-8 ">
            {socialMedia.map((social) => (
              <div className="flex justify-center items-center w-12 h-12 bg-white  rounded-full">
                <img src={social.src} alt={social.alt} width={24} height={24} />
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap ">
          {footerLinks.map((link) => (
            <div key={link.title}>
              <h4 className="text-white font-montserrat text-2xl leading-normal font-medium mb-6">
                {link.title}
              </h4>
              <ul>
                {link.links.map((item) => (
                  <li className="mt-3 text-white-400 font-montserrat text-base leading-normal hover:text-slate-gray cursor-pointer">
                    <a className="text-white" href="">
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-between text-white-400 mt-24  max-sm:flex-col max-sm:items-center ">
        <div className="flex flex-1  justify-start items-center gap-2 font-montserrat cursor-pointer">
          <img
            src={copyrightSign}
            alt=""
            width={20}
            height={20}
            className="rounded-full m-0"
          />
          <p>Copyright.All rights reserved.</p>
        </div>
        <p className="font-monserrat cursor-pointer">Terms & Conditios</p>
      </div>
    </footer>
  );
};
