import { siteConfig } from "@/config/site"
import { IconGitHub } from "./icons"

const items = siteConfig.mainNav

export function SiteHeader() {
  return (
    <header className="fixed px-3 py-3 lg:px-5 lg:pl-3 z-30 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
      <div className="flex items-center justify-between">
        <div className="flex gap-10">
          <a href="/">
            <span className="text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">
              Making Sense of Stats
            </span>
          </a>
          {items?.length ? (
            <nav className="flex gap-6">
              {items?.map(
                (item, index) =>
                  item.href && (
                    <a
                      key={index}
                      href={item.href}
                      className="flex items-center text-md font-medium text-gray-900 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-500"
                    >
                      {item.title}
                    </a>
                  )
              )}
            </nav>
          ) : null}
        </div>
        <a
          className="w-10 h-10 p-2 rounded cursor-pointer 
              text-gray-800 dark:text-white
              hover:bg-gray-100 dark:hover:bg-gray-700"
          href={siteConfig.links.github}
          target="_blank"
          rel="noreferrer"
        >
          <IconGitHub />
        </a>
      </div>
    </header>
  )
}
