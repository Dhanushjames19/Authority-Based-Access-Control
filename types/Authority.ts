
import { AUTHORITY_MAIN_LEVEL, AUTHORITY_SUB_LEVEL } from "@/constants";

export type AuthorityMain = typeof AUTHORITY_MAIN_LEVEL[number];
export type AuthoritySub = typeof AUTHORITY_SUB_LEVEL[number];

/**
 * Full authority string format:
 * authority.<main>.<sub>
 */
export type Authority = `authority.${AuthorityMain}.${AuthoritySub}`;

export const buildAuthority = (
  main: AuthorityMain,
  sub: AuthoritySub
): Authority => {
  return `authority.${main}.${sub}`;
};