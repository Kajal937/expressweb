import React from 'react'
import OurTeamCard from './Cards/OurTeamCard'

const OurTeam = () => {
  return (
   <>

<section class="text-gray-700 body-font border-t border-gray-200 max-w-[1200px] mx-auto w-full">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-col text-center w-full mb-20">
      <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Our Team</h1>
      <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them.</p>
    </div>
    <div class="flex flex-wrap -m-2">
      {[1, 2, 3, 4, 5, 6, 7, 8].map((v, index) =>{
       return <OurTeamCard key= {index}/>
      })}
    </div>
  </div>
</section>

   </>
  )
}

export default OurTeam
