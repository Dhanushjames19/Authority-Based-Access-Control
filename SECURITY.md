# Security Policy

## ⚠️ Current Status

This repository is Version 1 — an experimental architecture lab.

It is NOT secure for production use.

---

## 🔎 Known Security Limitations

- Hardcoded users
- Cookie-based identity simulation
- No encryption
- No password authentication
- No JWT/session validation
- No CSRF protection
- Admin bypass logic is simplified
- No rate limiting

---

## 🔐 Intended Purpose

This version exists to explore:

- Authority-based access control
- Server vs UI permission enforcement
- Middleware routing protection
- Modular permission architecture

---

## 🧭 Security Improvements Planned (V2+)

- Real authentication provider
- Database-backed authority assignments
- JWT/session validation
- Permission caching
- Audit logging
- Multi-tenant isolation
- CSRF & rate limiting
- Secure cookie configuration

---

## 📬 Reporting Issues

If a serious flaw is discovered:

Open a GitHub issue labeled:

```
security
```

Do not deploy this repository in production.
