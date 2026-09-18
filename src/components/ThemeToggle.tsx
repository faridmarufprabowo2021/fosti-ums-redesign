"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";

export function ThemeToggle({ className = "" }: { className?: string }) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className={`h-9 w-9 rounded-lg border border-border bg-card/60 opacity-0 ${className}`} />
    );
  }

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label="Toggle theme"
      className={`relative inline-flex h-10 w-10 items-center justify-center rounded-xl border-2 border-black bg-white text-zinc-900 shadow-[2px_2px_0px_0px_#000] transition-all duration-150 hover:-translate-y-0.5 hover:shadow-[4px_4px_0px_0px_#000] active:translate-y-0.5 active:shadow-[1px_1px_0px_0px_#000] focus-visible:outline-none dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100 dark:shadow-[2px_2px_0px_0px_rgba(255,255,255,0.2)] ${className}`}
    >
      {isDark ? (
        <Sun className="h-4 w-4 transition-transform duration-200 rotate-0 scale-100 text-amber-400" />
      ) : (
        <Moon className="h-4 w-4 transition-transform duration-200 rotate-0 scale-100 text-zinc-800" />
      )}
    </button>
  );
}
