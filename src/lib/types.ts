export type Status = "to do" | "in progress" | "under review" | "done";
export type Priority = "low" | "medium" | "high";
export type Task = {
  id: string;
  date: {
    seconds: number;
    nanoseconds: number;
  };
  name: string;
  description: string;
  status: Status;
  priority: Priority;
};

export type Option<T> = {
  value: T;
  color: string;
};
