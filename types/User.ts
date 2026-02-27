
import { ROLE_CLASS } from "@/constants";
import { Authority } from "./Authority";


export type RoleClass = typeof ROLE_CLASS[number];


export interface UserDataProps {
    id: number;
    role: RoleClass;
    authorities: Authority[]
}