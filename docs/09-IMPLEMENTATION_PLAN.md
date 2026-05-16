# Cura — Project Implementation Plan

**Version:** 1.0.0  
**Last Updated:** 2026-05-06  
**Methodology:** Agile (2-week sprints)  
**Timeline:** 252 days to full launch

---

# 1. Overview

| Phase | Duration | Scope |
|---|---|---|
| Phase 0: Foundation | Days 1–21 | Infra, monorepo, auth, CI/CD |
| Phase 1: Core Commerce | Days 22–70 | Catalog, checkout, orders, vendor portal |
| Phase 2: Curation Engine | Days 71–119 | Curator flow, editorials, collections, drops |
| Phase 3: Social Layer | Days 120–154 | Taste profiles, shelves, curator following |
| Phase 4: Polish & Launch | Days 155–196 | Performance, SEO, QA, beta, public launch |
| Phase 5: Scale | Days 197–252 | Analytics, multi-warehouse, API partners |

---

# 2. Phase 0 — Foundation

**Duration:** 21 days (Days 1–21)  
**Goal:** Every engineer can run the full stack locally. CI/CD deploys to dev.

## Deliverables

### Infrastructure

- Terraform: VPC, RDS Aurora, ElastiCache, ECS cluster, ECR, S3, CloudFront
- Docker Compose for local development (Postgres + Redis)
- GitHub Actions: lint → test → build → deploy pipeline to dev environment

### Monorepo Setup

- pnpm workspaces + Turborepo
- apps/web (Next.js 15 scaffold)
- apps/api (NestJS 11 scaffold)
- packages/types, packages/utils, packages/config
- ESLint, Prettier, TypeScript, Tailwind config shared packages

### Auth

- Clerk integration in frontend and API
- JWT validation middleware in NestJS
- RBAC guard implementation (Buyer, Curator, Vendor, Admin)
- Protected routes in Next.js (middleware)

### Database

- Prisma schema (all models from schema doc)
- Initial migration
- Seed script for development data

### Observability

- Datadog agent configured in ECS
- Sentry in both frontend and API
- Structured logging in NestJS (Winston)

## Exit Criteria

- [ ] `pnpm dev` runs full stack locally
- [ ] CI pipeline passes on develop branch
- [ ] All 4 user roles authenticate and receive correct JWT claims
- [ ] DB migrations apply cleanly

---

# 3. Phase 1 — Core Commerce

**Duration:** 49 days (Days 22–70)  
**Goal:** A buyer can browse products, add to cart, and complete a purchase. A vendor can submit products.

---

## Sprint 1 (Days 22–35): Product Catalog

### API

- GET /products with filtering and cursor pagination
- GET /products/:id with full product detail
- GET /categories
- Algolia index sync (webhook on product status change)

### Frontend

- Catalog page with product grid (SSR)
- Product detail page (SSR with ISR)
- Category navigation
- ProductCard component (all sizes and states)
- Image gallery with Cloudinary

---

## Sprint 2 (Days 36–49): Cart & Checkout

### API

- POST /orders — create order + Stripe PaymentIntent
- Stripe webhook handler (payment_intent.succeeded, payment_failed)
- Order status update flow

### Frontend

- Cart drawer (Zustand store)
- Checkout flow (3 steps: cart review → shipping → payment)
- Stripe Elements integration
- Order confirmation page
- Email notifications via Resend (order confirmed, shipped)

---

## Sprint 3 (Days 50–63): Order Management & Vendor Portal

### API

- GET /orders, GET /orders/:id (buyer)
- PATCH /orders/:id/status (admin)
- Vendor portal: POST /vendor/products/submit, GET /vendor/products, GET /vendor/orders, GET /vendor/payouts
- Stripe Connect: vendor onboarding flow, payout calculation

### Frontend

- Buyer order history page
- Order detail page with status tracker
- Vendor portal: product submission form
- Vendor portal: order and payout dashboard

---

## Sprint 4 (Days 64–70): Admin Tools (Commerce)

### API

- GET /admin/submissions
- PATCH /admin/submissions/:id
- GET /admin/dashboard (product and order metrics)

### Frontend

- Admin: submission review queue
- Admin: approve/reject with feedback form
- Admin: basic dashboard (orders, GMV, pending submissions)

## Exit Criteria

- [ ] End-to-end purchase flow works in staging
- [ ] Stripe webhook correctly marks orders paid
- [ ] Vendor can submit a product and receive approval/rejection email
- [ ] Admin can approve a submission and it goes live

---

# 4. Phase 2 — Curation Engine

**Duration:** 49 days (Days 71–119)  
**Goal:** Curator profiles are live. Collections and drops are operational. Every product has editorial content.

---

## Sprint 5 (Days 71–84): Curator Profiles

### API

- GET /curators
- GET /curators/:id
- GET /curators/:id/stats
- CuratorProfile CRUD (admin)
- Reputation score computation job (BullMQ, nightly)

### Frontend

- Curator directory page
- Curator profile page (bio, collections, products, reputation badges)
- CuratorCard component
- CuratorBadge component (displayed on product cards)

---

## Sprint 6 (Days 85–98): Editorial Content

### API

- whyWeChoseThis and editorial fields on Product
- Content edit flow for curators on approved products
- "Pairs Well With" relationship model and API

### Frontend

- EditorialBlock component (serif long-form display)
- "Why We Chose This" section on product detail page
- "Pairs Well With" horizontal scroll on product detail page
- Rich text editor for curators (Tiptap)

---

## Sprint 7 (Days 99–112): Collections & Drops

### API

- GET /collections
- GET /collections/:id
- POST /collections
- PATCH /collections/:id
- POST /collections/:id/waitlist
- BullMQ: schedule-drop job (activates products + sends waitlist notifications at drop time)

### Frontend

- Collections directory page
- Collection detail page (product grid + curator context)
- CollectionCard component
- DropTimer component (live countdown)
- Waitlist join flow with email confirmation
- Drop notification email template

---

## Sprint 8 (Days 113–119): Curator Workflow Polish

### Frontend

- Curator dashboard (manage collections, product editorial, stats)
- Admin: curator application review queue

## Exit Criteria

- [ ] A curator profile page is fully populated and live
- [ ] A drop collection is scheduled, activates on time, and notifies waitlist
- [ ] Every live product has editorial content
- [ ] Curator reputation score updates nightly

---

# 5. Phase 3 — Social Layer

**Duration:** 35 days (Days 120–154)  
**Goal:** Buyers have taste profiles, follow curators, and build public shelves.

---

## Sprint 9 (Days 120–133): Taste Profiles

### API

- POST /users/me/taste-profile
- GET /users/me/taste-profile
- GET /users/me/feed (taste + curator affinity ranked feed)

### Frontend

- TasteQuiz component (multi-step, image-based)
- Taste profile display on user account page
- Personalized feed page

---

## Sprint 10 (Days 134–147): Shelves

### API

- Full Shelf CRUD + item management
- GET /shelves/:id (public shelf)

### Frontend

- Shelf management page (create, edit, reorder)
- ShelfDrawer component (save to shelf from product pages)
- Public shelf view page (shareable URL)
- ShelfCard on curator profiles (curators' public shelves)

---

## Sprint 11 (Days 148–154): Following & Feed

### API

- POST /curators/:id/follow
- DELETE /curators/:id/follow
- Feed API incorporating followed curators' new products

### Frontend

- Follow/Unfollow button (optimistic UI)
- "Following" tab on home feed
- Follower count on curator profiles

## Exit Criteria

- [ ] New buyer can complete taste quiz during onboarding
- [ ] A public shelf has a shareable URL and renders correctly
- [ ] Following a curator surfaces their products in the feed

---

# 6. Phase 4 — Polish & Launch

**Duration:** 42 days (Days 155–196)  
**Goal:** Production-ready. Closed beta → public launch.

---

## Days 155–168: Performance & SEO

- Core Web Vitals audit — hit LCP < 2.5s on all key pages
- Metadata, Open Graph, structured data (JSON-LD for products)
- Sitemap generation
- Image optimization audit
- Bundle size analysis and reduction

---

## Days 169–175: Accessibility & QA

- WCAG AA audit across all pages
- Cross-browser testing (Chrome, Safari, Firefox, Edge)
- Mobile responsive QA
- Load testing: 500 concurrent users on checkout flow

---

## Days 176–182: Closed Beta

- Invite 200 curators and 1,000 buyers
- Collect feedback via in-app survey
- Monitor error rates and slow queries
- Fix P1/P2 issues immediately

---

## Days 183–189: Pre-Launch

- Marketing site live (cura.com landing page)
- Press embargo content prepared
- Status page live (status.cura.com)
- Runbooks completed
- On-call rotation set up

---

## Days 190–196: Public Launch 🚀

- Deploy main
- Monitor all dashboards real-time for 48 hours
- Post-launch retrospective

---

# 7. Phase 5 — Scale

**Duration:** 56 days (Days 197–252)  
**Goal:** Analytics, partner integrations, and infrastructure for 10x growth.

## Deliverables

### Analytics

- Advanced curator analytics dashboard (conversion by product, follower growth)
- Vendor analytics dashboard (sell-through rate, revenue, return rate)
- Admin business intelligence (GMV, LTV, CAC by channel)

### Multi-Warehouse Inventory

- Inventory management with warehouse location support
- Smart fulfillment routing (nearest warehouse)
- Low stock alerts and restock notifications

### API for Partners

- Public API program (read-only product and collection data)
- API key management
- Rate limiting and developer docs

### Mobile PWA

- Installable PWA with offline support for shelves
- Push notifications via OneSignal

---

# 8. Milestones & Key Dates

| Milestone | Target Day |
|---|---|
| Phase 0 complete (infra + auth running) | Day 21 |
| First successful test purchase in staging | Day 49 |
| First drop activated by BullMQ job | Day 112 |
| Closed beta begins | Day 176 |
| Public launch | Day 190 |
| Phase 5 complete | Day 252 |

---

# 9. Team Structure

| Role | Responsibilities |
|---|---|
| 2× Frontend Engineers | Next.js, UI components, Tailwind |
| 2× Backend Engineers | NestJS, Prisma, BullMQ, Stripe |
| 1× DevOps Engineer | AWS, Terraform, CI/CD, monitoring |
| 1× Product Designer | Figma, component specs, UX flows |
| 1× QA Engineer | Test plans, E2E, load testing |
| 1× Tech Lead / Architect | Technical decisions, code review, unblocking |

---

# 10. Risk Register

| Risk | Likelihood | Impact | Mitigation |
|---|---|---|---|
| Stripe Connect payout complexity | High | Medium | Spike in Phase 1, engage Stripe support early |
| Algolia cost overrun | Medium | Low | Set up Typesense fallback; implement query caching |
| Drop timing precision | Medium | High | BullMQ with Redis persistence; test edge cases in staging |
| Curator content quality | High | High | Editorial style guide + review checklist before publish |
| Beta recruitment too slow | Medium | Medium | Pre-launch curator waitlist; partner with niche communities |
| Performance under load | Low | High | Load test during QA phase; autoscaling configured from Day 1 |

