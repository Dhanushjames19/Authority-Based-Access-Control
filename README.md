# Authority-Based Access Control — V1

A minimal experimental project built with Next.js 16.1.6 demonstrating authority-based access control.

This is Version 1 — fully hardcoded, zero database, zero authentication provider.

The purpose of this repository is architectural exploration of fine-grained permission systems before evolving into a production-ready system.

---

## 🧠 Why Authority-Based?

Traditional RBAC becomes rigid:

- admin
- editor
- user

Instead, this project uses capability-based permissions:

```
authority.<domain>.<action>
```

Example:
- authority.images.read
- authority.images.create
- authority.users.delete

Access is granted by capability, not by role.

Roles exist only for classification.
Authorities control access.

---

## 🏗 Tech Stack

- Next.js 16.1.6 (App Router)
- TypeScript
- Hardcoded user system
- Cookie-based session simulation
- Server-side permission checks
- Middleware route protection

---

## 📁 Project Structure

```

src/
├── app/
│   ├── login/
│   ├── dashboard/
│   │   ├── images/
│   │   ├── users/
│   │   └── settings/
│   ├── unauthorized/
│   └── layout.tsx
├── constants/
├── data/
├── lib/
├── types/
└── middleware.ts

```

---

## 🔐 Authority Format

```
authority.<domain>.<action>
```

### Domains

- dashboard
- images
- users
- settings

### Actions

- read
- create
- write
- delete

---

## 👤 Test Users

| ID | Role  | Description |
|----|-------|------------|
| 1  | admin | Full bypass access |
| 2  | user  | Read-only access |
| 3  | user  | Partial image permissions |

---

## 🚀 Running Locally

```bash
npm install
npm run dev
````

Visit:
[http://localhost:3000](http://localhost:3000)

---

## 🏷 Versioning Strategy

* v1.x → Hardcoded Architecture Lab
* v2.x → Database-backed Permission Engine
* v3.x → Production-grade (JWT / Auth Provider / Multi-tenant)

---

## ⚠️ Important

- This is NOT production-ready.
- This is an architectural learning foundation.
