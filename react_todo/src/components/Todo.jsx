import React from 'react'
import { RiEdit2Fill } from "react-icons/ri";
import { IoMdTrash } from "react-icons/io";
import { FaCheck, FaRegCircle } from "react-icons/fa";

const Todo = ({task, deleteTodo, editTodo, checkTodo}) => {    
    

  return (
    <div className={`flex justify-between items-center p-4 border-b bg-slate-500 rounded mb-2 shadow-sm
     ${task.isComplate ? 'bg-slate-700 text-gray-500' : 'bg-slate-500 text-gray-300'}`}>
        <div className='flex items-center gap-x-3'>
        <button onClick = {()=> checkTodo(task.id)}>
            {task.isComplete ? <FaCheck className='text-green-400' /> : <FaRegCircle/>}
        </button>
      <p className={task.isComplete ? "line-through" : ''}>{task.task}</p>
        </div>        
      <div className='flex items-center gap-x-4'>
        <RiEdit2Fill className='text-xl' onClick={ () => editTodo(task.id)}/>
        <IoMdTrash className='text-xl' onClick={() => deleteTodo(task.id)}/>
        <FaCheck className='text-xl' onClick={() => checkTodo(task.id)}/>
      </div>
    </div>
  )
}

export default Todo