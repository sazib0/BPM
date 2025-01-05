"use client";

import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";
import { MetricCard } from "@/components/dashboard/metric-card";
import {
  Activity,
  AlertCircle,
  ArrowUpRight,
  Clock,
  Users,
} from "lucide-react";

const metrics = [
  {
    icon: Activity,
    iconColor: "text-blue-600 dark:text-blue-400",
    iconBgColor: "bg-blue-100 dark:bg-blue-900",
    label: "Active Processes",
    value: "247",
  },
  {
    icon: ArrowUpRight,
    iconColor: "text-green-600 dark:text-green-400",
    iconBgColor: "bg-green-100 dark:bg-green-900",
    label: "Completion Rate",
    value: "94.2%",
  },
  {
    icon: Clock,
    iconColor: "text-yellow-600 dark:text-yellow-400",
    iconBgColor: "bg-yellow-100 dark:bg-yellow-900",
    label: "Avg. Process Time",
    value: "2.4h",
  },
  {
    icon: Users,
    iconColor: "text-purple-600 dark:text-purple-400",
    iconBgColor: "bg-purple-100 dark:bg-purple-900",
    label: "Active Users",
    value: "1,234",
  },
];

export default function Dashboard() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Dashboard</h1>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {metrics.map((metric) => (
          <MetricCard key={metric.label} {...metric} />
        ))}
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <Card className="p-6">
          <h2 className="text-lg font-semibold mb-4">Recent Processes</h2>
          <div className="space-y-4">
            {[
              {
                name: "Customer Onboarding",
                status: "In Progress",
                time: "2h ago",
              },
              {
                name: "Invoice Approval",
                status: "Completed",
                time: "4h ago",
              },
              {
                name: "Employee Review",
                status: "Pending",
                time: "6h ago",
              },
            ].map((process) => (
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
        </Card>

        <Card className="p-6">
          <h2 className="text-lg font-semibold mb-4">System Alerts</h2>
          <div className="space-y-4">
            {[
              {
                title: "Process Bottleneck Detected",
                description:
                  "High wait times detected in Invoice Approval process.",
                severity: "warning",
              },
              {
                title: "Integration Error",
                description: "Failed to sync data with CRM system.",
                severity: "error",
              },
              {
                title: "Performance Improvement",
                description:
                  "Customer Onboarding process completion time reduced by 15%.",
                severity: "success",
              },
            ].map((alert) => (
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
        </Card>
      </div>
    </div>
  );
}