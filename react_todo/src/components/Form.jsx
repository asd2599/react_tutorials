import { useState } from "react";

const Form = ({createTodo}) => {    
    const [value, setValue] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();        
        createTodo(value);
        setValue('');
    };

  return (
    <form className="font-primary flex" onSubmit={handleSubmit}>
        <input type="text" placeholder="Add a new todo" className="outline-none bg-transparent, border border-gray-500 p1 [80%]
         text-gray-600 rounded placeholder:text-gray-400" value={value} onChange={(e) => setValue(e.target.value)} />
        <button className="bg-gray-700 border-none p-2 text-gray-300 rounded ml-2 w-[20%]">Add</button>
    </form>
  )
}

export default Form