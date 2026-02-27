import { requireAuthority } from "@/lib/guard";
import { buildAuthority } from "@/types";

export default async function ImagesPage() {
  await requireAuthority(buildAuthority("images", "read"));

  return <h1>Images Module</h1>;
}