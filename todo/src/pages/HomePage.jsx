import React, { useState, useEffect } from 'react'
import icon from '../assets/add.png'
import Tasks from '../components/Tasks'
import './styles/homepagestyles.css'
import axios from 'axios';

const HomePage = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = () => {
    axios.get('http://127.0.0.1:8000/tasks/')
      .then((response) => setTodos(response.data.reverse()))
      .catch((error) => console.log('ERROR : ', error));
  }

  const handleInputChange = (e) => {
    setNewTodo(e.target.value)
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
        addNewTodo();
    }
  };

  const addNewTodo = () => {
    if (newTodo) {
        axios.post('http://127.0.0.1:8000/tasks/', {task : newTodo, completed : false})
        .then((response) => {
            console.log('Todo Added : ', response.data);
            setNewTodo('');
            fetchTodos();
        })
        .catch((error) => {
            console.log('ERROR : ', error);
        })
    } 
  }

  return (
    <div className='bg-gradient-to-br from-purple-800 to-black h-screen flex flex-col justify-center items-center'>
        <div className='text-white w-[40vw] h-[65vh] px-10 py-5'>
            <div className='text-[30px]'>
                Todo
            </div>
            <div className='h-full overflow-auto custom-scroll'>
                {todos.map((todo) => (
                    <Tasks key={todo.id} id = {todo.id} name={todo.task} status={todo.completed} fetchTodos={fetchTodos}/>
                ))}
            </div>
        </div>
        <div className='border-2 border-white opacity-60 rounded-[20px] w-[40vw] h-[8vh] mt-10 bg-transparent px-5 flex flex-row'>
            <input type="text" value={newTodo} placeholder='New Task' onChange={handleInputChange} onKeyDown={handleKeyPress} className='bg-transparent text-white caret-white h-full w-full border-none px-5 outline-none' />
            <button className='w-8 h-full' onClick={addNewTodo}>
                <img src={icon} alt="" />
            </button>
        </div>
    </div>
  )
}

export default HomePage