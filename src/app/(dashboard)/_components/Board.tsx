import { prioritiesList, statusesList } from "@/lib/constants";
import Task from "./Task";
import { Task as ITask } from "@/lib/types";

type BoardProps = {
  tasks: ITask[];
  updateTask: (id: string, data: ITask) => Promise<void>;
  deleteTask: (id: string) => Promise<void>;
}

const Board = ({ tasks, updateTask, deleteTask }: BoardProps) => {
  return (
    <div className="flex flex-col md:flex-row">
      {statusesList.map((status) => {
        return (
          <div key={status} className="w-full p-2">
            <div className="flex items-center mb-4">
              <h2 className="text-md font-bold text-black capitalize">{status}</h2>
              <button className="hover:bg-gray-300 text-[#adb0b7] ml-0.5 w-6 h-6 rounded-full">
                +
              </button>
            </div>

            {tasks
              .filter((task) => task.status === status)
              .sort((a, b) => prioritiesList.indexOf(a.priority) - prioritiesList.indexOf(b.priority))
              .map((task) => (
                <Task
                  key={task.id}
                  task={task}
                  updateTask={updateTask}
                  deleteTask={deleteTask}
                />
              ))}
          </div>
        );
      })}
    </div>
  );
}

export default Board;