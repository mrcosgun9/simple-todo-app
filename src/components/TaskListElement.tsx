import { ITask } from '@/types/tasks'
import React from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa'
interface IProps {
  task: ITask
}
const TaskListElement = ({ task }: IProps) => {
  return (
    <tr key={task.id}>
      <td className='w-full'>{task.text}</td>
      <td className='flex gap-4'>
        <FaTrash className='text-red-600' size={20} />
        <FaEdit className='text-blue-600' size={20} />
      </td>
    </tr>
  )
}

export default TaskListElement