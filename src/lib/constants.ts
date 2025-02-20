import { Priority, Status, Option } from "./types";

export const statuses: Option<Status>[] = [
  { value: "to do", color: "#9ca3af" },
  { value: "in progress", color: "#facc15" },
  { value: "under review", color: "#60a5fa" },
  { value: "done", color: "#48b735" },
];

export const priorities: Option<Priority>[] = [
  { value: "low", color: "#48b735" },
  { value: "medium", color: "#3ab1e0" },
  { value: "high", color: "#e51981" },
];

export const statusesList = statuses.map((status) => status.value);
export const prioritiesList = priorities.map((priority) => priority.value);
