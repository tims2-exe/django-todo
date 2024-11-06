import React from 'react'
import icon from '../assets/add.png'
import Tasks from '../components/Tasks'
import './styles/homepagestyles.css'

const HomePage = () => {
  return (
    <div className='bg-gradient-to-br from-purple-800 to-black h-screen flex flex-col justify-center items-center'>
        <div className='text-white w-[40vw] h-[65vh] px-10 py-5'>
            <div className='text-[30px]'>
                Todo
            </div>
            <div className='h-full overflow-auto custom-scroll'>
                <Tasks />
                <Tasks />
                <Tasks />
            </div>
        </div>
        <div className='border-2 border-white opacity-60 rounded-[20px] w-[40vw] h-[8vh] mt-10 bg-transparent px-5 flex flex-row'>
            <input type="text" placeholder='New Task' className='bg-transparent text-white caret-white h-full w-full border-none px-5 outline-none' />
            <button className='w-8 h-full'>
                <img src={icon} alt="" />
            </button>
        </div>
    </div>
  )
}

export default HomePage