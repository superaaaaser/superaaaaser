"use client";
import Button from "../ui/Button";

export default function Header() {
  return (
    <>
      <div className="w-full px-24 flex justify-between h-16 items-center bg-white border-b-2 border-black">
        <div className="font-bold text-base">
          <span>Super </span>
          <span className="text-emerald-500">aaaseR</span>
        </div>

        <div>
          <Button
            className="border-2 border-black bg-transparent text-black text-base font-medium rounded-lg 
          "
          >
            Dowload CV
          </Button>
        </div>
      </div>
    </>
  );
}
