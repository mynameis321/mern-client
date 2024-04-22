import React from 'react'
import BannerCard from '../home/BannerCard'

const Banner = () => {
  return (
 
    <div className=
    'px-4 lg:px-24 flex items-center bg-teal-100' 
    style={{
        // backgroundImage: `url('src/assets/HomeImg/PercyJacksonFans.webp')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
      
        }}
        >
 


          <div className='flex w-full flex-col md:flex-row justify-between items-center gap-12 py-40'>
    {/* left side */}
    {/* <div className='md:w-full'> */}
    <div className='md:w-1/2 space-y-8 h-full'>
      <h2 className='text-5xl font-bold leading-snug text-black'>Boost confidence with
real books <span className='text-blue-700 px-3'>students love</span></h2>
      <p className='md:w-4/5'>
     " My students always want to take Epic home with them to keep reading and enjoying books after school. I love that this new product makes that possible!”
      </p>
      <div>
            <input type="search" name="search" id="search" placeholder='Search a book' className='py-2 px-2 rounded-s-sm  outline-none'/>
            <button className='bg-blue-700 px-6 py-2 text-white font-medium hover:bg-black transition-all ease-in duration-200'>Search</button>
        </div>
    </div>
    {/* right side */}
    {/* <div>Right side</div> */}
    <div>
        <BannerCard> </BannerCard>
    </div>
  </div>


    </div>
  )
}

export default Banner
