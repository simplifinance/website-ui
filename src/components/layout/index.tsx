// Page Layout
import NavBar from "./Navbar"
import Footer from "./Footer"
import { useEffect, useState } from "react"
// import ScrollButton from "./scrollButton"
import Spinner from "../Spinner"
import React from "react"

const Layout : React.FC<{ handleClick: () => void, isClicked: boolean, children: React.ReactNode }> = ({ handleClick, isClicked, children }) => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 3000)
  }, [])

  return (
    <div className="relative">
      <section
        className={[
          "fixed h-screen w-full flex justify-center items-center bg-green1 z-50",
          !loading && "hidden",
        ].join(" ")}
      >
        <Spinner size={40} color={"white"} />
      </section>

      <main className="relative font-gothic">
        {/* <ScrollButton windowIsDefined={windowIsDefined} /> */}
        <NavBar handleClick={handleClick} isClicked={isClicked} />
        {children}
        <Footer />
      </main>
    </div>
  )
}

export default Layout

  // useEffect(() => {
  //   if (windowIsDefined) {
  //     window.WOW = require("wowjs")
  //   }
  //   new WOW.WOW().init()
  // }, [])