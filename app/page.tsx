import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      <h1>Authority-Based Access Control (V1)</h1>
      <p>This is a hardcoded test project.</p>

      <Link href="/login">
        <button>Go to Login</button>
      </Link>
    </div>
  );
}