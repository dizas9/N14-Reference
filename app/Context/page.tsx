"use client";
import HomeButton from "@/components/HomeButton";
import { useAuth } from "@/contexts/AuthContext";
import { FormEvent, useState } from "react";

export default function UserController() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const {  errMsg, authController } = useAuth();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    authController({username, password});
  };
  return (
    <>
      <HomeButton />
      {errMsg && <div className="">{errMsg}</div>}

      <form onSubmit={handleSubmit}>
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
    </>
  );
}
