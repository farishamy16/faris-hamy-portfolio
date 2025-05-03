"use client";

import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";
import { Button } from "./ui/button";

const links = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "services",
    path: "/services",
  },
  {
    name: "resume",
    path: "/resume",
  },
  {
    name: "work",
    path: "/work",
  },
  // {
  //   name: "contact",
  //   path: "/contact",
  // },
];

const MobileNav = () => {
  const pathname = usePathname();
  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[32px] text-accent" />
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        {/* logo */}
        <div className="mt-32 mb-40 text-center text-2xl">
          <SheetClose asChild>
            <Link href="/">
              <h1 className="text-4xl font-semibold">
                Faris<span className="text-accent">.</span>
              </h1>
            </Link>
          </SheetClose>
        </div>
        {/* nav */}
        <nav className="flex flex-col justify-center items-center gap-8">
          {links.map((link, index) => {
            return (
              <SheetClose key={index} asChild>
                <Link
                  href={link.path}
                  className={`${
                    link.path === pathname &&
                    "text-accent border-b-2 border-accent"
                  } text-xl capitalize hover:text-accent transition-all`}
                >
                  {link.name}
                </Link>
              </SheetClose>
            );
          })}
        </nav>
        <SheetClose asChild>
          <Link
            href="https://wa.link/nuje5i"
            target="_blank"
            className="flex flex-col justify-center items-center py-4"
          >
            <Button>Hire me</Button>
          </Link>
        </SheetClose>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
