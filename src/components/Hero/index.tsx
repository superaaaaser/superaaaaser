export default function Hero() {
  return (
    <div className="w-full  h-[calc(100vh-64px)] flex px-12 md:px-24 bg-white gap-9 ">
      <div className="lg:w-1/2 h-3/4 flex flex-col justify-center">
        <div className="text-[80px]">Hello</div>
        <div className="text-[50px]">
          Im <span className="bg-zinc-900 text-zinc-100">superaaaaser</span>
        </div>
        <div>Junior Develover...</div>
      </div>
      <div className="lg:w-1/2 lg:h-3/4 hidden">hjjhjh</div>
    </div>
  );
}
