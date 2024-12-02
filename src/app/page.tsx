"use client";

import Header from "../components/Header";
import Button from "../components/ui/Button";
export default function Home() {
  return (
    <div className="w-full">
      <Button onClick={() => console.log("test")} className="bg-red-500">
        test
      </Button>
      <Header></Header>
    </div>
  );
}
