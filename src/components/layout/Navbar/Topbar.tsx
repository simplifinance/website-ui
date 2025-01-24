import ActiveLink from "./ActiveLink";
import Link from "next/link";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';

const TopBar : React.FC<{ isClicked: boolean, handleClick: () => void }> = ({ isClicked, handleClick }) => {
  return (
    <header className="bg-green1 py-5 lg:py-10 font-inter relative z-30 ">
      <nav className="wrapper">
        <ul className="flex items-center justify-between">
          <li>
            <Link href="/">
              <img
                src="/images/navbar/logoSimplifi.png"
                alt="Logo"
                className="w-[80px] lg:w-[142px]"
              />
            </Link>
          </li>
          <li className="lg:hidden relative z-10">
            {/* hamburger button */}
            <div
              className={isClicked ? "hidden" : "my-auto"}
              onClick={handleClick}
            >
              <img src="images/navbar/bar.svg" alt="menu" width={50} />
            </div>
          </li>
          <div className="hidden lg:flex font-medium">
            <ActiveLink
              className="mx-[36.5px]"
              href="/"
              handleClick={handleClick}
            >Home</ActiveLink>
            <ActiveLink
              className="mx-[36.5px]"
              href="/#learn"
              handleClick={handleClick}
            >Learn</ActiveLink>
            <ActiveLink
              className="mx-[36.5px]"
              href="/#footer"
              handleClick={handleClick}
            >Community</ActiveLink>
          </div>
          <div className="hidden lg:flex">
            <Link href="https://testnet.simplifinance.xyz/" target="_blank" className="w-full p-3 uppercase text-xs flex justify-between items-center gap-2 focus:shadow-sm focus:shadow-200 bg-green1 border border-gray1 rounded-full animate-none text-orange-400 shadow-md shadow-orange-400 hover:shadow-orange-200">
              Testnet Live
              <span className="animate-pulse">
                <FontAwesomeIcon icon={faArrowAltCircleRight} width={15} height={15}/>
              </span>
            </Link>
          </div>
        </ul>
      </nav>
    </header>
  )
}
export default TopBar
