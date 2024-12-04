import Card from "../ui/Card/Index";

export default function Project() {
  return (
    <div className="px-12 md:px-24 py-20">
      <div className="flex pb-10">
        <div className="dark:bg-zinc-100">Project</div>
        <div>This is the lates my Project</div>
      </div>
      <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-4">
        <Card className="w-full p-2 dark:bg-zinc-950 dark:text-zinc-100">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat
          nihil porro recusandae sed! Animi voluptatibus nobis aperiam eum
          laudantium? Dicta excepturi ut ullam culpa sapiente ipsum nam soluta,
          sunt possimus. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Nisi a numquam, consequuntur officiis, suscipit aperiam
          perspiciatis facere voluptate cumque tempore quas quis natus, ipsa
          dolorum distinctio corrupti doloribus ab amet.
        </Card>
        <Card className="">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat
          numquam praesentium ea, beatae quae maiores quo cupiditate, hic sed
          velit asperiores ut tempore incidunt aliquam quibusdam expedita
          nostrum inventore necessitatibus?
        </Card>
        <Card className="">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic delectus
          voluptatum aliquid fugiat aspernatur repellat, commodi harum, officia
          recusandae repellendus perspiciatis eius ducimus eaque! Omnis esse
          mollitia dolor assumenda magni!
        </Card>
      </div>
    </div>
  );
}
