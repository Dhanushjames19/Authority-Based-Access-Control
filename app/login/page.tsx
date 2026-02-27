"use client";

import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  function loginAs(id: number) {
    document.cookie = `userId=${id}; path=/`;
    router.push("/dashboard");
  }

  return (
    <div className="flex flex-col gap-3">
      <h1>Select User</h1>
      <button onClick={() => loginAs(1)}>Admin</button>
      <button onClick={() => loginAs(2)}>User 2</button>
      <button onClick={() => loginAs(3)}>User 3</button>
    </div>
  );
}