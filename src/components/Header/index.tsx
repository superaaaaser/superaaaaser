"use client";
import Button from "../ui/Button";

export default function Header() {
  return (
    <>
      <div className="w-full lg:px-24 flex justify-between h-16 items-center bg-white">
        <div className="font-semibold text-xl flex items-center gap-1">
          <span className="material-symbols-outlined">
            keyboard_command_key
          </span>
          <span>SuperaseR</span>
        </div>

        <div>
          <Button
            className="border-2 border-black bg-transparent text-black  font-medium
          "
          >
            Dowload CV
          </Button>
        </div>
      </div>
      <div className="w-full px-24">
        <div className="w-full h-0.5 bg-zinc-900"></div>
      </div>
    </>
  );
}
