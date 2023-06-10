import { ITask } from '@/types/tasks'
import React from 'react'
import TaskListElement from './TaskListElement'
interface IProps {
  tasks: ITask[]
}
const TaskList = ({ tasks }: IProps) => {

  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>

          {tasks?.map(task => {
            return <TaskListElement task={task} key={task.id} />
          })}

        </tbody>
      </table>
    </div>
  )
}

export default TaskList