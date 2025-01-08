import clsx from "clsx";
import { FileIcon } from "lucide-react";
import Link from "next/link";

export default function FileCard({ title }: { title: any }) {
  return (
    <div className="flex h-full flex-col px-3 py-4 gap-2 md:px-2">
      <Link
        href="/protected/new"
        className={clsx(
          "flex h-[48px] grow items-center bg-blue-600 justify-center rounded-md  p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3"
        )}
      >
        <FileIcon size={20} />
        <p>{title}</p>
      </Link>
    </div>
  );
}
