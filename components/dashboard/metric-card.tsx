import { LucideIcon } from "lucide-react";
import { Card } from "@/components/ui/card";

interface MetricCardProps {
  icon: LucideIcon;
  iconColor: string;
  iconBgColor: string;
  label: string;
  value: string;
}

export function MetricCard({
  icon: Icon,
  iconColor,
  iconBgColor,
  label,
  value,
}: MetricCardProps) {
  return (
    <Card className="p-4">
      <div className="flex items-center gap-4">
        <div className={`rounded-full ${iconBgColor} p-3`}>
          <Icon className={`h-6 w-6 ${iconColor}`} />
        </div>
        <div>
          <p className="text-sm text-muted-foreground">{label}</p>
          <h3 className="text-2xl font-bold">{value}</h3>
        </div>
      </div>
    </Card>
  );
}