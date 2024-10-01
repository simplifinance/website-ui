import React from "react"

export const solutionData = [
  {
    id: 0,
    sectionTitle: "Our Solutions",
    subTitle: "We provide the best solution to existing problems",
    paragraph1: (
      <p className="">
        Our FlexPool derives its name from the flexible options it offers 
        to users. Exisitng liquidity protocols have a unified liquidity
        pool created by the protocol where loans are sourced. In contrast, 
        FlexPools is a combination of several liquidity pools created by users.
      </p>
    ),
    paragraph2: (
      <p className="">
        Existing liquidity pools (_ELP_) are controlled and watched by the team 
        or DAO but FlexPools are controlled and run by users. 
      </p>
    ),
    paragraph3: (
      <p className="">
        ELP have a single point of failure during security breachs or in the event 
        where potential vulnerability is exploited which may lead to loss of funds 
        that may significantly put the protocol on its kneel. The permissioned and 
        permissionless nature of FlexPool brings greater decentralization and sense 
        of responsibility to its participants since they're acting as the providers 
        and borrowers at the same time. A bad actor in a permissioned pool will be 
        known ahead by the creator and the chance of succeding is very tiny and almost
         impossible. In a permissionless FlexPool, same sense of responsibity is required except the providers may not be known.
      </p>
    ),
    sectionImage: "images/frame2.svg",
    sectionImage2: "images/frame3.svg",
    sectionImage3: "images/frame4.svg",
    sectionName: "Solutions we offer",
    flexRow: "lg:flex-row",
    flexRowReverse: "lg:flex-row-reverse",
  },
]
