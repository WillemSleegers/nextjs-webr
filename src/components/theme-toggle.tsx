"use client"

import * as React from "react"
import { useTheme } from "next-themes"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Icons } from "@/components/icons"

import { buttonVariants } from "./ui/button"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <div
          className={buttonVariants({
            size: "sm",
            variant: "ghost",
          })}
        >
          {(() => {
            switch (theme) {
              case "light":
                return <Icons.sun />
              case "dark":
                return <Icons.moon />
              default:
                return <Icons.system />
            }
          })()}
          <span className="sr-only">Theme</span>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="mt-1 me-3">
        <DropdownMenuItem onClick={() => setTheme("system")}>
          <Icons.system className="me-3" />
          System
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("light")}>
          <Icons.sun className="me-3" />
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          <Icons.moon className="me-3" />
          Dark
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
