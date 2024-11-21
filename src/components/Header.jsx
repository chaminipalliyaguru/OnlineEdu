// import React, { useState } from 'react'
// import EducationalResources from "./EducationalResources/EducationalResources"
// import News from "./News"

function Header() {
  

  return (
    <div>
      <nav className='bg-sky-500'>
        <div className='max-w-7xl mx-auto px-4 sm:px-8 lg:px-10'>
          <div className='flex items-center justify-between h-14'>
            <div className='flex items-center'>
              <div className='flex-shrink-0'>
                <div className='text-white'>
                  <h3 class ="text-3xl font-bold">OnlineEdu</h3>
                </div>
              </div>
                
            </div>
            <div className='hidden md:block'>
                  <div className='ml-4 flex items-center space-x-4'>
                    <a href="/" className='text-white hover:bg-lime-500 hover:text-black rounded-lg p-2'> Home</a>
                    <a href='/News' className='text-white hover:bg-lime-500 hover:text-black rounded-lg p-2'> News</a>
                    <a href='/educationalResources' className='text-white hover:bg-lime-500 hover:text-black rounded-lg p-2'> Educational Resources</a>
                    <a href='/inspirationHub' className='text-white hover:bg-lime-500 hover:text-black rounded-lg p-2'> Inspiration Hub</a>
                    <a href='/' className='text-white hover:bg-lime-500 hover:text-black rounded-lg p-2'> Help</a>
                  </div>

                </div>
          </div>
          <div className='md:hidden flex items-center'>
            
          

          </div>

        </div>
      </nav>
    </div>
  )
}

export default Header
