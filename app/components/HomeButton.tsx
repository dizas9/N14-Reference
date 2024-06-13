"use client";
import { animated, useSpring } from "@react-spring/web";
import Link from "next/link";
import { useEffect } from "react";

export default function HomeButton() {
  const [hide, api] = useSpring(() => ({
    paddingRight: "20px",
  }));

  //clickHandler

  useEffect(() => {
    api.start({
      paddingRight: "4px",
    });
  }, []);

  return (
    <>
      <Link href={"/"}>
        <animated.p className="border p-1 w-fit" style={{ ...hide }}>
          Home
        </animated.p>
      </Link>
    </>
  );
}
