import React from 'react'
import { FaPlus } from 'react-icons/fa';

const AddTask = () => {
  return (
    <div>
      <button className='btn btn-primary'>Add new task <FaPlus size={12} className='ml-1' /></button>
    </div>
  )
}

export default AddTask