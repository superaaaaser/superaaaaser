"use client";
import Button from "../ui/Button";
import SunIcon from "../Icon/SunIcon";

export default function Header() {
  return (
    <>
      <div className="w-full px-4 lg:px-24 flex justify-between h-16 items-center bg-white dark:bg-zinc-950">
        <div className="font-semibold text-xl flex items-center gap-1">
          <span className="material-symbols-outlined text-zinc-100 ">
            keyboard_command_key
          </span>
          <span className="text-zinc-100">SuperaseR</span>
        </div>
        <div className="flex flex-row gap-2">
          <Button
            className="border-2 border-black dark:shadow-no-blur-dark dark:border-white dark:text-zinc-100 bg-transparent text-black  font-medium py-1 px-3
          "
          >
            Dowload CV
          </Button>
          <Button className="border-2 border-black dark:shadow-no-blur-dark dark:border-white dark:text-zinc-100 bg-transparent text-black  font-medium p-1">
            <SunIcon className="text-zinc-100 fill-current"></SunIcon>
          </Button>
        </div>
      </div>
      <div className="w-full px-24">
        <div className="w-full h-0.5 bg-zinc-900"></div>
      </div>
    </>
  );
}
