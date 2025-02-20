import { memo } from "react";
import { Task as ITask } from "@/lib/types";
import { formatTimestamp } from "@/lib/utils";
import Selector from "@/components/ui/Selector";
import { priorities, statuses } from "@/lib/constants";

type TaskProps = {
  task: ITask;
  updateTask: (id: string, data: ITask) => Promise<void>;
  deleteTask: (id: string) => Promise<void>;
}

const Task = ({ task, updateTask, deleteTask }: TaskProps) => {
  const { id, date, name, description, status, priority } = task;

  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden p-3 mb-3">
      <div className="flex justify-between">
        <Selector
          value={priority}
          options={priorities}
          onChange={async (value) => await updateTask(id, { ...task, priority: value })}
          textTransform="uppercase"
        />
        <span className="text-xs font-bold text-gray-500">{formatTimestamp(date)}</span>
      </div>

      <div className="h-24 my-3 bg-gradient-to-r from-blue-300 via-red-200 to-orange-300 rounded-2xl" />

      <div className="mb-3">
        <h3 className="font-semibold text-lg mb-2">{name}</h3>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>

      <div className="flex justify-between">
        <Selector
          value={status}
          options={statuses}
          onChange={async (value) => await updateTask(id, { ...task, status: value })}
          textTransform="capitalize"
        />
        <button
          onClick={async () => await deleteTask(id)}
        >
          <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11 9V15M7 9V15M3 5V17C3 17.5304 3.21071 18.0391 3.58579 18.4142C3.96086 18.7893 4.46957 19 5 19H13C13.5304 19 14.0391 18.7893 14.4142 18.4142C14.7893 18.0391 15 17.5304 15 17V5M1 5H17M4 5L6 1H12L14 5" stroke="#F54D4D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default memo(Task);