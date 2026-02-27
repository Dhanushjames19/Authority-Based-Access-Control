
import { Authority, UserDataProps } from "@/types";

/**
 * hasAuthority
 * ------------
 * To check if the assigned user has the authority designatied.
 * @param user Takes the user data.
 * @param authority  Takes the authority.
 * @returns Return `true` is authority exists and `false` when not.
 * @example
 * ```tsx
 * import { hasAuthority } from "@/lib/authority";
 * 
 * const userData = {...};
 * authority = "authority.dashboard.read"; //example authority
 * return hasAuthority(userData, authority) // output `true` or `false` depending on authority assigned. 
 * ```
 */
export function hasAuthority( user: UserDataProps, authority: Authority ) : boolean {
    if (user.role === "admin") return true;
    return user.authorities.includes(authority);
}