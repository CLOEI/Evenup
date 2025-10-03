"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { useAuth } from "@/hooks/useAuth";

export default function Navbar() {
  const { user, loading, logout } = useAuth();

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <nav className="w-full border-b-4 border-border bg-secondary-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/">
              <h1 className="text-2xl font-black tracking-tight cursor-pointer hover:opacity-80 transition-opacity">
                Evenup
              </h1>
            </Link>
          </div>

          <div className="flex items-center gap-4">
            {loading ? (
              <div className="w-10 h-10 rounded-full bg-gray-200 animate-pulse" />
            ) : user ? (
              <>
                <span className="text-sm font-medium hidden sm:block">
                  {user.name}
                </span>
                <Avatar className="cursor-pointer" onClick={logout}>
                  <AvatarFallback>{getInitials(user.name)}</AvatarFallback>
                </Avatar>
              </>
            ) : (
              <Button asChild>
                <Link href="/auth">Sign In</Link>
              </Button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
