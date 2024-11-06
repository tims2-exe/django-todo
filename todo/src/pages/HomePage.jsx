import React from 'react'

const HomePage = () => {
  return (
    <div className='bg-gradient-to-br from-purple-800 to-black h-screen flex flex-col justify-center items-center'>
        <div className='text-white w-[40vw] h-[65vh]'> 
            
        </div>
        <div className='border-2 border-white opacity-60 rounded-[20px] w-[40vw] h-[8vh] mt-10 bg-transparent px-5'>
            <input type="text" placeholder='New Task' className='bg-transparent text-white caret-white h-full w-full border-none px-5 outline-none' />
            
        </div>
    </div>
  )
}

export default HomePage