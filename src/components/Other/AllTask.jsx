import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTask = () => {

    const authData = useContext(AuthContext)

    return (
    <div className='bg-[#1c1c1c] p-5 mt-5 rounded'>
        <div className='bg-red-400 py-2 mb-2 px-4 flex justify-between rounded'>
            <h2 className='text-lg font-medium w-1/5'>Employee Name</h2>
            <h3 className='text-lg font-medium w-1/5'>New Task</h3>
            <h5 className='text-lg font-medium w-1/5'>Accepted Task</h5>
            <h5 className='text-lg font-medium w-1/5'>Completed task</h5>
            <h5 className='text-lg font-medium w-1/5'>Failed task</h5>
        </div>
        <div className='overflow-auto'>
        {authData.employees.map((ele, idx)=>{
            return  <div className='border-2 border-emerald-500 py-2 mb-2 px-4 flex justify-between rounded'>
            <h2 className='text-lg font-medium w-1/5' key={idx}>{ele.firstname}</h2>
            <h3 className='text-lg font-medium w-1/5 text-blue-400' key={idx}>{ele.taskCount.newTask}</h3>
            <h5 className='text-lg font-medium w-1/5 text-yellow-400' key={idx}>{ele.taskCount.active}</h5>
            <h5 className='text-lg font-medium w-1/5 text-white' key={idx}>{ele.taskCount.completed}</h5>
            <h5 className='text-lg font-medium w-1/5 text-red-400' key={idx}>{ele.taskCount.failed}</h5>
        </div>
        })}
        </div>
        {/* <div className='bg-red-400 py-2 mb-2 px-4 flex justify-between rounded'>
            <h2>Victor</h2>
            <h3>Make a UI Design</h3>
            <h5>Status</h5>
        </div>
        <div className='bg-green-400 py-2 mb-2 px-4 flex justify-between rounded'>
            <h2>Victor</h2>
            <h3>Make a UI Design</h3>
            <h5>Status</h5>
        </div>
        <div className='bg-yellow-400 py-2 mb-2  px-4 flex justify-between rounded'>
            <h2>Victor</h2>
            <h3>Make a UI Design</h3>
            <h5>Status</h5>
        </div>
        <div className='bg-blue-400 py-2 mb-2 px-4 flex justify-between rounded'>
            <h2>Victor</h2>
            <h3>Make a UI Design</h3>
            <h5>Status</h5>
        </div>
        <div className='bg-purple-400 py-2 mb-2 px-4 flex justify-between rounded'>
            <h2>Victor</h2>
            <h3>Make a UI Design</h3>
            <h5>Status</h5>
        </div> */}
    </div>
  )
}

export default AllTask