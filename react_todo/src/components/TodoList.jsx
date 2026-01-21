import Form from "./Form"
import React, { useState } from "react";
import {v4 as uuidv4} from 'uuid';
import Todo from "./Todo";
import Edit from "./Edit";
import Check from "./Check";
uuidv4();

const TodoList = () => {  
  const [todoValue, setTodoValue] = useState([]);

  const createTodo = (todo) => {
    setTodoValue([...todoValue, {id: uuidv4(), task: todo, isEdit: false, isComplete: false}]);    
  };

  const deleteTodo = (id) => {
    setTodoValue(todoValue.filter((todo) => todo.id != id));
  };

  const editTodo = (id) => {
    setTodoValue(
        todoValue.map((todo) => {
          return todo.id === id ? {...todo, isEdit: !todo.isEdit} : todo;
        })
      );
  };

  const checkTodo = (id) => {
    setTodoValue(
      todoValue.map((todo) => {
        console.log(todo)
        return todo.id === id ? {...todo, isComplete: !todo.isComplete} : todo;
      })
    );
  };

  const editTask = (task, id) => {
    setTodoValue(
      todoValue.map((todo) => todo.id === id ? {...todo, task: task, isEdit: false} : todo)
    )
  };

  return (
    <div className="container">
      <Form createTodo={createTodo}/>

      {
        [...todoValue].sort((a, b) => a.isComplete - b.isComplete).map((todo, idx) => {
          // if(todo.isComplete)
          // {
          //   return <Check key={idx} task={todo}/>
          // }
          // else
          // {
          //   if(todo.isEdit)
          //     return  <Edit key={idx} task={todo} editTask={editTask}/>;
          //   else
          //    return <Todo key={idx} task={todo} deleteTodo={deleteTodo} editTodo={editTodo} checkTodo={checkTodo} toggleComplate={toggleComplate}/>;
          // }
          if(todo.isEdit)
                return  <Edit key={idx} task={todo} editTask={editTask}/>;
              else
               return <Todo key={idx} task={todo} deleteTodo={deleteTodo} editTodo={editTodo} checkTodo={checkTodo}/>;
        })
      }
      </div>
  )
}

export default TodoList