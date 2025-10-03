import * as React from "react"

import { cn } from "@/lib/utils"

const Skeleton = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      data-slot="skeleton"
      className={cn(
        "animate-pulse rounded-base bg-secondary-background border-2 border-border",
        className
      )}
      {...props} />
  );
})
Skeleton.displayName = "Skeleton"

export { Skeleton }
