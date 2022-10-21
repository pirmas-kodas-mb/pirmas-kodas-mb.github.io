import type { NextPage } from "next"
import Head from "next/head"
import { useState, useEffect } from "react"
import { useTheme } from "next-themes"
import { useRouter } from "next/router"
import Link from "next/link"
import { Bars3Icon } from "@heroicons/react/24/outline"
import { XMarkIcon, SunIcon, MoonIcon } from "@heroicons/react/24/outline"

import { LightBulbIcon } from "@heroicons/react/24/solid"
import Image from "next/image"

interface ListItemsInterface {
  className: string
}

const Navbar: NextPage = () => {
  const { theme, setTheme, systemTheme, resolvedTheme } = useTheme()
  // console.log(systemTheme, resolvedTheme)
  const [mounted, setMounted] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const pages = [
    // { href: "/", name: "Pirmas kodas" },
    { href: "/courses", name: "Kursai" },
    // { href: "/topics", name: "Temos" },
    // { href: "/trainers", name: "Dėstytojai" },
    // { href: "/faq", name: "DUK" },
    // { href: "/contacts", name: "Kontaktai" },
    { href: "/for-companies", name: "Kompanijoms" },
    { href: "/about", name: "Apie" },
  ]

  const ListItems = ({ className }: ListItemsInterface) => {
    return pages.map((page) => (
      <li key={page.name} className={className}>
        <Link
          href={page.href}
          onClick={() => {
            setMenuOpen(false)
          }}
          className="group"
        >
          {page.name}
          <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-1 bg-mustard"></span>
        </Link>
      </li>
    ))
  }

  const lightSwitchButton = ({ className }: ListItemsInterface) => {
    const isDark = theme === "dark"
    const Icon = isDark ? MoonIcon : SunIcon
    const targetTheme = isDark ? "light" : "dark"
    return (
      <button
        className={className}
        onClick={() => {
          setTheme(targetTheme)
        }}
      >
        <Icon className="w-8" />
      </button>
    )
  }

  const navLinksMobile = ListItems({ className: "visible md:hidden" })
  const navLinksDesktop = ListItems({ className: "hidden md:flex pr-3" })

  const theButton = lightSwitchButton({ className: "visible md:invisible" })
  const theButton2 = lightSwitchButton({ className: "invisible md:visible" })

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    // dark:from-mustard dark:via-black dark:to-dark-levander
    <div className="sticky top-0 z-50 border-b backdrop-blur bg-opacity-80 border-green-800 border-opacity-30 bg-white dark:bg-black dark:bg-opacity-50">
      <nav className="p-2 text-3xl flex justify-between max-w-2xl md:mx-auto">
        <ul>
          <li>
            <Link className="flex g-2" href="/">
              <Image
                src="/favicon-32x32.png"
                width="32"
                height="32"
                alt="PIRMAS_KODAS"
              ></Image>
              {/* <p>PIRMAS_KODAS</p> */}
            </Link>
          </li>
        </ul>
        <ul className="flex justify-end">
          {navLinksDesktop.concat(theButton2)}
          <li className="visible md:hidden">
            <button
              type="button"
              aria-label="Toggle mobile menu"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <Bars3Icon className="w-8" />
              {menuOpen && (
                <nav className="flex absolute top-0 right-0 flex-col p-2 space-y-3  bg-white shadow md:hidden dark:bg-black  border-l-2">
                  <button
                    className="self-end"
                    type="button"
                    aria-label="Toggle mobile menu"
                    onClick={() => setMenuOpen(false)}
                  >
                    <XMarkIcon className="w-8" />
                  </button>
                  <ul className="flex flex-col gap-2 text-end">
                    {navLinksMobile.concat(theButton)}
                  </ul>
                </nav>
              )}
            </button>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
