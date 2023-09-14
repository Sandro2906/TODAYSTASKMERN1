import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { backendUrl } from './config'

const TasksPage = () => {

    const [task,setTask] = useState('')
    const [items,setItems] = useState([])

    const addTaskToList = async()=>{
        try{
            await axios.post(`${backendUrl}/api/postTasks`, {task})
            const response = await axios.get(`${backendUrl}/api/getTasks`)
            setItems(response.data)
            setTask('')
        } catch(err){
            console.log(err)
        }
       
    }

    const deleteTask = async (id) => {
        try {
            await axios.delete(`${backendUrl}/api/deleteTask/${id}`);
            setItems((prevItems) => prevItems.filter((item) => item._id !== id));
        } catch (err) {
            console.log(err);
        }
    };
    


    useEffect(() => {
        const fetchNewData = async () => {
            try {
                const response = await axios.get(`${backendUrl}/api/getTasks`);
                setItems(response.data);
            } catch (err) {
                console.log(err);
            }
        }
    
        fetchNewData();
    }, []);
    

  return (
    <div className='w-full min-h-screen bg-indigo-700 flex justify-center items-center'>
         <div className='w-[500px] h-auto flex flex-col bg-indigo-900 border-4 border-violet-800 p-4'>
            <h1 className='text-2xl text-white italic'>TASKS</h1>
            {
                items.map((task,id) =>(
            <div key={id} className='w-full h-auto bg-violet-700 shadowbox flex justify-between p-3 text-white my-3'>
            <h1>{task.task}</h1>
              <button onClick={()=> deleteTask(task._id)}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
              </svg>
              </button>
            </div>
            ))
        }
            <div className='flex justify-between my-3'>
                <input onChange={e => setTask(e.target.value)} value={task} className='w-full p-3 border-2 border-indigo-500' type='text' placeholder='Type task' />
                <button onClick={addTaskToList} className='ml-3 text-white'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 8.25H7.5a2.25 2.25 0 00-2.25 2.25v9a2.25 2.25 0 002.25 2.25h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25H15m0-3l-3-3m0 0l-3 3m3-3V15" />
              </svg>
              </button>
            </div>
        </div>
    </div>
  )
}

export default TasksPage
