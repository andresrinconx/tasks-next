import { db } from "@/lib/firebase";
import { Task } from "@/lib/types";
import { collection, deleteDoc, doc, getDocs, updateDoc } from "firebase/firestore";
import { useEffect, useState, useRef, useCallback } from "react";

export function useTasks() {
  const [loading, setLoading] = useState(true);
  const [tasks, setTasks] = useState<Task[]>([]);

  const previousTasksRef = useRef<Task[]>([]);

  useEffect(() => {
    const getTasks = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "tasks"));
        const tasks = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })) as Task[];

        setTasks(tasks);
        setLoading(false);
      } catch (error) {
        console.log("Error getting tasks", error);
      }
    };
    getTasks()
  }, []);

  const updateTask = useCallback(async (id: string, data: Task) => {
    previousTasksRef.current = tasks;
    try {
      const taskDoc = doc(db, "tasks", id);
      setTasks((prevTasks) => prevTasks.map((task) => task.id === id ? data : task));
      await updateDoc(taskDoc, data);
    } catch (error) {
      console.log("Error updating task:", error);
      setTasks(previousTasksRef.current);
    }
  }, [tasks]);

  const deleteTask = useCallback(async (id: string) => {
    previousTasksRef.current = tasks;
    try {
      const taskDoc = doc(db, "tasks", id);
      await deleteDoc(taskDoc);
      setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
    } catch (error) {
      console.log("Error deleting task", error);
      setTasks(previousTasksRef.current);
    }
  }, [tasks]);

  return {
    loading,
    tasks,
    updateTask,
    deleteTask,
  };
}