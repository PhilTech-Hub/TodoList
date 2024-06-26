import React, { useEffect, useState } from 'react'
import Create from './Create'

function Home() {
    const [todos, setTodos] = useState ([])
    // useEffect(() => {
    //     axios.get('http://localhost:3001/get')
    //     .then(result => setTodos(result.data))  ------Fetch this data after conneting to the database
    //     .catch(err => console.log(err))
    // }, [])

    const handleEdit = (id) => {
        axios.put('http://localhost:3001/update'+id)
        .then(result => {
            location.reload(result)
        })  
        .catch(err => console.log(err))
    }

    const handleDelete = (id) => {
        axios.delete('http://localhost:3001/delete'+id)
        .then(result => {
            location.reload(result)
        })  
        .catch(err => console.log(err))
    }


  return (
    <div className='home'>
        <span className='fade'>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </span>

        <p>Welcome to My Todo List App. </p>
        
        <h2>Todo List</h2>
        <Create/>
        {
            todos.length === 0 
            ?
            <div><h2>No Records</h2></div>
            :
            todos.map(todo => (
                <div className='task'>
                    <div className='checkbox' onClick={ () => handleEdit(todo._id)}>
                        {todo.done ? 
                            <BsFillCheckCircleFill className='icon' ></BsFillCheckCircleFill>
                        :
                            <BsCircleFill className='icon' />
                        }
                        
                        <p className={todo.done ? 'line-through' : ''}>{todo.task}</p>
                    </div>
                    <div>
                        <span><BsFillTrashFill className='icon' onClick={() => handleDelete(todo._id)} /></span>
                    </div>
                </div>
            ))
        }
    </div>
  )
}

export default Home