import Link from "next/link";

import { LatestPost } from "~/app/_components/post";
import { api, HydrateClient } from "~/trpc/server";
import { useState } from "react";
import { HomeClient } from "./_components/home-client";
import { TaskManager } from "./_components/task-manager";
import { Login } from "./_components/login";
import toast, { Toaster } from 'react-hot-toast';

export default async function Home() {

  //define functions


  return (
    <main className="flex bg-[url('~/public/img/backglogin.png')] bg-cover bg-center  w-fullflex flex-col h-screen justify-center items-center text-white ">
      <Login/>
    </main>
  );
}
