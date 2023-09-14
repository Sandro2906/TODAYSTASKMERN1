import React from 'react'

const Fotter = () => {
  return (
    <div className='w-full h-[200px] bg-black flex justify-around p-10 text-white'>
    <div className='w-[200px] h-auto flex flex-col px-5'>
        <h1>© 2023 DailyTasks.  </h1>
        <h1> All Rights Reserved.</h1>
        <h1>Privacy Policy</h1>
        <h1>Terms of Service</h1>
        </div>
        <div className='w-[200px] h-auto flex flex-col px-5'>
        <h1>Contact Us: sandro.yt29@gmail.com | Phone: (123) 456-7890
        Address: 123 Main Street, City, State, 78252
        </h1>
        </div>
        <div className='w-[200px] h-auto flex flex-col px-5'>
        <h1>Connect with Us:
        [Facebook Icon] [Twitter Icon] [LinkedIn Icon] [Instagram Icon]
        </h1>
        </div>
    </div>
  )
}

export default Fotter