# Vera — Database Schema & ERD

Version: 1.0.0  
Last Updated: 2026-05-17  
Database: PostgreSQL 16  
ORM: Prisma 5.x

## 1. Schema Overview

users ───────────── workspaces  
  │                       │  
  ├── projects ───────────┤  
  │                       │  
  ├── tasks ───── comments│  
  │                       │  
  ├── notifications       │  
  │                       │  
teams ─────── team_members│  
  │                       │  
  └── workflows ──────────┘

## 2. Prisma Schema

```prisma
model User {
  id          String   @id @default(cuid())
  email       String   @unique
  name        String
  avatarUrl   String?
  role        UserRole @default(USER)
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt

  projects      Project[]
  tasks         Task[]
  notifications Notification[]
}

enum UserRole {
  USER
  MANAGER
  ADMIN
}

model Team {
  id          String       @id @default(cuid())
  name        String
  createdAt   DateTime     @default(now())

  members     TeamMember[]
  workflows   Workflow[]
}

model TeamMember {
  id        String   @id @default(cuid())
  teamId    String
  userId    String
  joinedAt  DateTime @default(now())

  team      Team @relation(fields: [teamId], references: [id])
  user      User @relation(fields: [userId], references: [id])

  @@unique([teamId, userId])
}

model Workspace {
  id          String    @id @default(cuid())
  name        String
  ownerId     String
  createdAt   DateTime  @default(now())

  owner       User      @relation(fields: [ownerId], references: [id])
  projects    Project[]
}

model Project {
  id           String    @id @default(cuid())
  name         String
  description  String?
  workspaceId  String
  ownerId      String
  createdAt    DateTime  @default(now())

  workspace    Workspace @relation(fields: [workspaceId], references: [id])
  owner        User      @relation(fields: [ownerId], references: [id])
  tasks        Task[]
}

model Task {
  id           String      @id @default(cuid())
  projectId    String
  userId       String
  title        String
  description  String?
  status       TaskStatus  @default(TODO)
  dueDate      DateTime?
  createdAt    DateTime    @default(now())

  project       Project      @relation(fields: [projectId], references: [id])
  user          User         @relation(fields: [userId], references: [id])
  comments      Comment[]
}

enum TaskStatus {
  TODO
  IN_PROGRESS
  COMPLETED
  ARCHIVED
}

model Comment {
  id          String   @id @default(cuid())
  taskId      String
  userId      String
  body        String
  createdAt   DateTime @default(now())

  task        Task @relation(fields: [taskId], references: [id])
  user        User @relation(fields: [userId], references: [id])
}

model Workflow {
  id          String   @id @default(cuid())
  teamId      String
  name        String
  description String?
  createdAt   DateTime @default(now())

  team        Team @relation(fields: [teamId], references: [id])
}

model Notification {
  id          String   @id @default(cuid())
  userId      String
  title       String
  body        String
  isRead      Boolean  @default(false)
  createdAt   DateTime @default(now())

  user        User @relation(fields: [userId], references: [id])
}
```

## 3. Indexing Strategy

| Table | Index | Reason |
|---|---|---|
| users | email | Authentication |
| tasks | projectId, userId | Task filtering |
| notifications | userId | Notification lookup |
| projects | workspaceId | Workspace filtering |

## 4. Soft Deletes

Projects, tasks, and workflows support soft deletes through archived statuses and deletedAt timestamps.

## 5. Migration Strategy

- All schema changes use Prisma migrations
- Breaking changes require staged deployment
- Migrations are reviewed before production deployment
