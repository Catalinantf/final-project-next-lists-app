"use client";

import clsx from "clsx";
import {
  Clock10Icon,
  FilesIcon,
  HomeIcon,
  StarIcon,
  Trash2Icon,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { name: "Home", href: "/protected", icon: HomeIcon },
  {
    name: "Compartido Conmigo",
    href: "/protected/shared",
    icon: FilesIcon,
  },
  { name: "Reciente", href: "/protected/recent", icon: Clock10Icon },
  { name: "Destacados", href: "/protected/starred", icon: StarIcon },
  { name: "Papelera", href: "/protected/trash", icon: Trash2Icon },
];

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              "flex h-[48px] grow items-center justify-center gap-2 rounded-md  p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3",
              {
                "bg-sky-100 text-blue-600": pathname === link.href,
              }
            )}
          >
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
