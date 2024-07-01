"use client";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../providers/redux/store";
import { FormEvent, useEffect, useState } from "react";
import { authController } from "@/providers/redux/userRegister";
import { useRouter } from "next/navigation";

export default function ReduxForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const isAuth = useSelector((state: RootState) => state.User.isAuth);
  const errMsg = useSelector((state: RootState) => state.User.errMsg);

  console.log("Auth", isAuth);

  const dispatch = useDispatch();
  const router = useRouter();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(authController({ username, password }));
  };

  useEffect(() => {
    if (isAuth) {
      router.push("/");
    }
  }, [isAuth]);

  return (
    <form onSubmit={handleSubmit}>
      {errMsg && <div className="">{errMsg}</div>}
      <div className="flex justify-between w-[20%]">
        <label htmlFor="">username</label>
        <input
          type="text"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>

      <div className="flex justify-between  w-[20%] mt-1">
        <label htmlFor="">password</label>
        <input
          type="text"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <button type="submit">Add</button>
    </form>
  );
}
