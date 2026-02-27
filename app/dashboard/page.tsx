import { requireAuthority } from "@/lib/guard";
import { buildAuthority } from "@/types";

export default async function DashboardPage() {
  await requireAuthority(buildAuthority("dashboard", "read"));

  return <h1>Dashboard Home</h1>;
}