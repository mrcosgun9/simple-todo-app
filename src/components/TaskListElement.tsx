"use client"
import { ITask } from '@/types/tasks'
import React, { FormEventHandler, useState } from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa'
import Modal from './Modal'
import { useRouter } from 'next/navigation'
import { deleteTask, updateTask } from '@/utils/api'
interface IProps {
  task: ITask
}
const TaskListElement = ({ task }: IProps) => {
  const router = useRouter();
  const [isEditModalOpen, setEditIsModalOpen] = useState<boolean>(false);
  const [isDeleteModalOpen, setDeleteIsModalOpen] = useState<boolean>(false);
  const [editTask, setEditTask] = useState<string>(task.text);
  const handleSubmitNewTodo: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    await updateTask({ id: task.id, text: editTask });
    setEditIsModalOpen(false);
    router.refresh();
  }
  const handleDeleteTask = async (id: string) => {
    await deleteTask(id);
    setEditIsModalOpen(false);
    router.refresh();
  }

  return (
    <tr key={task.id}>
      <td className='w-full'>{task.text}</td>
      <td className='flex gap-4'>
        <FaTrash onClick={() => { setDeleteIsModalOpen(true) }} className='text-red-500 hover:text-red-600 cursor-pointer' size={20} />
        <Modal isModalOpen={isDeleteModalOpen} setIsModalOpen={setDeleteIsModalOpen} >

          <h3 className='font-bold '>Are you sure, you want to delete this task?</h3>
          <div className='modal-action'>
            <button type="submit" className='btn' onClick={() => { handleDeleteTask(task.id) }}>Yes</button>
          </div>

        </Modal>
        <FaEdit onClick={() => { setEditIsModalOpen(true) }} className='text-blue-500 hover:text-blue-600 cursor-pointer' size={20} />
        <Modal isModalOpen={isEditModalOpen} setIsModalOpen={setEditIsModalOpen} >
          <form onSubmit={handleSubmitNewTodo}>
            <h3 className='font-bold '>Edit Task</h3>
            <div className='modal-action'>
              <input type="text" value={editTask} onChange={(e) => { setEditTask(e.target.value) }} placeholder="Type here" className="input input-bordered w-full" />
              <button type="submit" className='btn'>Submit</button>
            </div>
          </form>
        </Modal>
      </td>
    </tr>
  )
}

export default TaskListElement