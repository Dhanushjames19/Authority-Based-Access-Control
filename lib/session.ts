import { cookies } from "next/headers";
import { UserData } from "@/data/User";

/**
 * getSessionUser
 * --------------
 * 
 * Mock Login
 */
export async function getSessionUser() {
    const cookieStore = cookies();
    const id = (await cookieStore).get("userId")?.value;

    if (!id) return null;

    return UserData.find((u)=> u.id === Number(id)) ?? null;
}