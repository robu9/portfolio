// import * as React from "react"
// import { cva, type VariantProps } from "class-variance-authority"

// import { cn } from "@/lib/utils"

// const badgeVariants = cva(
//   "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
//   {
//     variants: {
//       variant: {
//         default:
//           "border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80",
//         secondary:
//           "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
//         destructive:
//           "border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80",
//         outline: "text-foreground",
//       },
//     },
//     defaultVariants: {
//       variant: "default",
//     },
//   }
// )

// export interface BadgeProps
//   extends React.HTMLAttributes<HTMLDivElement>,
//     VariantProps<typeof badgeVariants> {}

// function Badge({ className, variant, ...props }: BadgeProps) {
//   return (
//     <div className={cn(badgeVariants({ variant }), className)} {...props} />
//   )
// }

// export { Badge, badgeVariants }
import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  // base classes changed to match the UI you provided
  "inline-flex items-center rounded-md relative px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-dashed border bg-white text-black shadow gap-x-1",
  {
    variants: {
      variant: {
        default: "border-black/30 dark:border-white/40 dark:bg-black dark:text-white",
        // keep the other variants available if you want to reuse the same component elsewhere
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline: "text-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {
  /**
   * Optional image/icon src shown left of the children (like your example).
   * If provided, renders a 12x12 (w-3 h-3) <img>.
   */
  imgSrc?: string
  imgAlt?: string
  /**
   * Pass true to apply draggable={false} and the inline style used in your example.
   * Default: true (so it matches your pasted HTML)
   */
  lockPointerStyle?: boolean
}

function Badge({
  className,
  variant,
  children,
  imgSrc,
  imgAlt = "",
  lockPointerStyle = true,
  ...props
}: BadgeProps) {
  const style = lockPointerStyle
    ? {
        cursor: "grab",
        zIndex: "auto" as const,
        userSelect: "none" as const,
        touchAction: "none" as const,
      }
    : undefined

  return (
    <div
      className={cn(badgeVariants({ variant }), className)}
      draggable={false}
      style={style}
      {...props}
    >
      {imgSrc ? (
        // small icon like in your example
        // preserve alt and size classes
        <img src={imgSrc} alt={imgAlt} className="w-3 h-3" />
      ) : null}
      {children}
    </div>
  )
}

export { Badge, badgeVariants }
