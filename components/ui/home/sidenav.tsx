import clsx from "clsx";
import { PlusIcon } from "lucide-react";
import Link from "next/link";
import NavLinks from "./nav-links";

export default function SideNav() {
  return (
    <div className="flex h-full flex-col px-3 py-4 gap-2 md:px-2">
      <Link
        href="/protected/new"
        className={clsx(
          "flex h-[48px] grow items-center bg-blue-600 justify-center rounded-md  p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3"
        )}
        key={"Nueva Lista"}
      >
        <PlusIcon size={20} />
        <p> Nueva Lista</p>
      </Link>
      <div className="flex grow flex-row space-x-2 md:flex-col md:space-x-0 md:space-y-2">
        <NavLinks />
      </div>
    </div>
  );
}
