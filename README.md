# Vera

> Detect invasive alien species and crops using AI-powered computer vision.

Vera is a modern agricultural and environmental intelligence platform that enables users to upload plant images and receive AI-generated classifications in real time.

The platform is designed for:
- Farmers
- Agricultural researchers
- Environmental agencies
- Students
- Government monitoring programs

---

# Core Features

- AI image classification
- Invasive species detection
- Crop recognition
- Confidence scoring
- Prediction history
- Reporting workflows
- Admin analytics dashboard
- Mobile-responsive upload system

---

# Tech Stack

## Frontend
- Next.js 15
- TypeScript
- Tailwind CSS
- shadcn/ui
- Zustand
- TanStack Query

## Backend
- NestJS 11
- PostgreSQL 16
- Prisma ORM
- Redis 7
- BullMQ

## AI
- Python
- FastAPI
- PyTorch
- EfficientNet
- OpenCV

## Infrastructure
- AWS
- Docker
- GitHub Actions
- CloudFront
- S3
- ECS Fargate

---

# Project Structure

```text
vera/
├── apps/
│   ├── web/
│   ├── api/
│   └── ai-service/
├── packages/
├── docs/
├── infrastructure/
└── docker/
```

---

# Development

```bash
pnpm install
pnpm dev
```

---

# License

MIT