"use client";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex  gap-2">
      <Link href={"/Product"} className="border p-1 w-fit">
        Product
      </Link>

      <Link href={"/ServerAction"} className="border p-1 w-fit">
        Server
      </Link>

      <Link href={"/ReduxRTK"} className="border p-1 w-fit">
        RTK
      </Link>

      <Link href={"/Context"} className="border p-1 w-fit">
        ContextAPI
      </Link>

      <Link href={"/Todo"} className="border p-1 w-fit">
        Todo App
      </Link>
    </div>
  );
}
