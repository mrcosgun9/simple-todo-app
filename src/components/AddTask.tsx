"use client"
import React, { FormEventHandler, useState } from 'react'
import { FaPlus } from 'react-icons/fa';
import Modal from './Modal';
import { addTask } from '@/utils/api';
import { useRouter } from 'next/navigation';
import { v4 as uuidv4 } from "uuid";
const AddTask = () => {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [newTask, setNewTask] = useState<string>("");

  const handleSubmitNewTodo: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    await addTask({ id: uuidv4(), text: newTask });
    setNewTask("");
    setIsModalOpen(false);
    router.refresh();
  }
  return (
    <div>
      <button onClick={() => setIsModalOpen(true)} className='btn btn-primary'>Add new task <FaPlus size={12} className='ml-1' /></button>
      <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} >
        <form onSubmit={handleSubmitNewTodo}>
          <h3 className='font-bold '>Add New Task</h3>
          <div className='modal-action'>
            <input type="text" value={newTask} onChange={(e) => { setNewTask(e.target.value) }} placeholder="Type here" className="input input-bordered w-full" />
            <button type="submit" className='btn'>Submit</button>
          </div>
        </form>
      </Modal>
    </div>
  )
}

export default AddTask