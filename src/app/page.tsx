'use client';
import AddTask from "@/components/AddTask";
import TaskList from "@/components/TaskList";



export default async function Home() {


  return (
    <main className="max-w-4xl mx-auto mt-4">
      <div className="text-center my-5 flex flex-col gap-4">
        <div className="w-full flex align-middle items-center justify-center">
          <h1>Todo App</h1>
        </div>
        <AddTask />
      </div>
      <TaskList />
    </main >
  )
}
