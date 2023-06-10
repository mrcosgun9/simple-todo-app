import { ITask } from "@/types/tasks";

const baseUrl = "http://localhost:3001";
export const getAllTasks = async (): Promise<ITask[]> => {
  const res = await fetch(`${baseUrl}/tasks`, { cache: "no-store" });
  const datas = await res.json();
  return datas;
};

export const addTask = async (task: ITask): Promise<ITask> => {
  const res = await fetch(`${baseUrl}/tasks`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(task),
  });
  const newTask = await res.json();
  return newTask;
};
export const updateTask = async (task: ITask): Promise<ITask> => {
  const res = await fetch(`${baseUrl}/tasks/${task.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(task),
  });
  const uptatedTask = await res.json();
  return uptatedTask;
};
export const deleteTask = async (id: string): Promise<void> => {
  const res = await fetch(`${baseUrl}/tasks/${id}`, {
    method: "DELETE",
  });
  const removeTask = await res.json();
  return removeTask;
};
