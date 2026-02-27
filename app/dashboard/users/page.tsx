import { requireAuthority } from "@/lib/guard";
import { buildAuthority } from "@/types";


export default async function UserPage() {
  await requireAuthority(buildAuthority("users", "read"));

  return <h1>User Module</h1>;
}