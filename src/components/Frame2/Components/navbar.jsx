"use client"
import { useState } from "react";
import Link from "next/link";
import { MenuIcon, XIcon } from "@heroicons/react/outline"; // Import icons from Heroicons
import { cn } from "../../../Lib/utils";

export function MainNav({ className, ...props }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={cn("bg-white p-4 shadow-md md:flex md:items-center md:justify-between", className)} {...props}>
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <div className="w-8 h-8 rounded-full border-4 border-yellow-600"></div>
          <Link href="#" className="text-sm font-medium text-yellow-600">
            Home
          </Link>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-yellow-600 focus:outline-none">
            {isOpen ? (
              <XIcon className="h-6 w-6" />
            ) : (
              <MenuIcon className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>
      <div className={`${isOpen ? "block" : "hidden"} md:flex md:items-center md:space-x-6 mt-4 md:mt-0`}>
        <Link href="#" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
          Dashboard
        </Link>
        <Link href="#" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
          Projects
        </Link>
        <Link href="#" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
          Tasks
        </Link>
        <Link href="#" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
          Reporting
        </Link>
        <Link href="#" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
          Users
        </Link>
      </div>
    </nav>
  );
}
