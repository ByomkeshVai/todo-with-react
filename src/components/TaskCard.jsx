import React from 'react';

const TaskCard = ({task}) => {
    return (

                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <p className='text-sm'> <span>#</span>
                    {task.id}</p>
    <h2 className="text-xl font-bold text-blue-900">Task Title</h2>
                        <p className='text-xl'>{task.title}</p>
                         <h2 className="text-xl font-bold text-blue-900">Task Detail</h2>
    <p>{task.taskDetail}</p>
    <div className="card-actions justify-between mt-5">
                    <button className="btn btn-primary btn-sm px-5">Delete</button>
                    <button className="btn btn-primary btn-sm px-5">Edit</button>
    </div>
  </div>
</div>

    );
};

export default TaskCard;