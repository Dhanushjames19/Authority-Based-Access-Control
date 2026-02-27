import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "Authority V1 Test",
  description: "Role & Authority Test Project",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: "sans-serif" }}>
        <header
          style={{
            padding: "1rem",
            background: "#111",
            color: "#fff",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div>Authority V1</div>
          <nav style={{ display: "flex", gap: "1rem" }}>
            <Link href="/">Home</Link>
            <Link href="/login">Login</Link>
            <Link href="/dashboard">Dashboard</Link>
          </nav>
        </header>

        <div style={{ padding: "2rem" }}>{children}</div>
      </body>
    </html>
  );
}