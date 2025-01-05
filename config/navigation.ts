import {
  LayoutDashboard,
  GitBranch,
  LineChart,
  Link2,
  Settings2,
  Users2,
  HelpCircle,
} from "lucide-react";

export const NavigationItems = [
  {
    name: "Dashboard",
    href: "/",
    icon: LayoutDashboard,
  },
  {
    name: "Process Design",
    href: "/process-design",
    icon: GitBranch,
    subItems: [
      { name: "Workflow Modeling", href: "/process-design/modeling" },
      { name: "Process Templates", href: "/process-design/templates" },
    ],
  },
  {
    name: "Process Analytics",
    href: "/analytics",
    icon: LineChart,
    subItems: [
      { name: "Performance Monitoring", href: "/analytics/monitoring" },
      { name: "Process Reporting", href: "/analytics/reporting" },
      { name: "Bottleneck Identification", href: "/analytics/bottlenecks" },
    ],
  },
  {
    name: "Integration",
    href: "/integration",
    icon: Link2,
    subItems: [
      { name: "System Integration", href: "/integration/systems" },
      { name: "API Management", href: "/integration/api" },
    ],
  },
  {
    name: "Settings",
    href: "/settings",
    icon: Settings2,
  },
  {
    name: "Team",
    href: "/team",
    icon: Users2,
  },
  {
    name: "Support",
    href: "/support",
    icon: HelpCircle,
  },
];