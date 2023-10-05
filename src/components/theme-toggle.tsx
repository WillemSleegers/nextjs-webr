"use client"

import { useState } from "react"
import { IconSystem } from "./icons"
import { cn } from "@/lib/utils"

export function ThemeToggle() {
  const [open, setOpen] = useState(false)

  return (
    <div>
      <button
        id="dropdownDefaultButton"
        data-dropdown-toggle="dropdown"
        className="w-10 h-10 p-2 rounded 
        text-gray-600 dark:text-gray-400 dark:hover:text-white
        hover:bg-gray-100 dark:hover:bg-gray-700"
        type="button"
        onClick={() => setOpen((prev) => !prev)}
      >
        <IconSystem />
        <span className="sr-only">Theme</span>
      </button>

      <div
        id="dropdown"
        className={cn(
          "z-10 absolute right-4 mt-1  bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700",
          open ? "" : "hidden"
        )}
      >
        <ul
          className="py-2 text-sm text-gray-700 dark:text-gray-200"
          aria-labelledby="dropdownDefaultButton"
        >
          <li>
            <a
              href="#"
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Dashboard
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Settings
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Earnings
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Sign out
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}
