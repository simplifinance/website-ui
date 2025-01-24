// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// import {
//   faDiscord,
//   faTwitter,
//   faYoutube,
//   faInstagram,
//   faReddit,
// } from "@fortawesome/free-brands-svg-icons"
// import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import React from "react"
import Socials from "../Socials"
import Link from "next/link"

const Footer = () => {
  return (
    <footer
      className="bg-green1 border-t border-t-gray1/50 py-10 p-4 text-orange-400 font-inter space-y-12"
      id="footer"
    >
      <Socials />
      <div className="wrapper opacity-50 text-xs md:text-sm text-center text-orange-200">
        &copy;2025 SimpliFinance. All rights reserved.
      </div>
    </footer>
  )
}

{/* <div className="wrapper flex flex-col lg:flex-row justify-between">
  <ul className="">
    {/* <li>
      <h1 className="font-nova-square text-3xl lg:text-5xl mb-[16px] lg:mb-[24px] ">
        SimpliFinance
      </h1>
    </li> */}
export default Footer

          {/* <li className="mt-[16px] lg:mt-[24px] text-lg lg:text-xl">
            {" "}
            <a
              href="mailto:officialemail@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              officialemail@gmail.com
            </a>
          </li>
        </ul>
        <ul className="mb-[40px] lg:mr-[12rem]">
          <li>
            <h1 className="text-2xl font-bold mb-[16px] lg:mb-[24px] ">
              WHAT WE DO
            </h1>{" "}
          </li>
          <li className="text-lg mb-[8px]">
            <Link href="/">
              Learn
            </Link>{" "}
          </li>
          <li className="text-lg">
            <Link href="/">
              Community
            </Link>{" "}
          </li>
        </ul>
        <ul className="mb-[40px]">
          <li>
            {" "}
            <h1 className="text-2xl font-bold mb-[16px] lg:mb-[24px] ">
              COMPANY
            </h1>{" "}
          </li>
          <li className="text-lg mb-[8px]">
            <Link href="/">
              About Us
            </Link>
          </li>
          <li className="text-lg">
            <Link href="/">
              Privacy Policy
            </Link>{" "}
          </li>
        </ul>
      </div> */}