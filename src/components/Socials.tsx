import React from "react";

const Socials = () => {
  return (
    <ul className="w-full flex justify-center gap-6 text-sm md:text-md md:gap-10">
      <li className="hover:text-orange-200">
        <a href="#123" target="_blank" rel="noreferrer">
          Telegram
          {/* <img src="images/socials/telegram.svg" alt="telegram" width={45} /> */}
        </a>
      </li>
      <li className="hover:text-orange-200">
        <a href="#123" target="_blank" rel="noreferrer">
          {'X(Twitter)'}
          {/* <img src="images/socials/twitter.svg" alt="twitter" width={45} /> */}
        </a>
      </li>
      <li className="hover:text-orange-200">
        <a href="#123" target="_blank" rel="noreferrer">
          Discord
          {/* <img src="images/socials/discord.svg" alt="discord" width={45} /> */}
        </a>
      </li>
    </ul>
  )
}
 
export default Socials;