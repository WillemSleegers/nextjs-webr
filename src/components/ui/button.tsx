import { cva } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { ReactNode } from "react"

const buttonVariants = cva(
  "font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2",
  {
    variants: {
      variant: {
        default: `text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 
          focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 
          focus:outline-none dark:focus:ring-blue-800`,
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

type ButtonProps = {
  className?: string
  variant?: "default"
  children: ReactNode
}

export const Button = ({
  className,
  variant,
  children,
  ...props
}: ButtonProps) => {
  return (
    <button className={cn(buttonVariants({ variant, className }))} {...props}>
      {children}
    </button>
  )
}
