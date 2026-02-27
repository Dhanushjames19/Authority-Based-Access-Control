import { redirect } from "next/navigation";
import { Authority } from "@/types";
import { getSessionUser } from "./session";
import { hasAuthority } from "./authority";

export async function requireAuthority(required: Authority) {
  const user = await getSessionUser();

  if (!user) redirect("/login");

  if (!hasAuthority(user, required)) {
    redirect("/unauthorized");
  }

  return user;
}