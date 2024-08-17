import Link from "next/link";

import { LatestPost } from "~/app/_components/post";
import { api, HydrateClient } from "~/trpc/server";
import { useState } from "react";
import { HomeClient } from "./_components/home-client";
import { TaskManager } from "./_components/task-manager";
import { Login } from "./_components/login";
import toast, { Toaster } from 'react-hot-toast';
import AdminPanelLayout from "./_components/admin-panel/admin-panel-layout";


export default async function Home({
  children
}: {
  children: React.ReactNode;
}) {
  return <AdminPanelLayout>{children}</AdminPanelLayout>;
}
