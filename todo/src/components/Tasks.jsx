import React, { useState } from 'react';
import del from '../assets/trash.png';
import edit from '../assets/edit.png';
import check from '../assets/checkbox.png';
import uncheck from '../assets/unchecked.png';

const Tasks = () => {
  const [checked, setChecked] = useState(false);

  const toggleChecked = () => {
    setChecked(prevState => !prevState)
  }

  return (
    <div className='my-7 flex flex-row justify-between'>
        <div className='text-[20px] flex flex-row justify-center items-start'>
            <button onClick={toggleChecked} className='w-8 mr-5 opacity-80'>
                <img src={checked ? check : uncheck} alt="" />
            </button>
            <p>Tasks</p>
        </div>
        <div className='w-[80px] flex flex-row opacity-80'>
            <button>
                <img src={edit} alt="" />
            </button>
            <div className='w-20'>

            </div>
            <button>
                <img src={del} alt="" />
            </button>
        </div>
    </div>
  )
}

export default Tasks