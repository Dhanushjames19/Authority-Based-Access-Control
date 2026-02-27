/**
 * @format
 * @coderooz
 * @description
 * AUTHORITY STRUCTURE
 * -------------------
 * Format: `authority.<main>.<sub?>.<action>`
 *
 * Example:
 * authority.images.read
 * authority.users.profile.update
 */


/**
 * AUTHORITY_MAIN_LEVEL
 * --------------------
 * Top-level domains of the system.
 * These represent feature modules.
 */
export const AUTHORITY_MAIN_LEVEL = [
  "dashboard",
  "images",
  "users",
  "settings",
] as const;

/**
 * AUTHORITY_SUB_LEVEL
 * -------------------
 * Actions that can be performed inside a domain.
 */
export const AUTHORITY_SUB_LEVEL = [
  "read",
  "create",
  "write",
  "delete",
] as const;


