// @ts-nocheck
import React from "react"
import SectionBody from "../unusedFolders/sectionBody"
import SectionHeader from "../unusedFolders/sectionHeader"

const About = () => {
  return (
    <section className="wrapper font-inter text-lg lg:text-xl text-white1 text-left lg:text-center"
    id="about">
      {DATA.map((data) => (
        <div key={data.id} className="py-10 lg:py-20">
          <SectionHeader
            sectionTitle={data.sectionTitle}
            subTitle={data.subTitle}
          />
          <SectionBody
            paragraph1={data.paragraph1}
            paragraph2={data.paragraph2}
            sectionImage={data.sectionImage}
            sectionName={data.sectionName}
            flexRow={data.flexRow}
          />
        </div>
      ))}
    </section>
  )
}

export default About

const DATA = [
  {
    id: 0,
    sectionTitle: "Who We Are",
    subTitle: "Who we are and our mission at SimpliFinance",
    paragraph1: (
      <p className="mb-5">
        An ecosystem of decentralized, multifaceted & multifunctional
        non-custodial protocols for safe crypto dealings.
      </p>
    ),
    paragraph2: (
      <p className="">
        At SimpliFinance, we harness the potentials of blockchain technology to
        provide solutions to existing  and emerging problem in societies making
        the solutions available globally.
      </p>
    ),
    sectionImage: "images/frame1.svg",
    sectionName: "About us",
    flexRow: "lg:flex-row",
    flexRowReverse: "lg:flex-row-reverse",
  },
]
