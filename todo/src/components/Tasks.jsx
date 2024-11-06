import React, { useState, useRef } from 'react';
import del from '../assets/trash.png';
import edit from '../assets/edit.png';
import check from '../assets/checkbox.png';
import uncheck from '../assets/unchecked.png';
import update from '../assets/add.png';
import axios from 'axios';

const Tasks = ({ id, name, status, fetchTodos }) => {
  const [checked, setChecked] = useState(status); 
  const [editMode, setEditMode] = useState(false);
  const [updatedTask, setUpdatedTask] = useState(name);
  
  const inputRef = useRef(null);

  const toggleChecked = () => {
    setChecked(prevState => {
      const newChecked = !prevState;
      handleUpdate(newChecked);
      return newChecked;
    });
  }

  const handleEdit = () => {
    setEditMode(true);
  }

  const handleUpdate = (completedStatus = checked) => {
    if (updatedTask !== name || completedStatus !== status) {
      axios.put(`http://127.0.0.1:8000/tasks/${id}/`, { task: updatedTask, completed: completedStatus })
        .then(() => {
          setEditMode(false);
          fetchTodos();
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      setEditMode(false);
    }
  }

  const deleteTodo = () => {
    axios.delete(`http://127.0.0.1:8000/tasks/${id}/`)
      .then(() => {
        fetchTodos();
      })
      .catch((error) => {
        console.log(error);
      });
  }

  React.useEffect(() => {
    if (editMode && inputRef.current) {
      inputRef.current.focus();
    }
  }, [editMode]);

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleUpdate();
    }
  }

  return (
    <div className='my-7 flex flex-row justify-between'>
      <div className='text-[20px] flex flex-row justify-center items-start'>
        <button onClick={toggleChecked} className='w-8 mr-5 opacity-80'>
          <img src={checked ? check : uncheck} alt="" />
        </button>
        {editMode ? (
          <input
            type="text"
            value={updatedTask}
            onChange={(e) => setUpdatedTask(e.target.value)}
            className="bg-transparent text-white caret-white"
            ref={inputRef} 
            onKeyDown={handleKeyDown} 
          />
        ) : (
          <p>{name}</p>
        )}
      </div>
      <div className='w-[80px] flex flex-row opacity-80'>
        {editMode ? (
          <button onClick={handleUpdate}>
            <img src={update} alt="Save" className='w-[60px]' />
          </button>
        ) : (
          <button onClick={handleEdit}>
            <img src={edit} alt="Edit" />
          </button>
        )}
        <div className='w-20'></div>
        <button onClick={() => deleteTodo()}>
          <img src={del} alt="Delete" />
        </button>
      </div>
    </div>
  );
}

export default Tasks;
