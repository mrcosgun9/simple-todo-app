import { ITask } from '@/types/tasks'
import React from 'react'
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
            <th>Favorite Color</th>
          </tr>
        </thead>
        <tbody>

          {tasks?.map(task => {
            return <tr key={task.id}>
              <td>Cy Ganderton</td>
              <td>Blue</td>
            </tr>
          })}

        </tbody>
      </table>
    </div>
  )
}

export default TaskList