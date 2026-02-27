import { requireAuthority } from "@/lib/guard";
import { buildAuthority } from "@/types";


export default async function SettingPage() {
  await requireAuthority(buildAuthority("settings", "read"));

  return <h1>Setting Module</h1>;
}