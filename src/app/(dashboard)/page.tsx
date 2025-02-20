"use client"
import Spinner from "@/components/ui/Spinner";
import { useTasks } from "@/app/(dashboard)/hooks/useTasks";
import Board from "./_components/Board";

const Home = () => {
  const { loading, tasks, updateTask, deleteTask } = useTasks();

  return (
    <>
      {loading ? (
        <div className="flex justify-center items-center h-screen">
          <Spinner />
        </div>
      ) : (
        <main className="flex flex-col items-center mx-4 md:mx-10">
          <h1 className="text-3xl font-bold mb-4">Boards</h1>
          <Board
            tasks={tasks}
            updateTask={updateTask}
            deleteTask={deleteTask}
          />
        </main>
      )}
    </>
  );
}

export default Home;