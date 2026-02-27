import Link from "next/link";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div style={{ display: "flex", gap: "2rem" }}>
      <nav>
        <ul className="bg-gray-200 text-black">
          <li><Link className="" href="/dashboard">Home</Link></li>
          <li><Link className="" href="/dashboard/images">Images</Link></li>
          <li><Link className="" href="/dashboard/users">Users</Link></li>
          <li><Link className="" href="/dashboard/settings">Settings</Link></li>
        </ul>
      </nav>
      <main>{children}</main>
    </div>
  );
}