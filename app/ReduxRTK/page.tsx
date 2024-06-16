// RTK.tsx
"use client";
import { renderColor } from "@/providers/redux/colorChange";
import { RootState } from "@/providers/redux/store";
import { useDispatch, useSelector } from "react-redux";

export default function RTK() {
  const color = useSelector((state: RootState) => state.ChangeColor.color);
  console.log(color);

  const dispatch = useDispatch();

  return (
    <div>
      <div className={`w-10 h-10`} style={{ backgroundColor: color }}></div>
      <button
        className={`bg-red px-2 py-1`}
        onClick={() => dispatch(renderColor())}
      >
        Change color
      </button>
    </div>
  );
}
