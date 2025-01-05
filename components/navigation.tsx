"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ChevronRight } from "lucide-react";
import { NavigationItems } from "@/config/navigation";
import { NavHeader } from "@/components/navigation/nav-header";
import { UserProfile } from "@/components/navigation/user-profile";

export default function Navigation() {
  const pathname = usePathname();
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [openMenus, setOpenMenus] = useState<string[]>([]);

  const toggleMenu = (menuName: string) => {
    setOpenMenus((prev) =>
      prev.includes(menuName)
        ? prev.filter((name) => name !== menuName)
        : [...prev, menuName]
    );
  };

  return (
    <div
      className={cn(
        "relative flex flex-col border-r bg-muted/40 transition-all duration-300",
        isCollapsed ? "w-16" : "w-64"
      )}
    >
      <NavHeader 
        isCollapsed={isCollapsed} 
        onToggleCollapse={() => setIsCollapsed(!isCollapsed)} 
      />
      
      <nav className="flex-1 space-y-1 p-2">
        {NavigationItems.map((item) => (
          <div key={item.name}>
            <Link
              href={item.href}
              className={cn(
                "flex items-center gap-x-3 rounded-lg px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground",
                pathname === item.href && "bg-accent text-accent-foreground",
                !isCollapsed && item.subItems && "justify-between"
              )}
            >
              <div className="flex items-center gap-x-3">
                <item.icon className="h-4 w-4" />
                {!isCollapsed && <span>{item.name}</span>}
              </div>
              {!isCollapsed && item.subItems && (
                <ChevronRight
                  className={cn(
                    "h-4 w-4 transition-transform",
                    openMenus.includes(item.name) && "rotate-90"
                  )}
                />
              )}
            </Link>
            {!isCollapsed &&
              item.subItems &&
              openMenus.includes(item.name) &&
              item.subItems.map((subItem) => (
                <Link
                  key={subItem.href}
                  href={subItem.href}
                  className={cn(
                    "ml-9 flex items-center gap-x-3 rounded-lg px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground",
                    pathname === subItem.href &&
                      "bg-accent text-accent-foreground"
                  )}
                >
                  {subItem.name}
                </Link>
              ))}
          </div>
        ))}
      </nav>

      <UserProfile isCollapsed={isCollapsed} />
    </div>
  );
}