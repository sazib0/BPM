"use client";

import { cn } from "@/lib/utils";

interface Process {
  name: string;
  status: "Completed" | "In Progress" | "Pending";
  time: string;
}

interface ProcessListProps {
  processes: Process[];
}

export function ProcessList({ processes }: ProcessListProps) {
  return (
    <div className="space-y-4">
      {processes.map((process) => (
        <div
          key={process.name}
          className="flex items-center justify-between p-4 rounded-lg bg-muted/40"
        >
          <div>
            <p className="font-medium">{process.name}</p>
            <p className="text-sm text-muted-foreground">{process.time}</p>
          </div>
          <span
            className={cn(
              "text-sm px-2.5 py-0.5 rounded-full font-medium",
              process.status === "Completed"
                ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-400"
                : process.status === "In Progress"
                ? "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-400"
                : "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-400"
            )}
          >
            {process.status}
          </span>
        </div>
      ))}
    </div>
  );
}