
import { UserDataProps, Authority } from "@/types";


/**
 * UserData
 * --------
 * This variable is a readyonly variable that is for development purposes only.
 */
export const UserData : UserDataProps[] = [
    {
        id: 1,
        role: "admin",
        authorities: [
            "authority.dashboard.create",
            'authority.dashboard.delete',
            "authority.dashboard.read",
            "authority.dashboard.write",
            "authority.images.create",
            "authority.images.delete",
            "authority.images.read",
            "authority.images.write",
            "authority.settings.create",
            "authority.settings.delete",
            "authority.settings.read",
            "authority.settings.write"
        ] as Authority[]
    },
    {
        id: 2,
        role: "user",
        authorities: [
            "authority.dashboard.read",
            "authority.images.read", 
            "authority.settings.read"
        ] as Authority[]
    },
    {
        id: 3,
        role: "user",
        authorities: [
            "authority.dashboard.read",
            "authority.images.create",
            "authority.images.read",
            "authority.settings.read"
        ] as Authority[]
    }
]
