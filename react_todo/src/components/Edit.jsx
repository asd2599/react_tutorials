import React, { useState } from 'react'

const Edit = ({task, editTask}) => {
    const [value, setValue] = useState('');

const handleSubmit = (e) => {
    e.preventDefault();
    editTask(value, task.id)
    setValue('');
}

  return (
    <form className='font-primary flex' onSubmit={handleSubmit}>
        <input
            type="text" placeholder='Input Edit'
            className='outline-none bg-transparent, border border-gray-500 p-4 w-[80%] text-gray-600 rounded placeholder:text-gray-400' 
            value={value}
            onChange={(e)=> setValue(e.target.value)}
        />
        <button className='bg-gray-700 border-none p-2'>Edit</button>
    </form>
  )
}

export default Edit