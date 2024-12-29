"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  BarChart,
  FileText,
  Users,
  Award,
  Settings,
  AlertTriangle,
} from "lucide-react";

const navigation = [
  { name: "Dashboard", href: "/admin", icon: BarChart },
  { name: "Articles", href: "/admin/articles", icon: FileText },
  { name: "Users", href: "/admin/users", icon: Users },
  { name: "Badges", href: "/admin/badges", icon: Award },
  { name: "Reports", href: "/admin/reports", icon: AlertTriangle },
  { name: "Settings", href: "/admin/settings", icon: Settings },
];

export function AdminSidebar() {
  const pathname = usePathname();

  return (
    <aside className="border-r bg-muted/20 p-4">
      <nav className="space-y-2">
        {navigation.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-2 rounded-lg px-3 py-2 text-sm transition-colors",
                pathname === item.href
                  ? "bg-primary text-primary-foreground"
                  : "hover:bg-muted"
              )}
            >
              <Icon className="h-4 w-4" />
              {item.name}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}