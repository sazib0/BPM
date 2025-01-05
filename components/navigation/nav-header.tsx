"use client";

import { GitBranch } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

interface NavHeaderProps {
  isCollapsed: boolean;
  onToggleCollapse: () => void;
}

export function NavHeader({ isCollapsed, onToggleCollapse }: NavHeaderProps) {
  return (
    <div className="flex h-14 items-center justify-between border-b px-3 py-2">
      {!isCollapsed && (
        <div className="flex items-center gap-2">
          <GitBranch className="h-6 w-6" />
          <span className="font-semibold">BPM Software</span>
        </div>
      )}
      <Button
        variant="ghost"
        size="icon"
        className={isCollapsed ? "mx-auto" : ""}
        onClick={onToggleCollapse}
      >
        <Menu className="h-4 w-4" />
      </Button>
    </div>
  );
}