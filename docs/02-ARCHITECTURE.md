# Vera — System Architecture & Tech Stack

Version: 1.0.0  
Last Updated: 2026-05-17  
Status: Active

---

# 1. Architecture Overview

Vera follows a modular service-oriented architecture optimized for scalability, AI inference performance, and maintainability.

```text
CloudFront CDN
       |
Next.js Frontend
       |
NestJS API Gateway
       |
+------+------+
|             |
AI Service    PostgreSQL
|             |
Redis      Object Storage
```

---

# 2. Frontend Architecture

| Technology | Purpose |
|---|---|
| Next.js 15 | SSR + App Router |
| TypeScript | Type safety |
| Tailwind CSS | UI styling |
| Zustand | Client state |
| TanStack Query | API state management |
| Framer Motion | Animations |

---

# 3. Backend Architecture

| Technology | Purpose |
|---|---|
| Node.js 22 | Runtime |
| NestJS 11 | Backend framework |
| Prisma | ORM |
| PostgreSQL 16 | Primary database |
| Redis 7 | Caching and queues |
| BullMQ | Background jobs |

---

# 4. AI Architecture

| Technology | Purpose |
|---|---|
| Python | AI runtime |
| FastAPI | Inference API |
| PyTorch | Deep learning |
| EfficientNet | Image classification |
| OpenCV | Image preprocessing |

---

# 5. Infrastructure

| Technology | Purpose |
|---|---|
| AWS ECS | Container orchestration |
| AWS S3 | File storage |
| CloudFront | CDN |
| RDS PostgreSQL | Managed database |
| GitHub Actions | CI/CD |
| Docker | Containerization |

---

# 6. Architectural Decisions

## Modular Monolith (v1)
The backend begins as a modular monolith for rapid development while maintaining clean boundaries for future service extraction.

## Separate AI Service
AI inference runs independently from the main API to:
- Improve scalability
- Enable GPU optimization
- Reduce backend resource contention

## CDN-first Delivery
All uploaded images and frontend assets are distributed through CloudFront for low-latency access.

---

# 7. Environments

| Environment | Purpose |
|---|---|
| local | Development |
| dev | Shared integration |
| staging | QA and validation |
| production | Live deployment |