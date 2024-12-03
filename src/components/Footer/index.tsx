import Link from "next/link";
export default function Footer() {
  return (
    <>
      <div className="w-full px-24">
        <div className="w-full h-1 bg-zinc-900"></div>
      </div>
      <div className="w-full px-20 h-20 flex justify-center items-center">
        <Link href="https://github.com/superaaaaser">
          {" "}
          <i className="bx bxl-github text-[40px] dark:text-zinc-100"></i>
        </Link>
      </div>
    </>
  );
}
