"use client";

import { AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface Alert {
  title: string;
  description: string;
  severity: "error" | "warning" | "success";
}

interface AlertListProps {
  alerts: Alert[];
}

export function AlertList({ alerts }: AlertListProps) {
  return (
    <div className="space-y-4">
      {alerts.map((alert) => (
        <div
          key={alert.title}
          className="flex gap-4 p-4 rounded-lg bg-muted/40"
        >
          <AlertCircle
            className={cn(
              "h-5 w-5",
              alert.severity === "error"
                ? "text-red-500"
                : alert.severity === "warning"
                ? "text-yellow-500"
                : "text-green-500"
            )}
          />
          <div>
            <p className="font-medium">{alert.title}</p>
            <p className="text-sm text-muted-foreground">
              {alert.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}