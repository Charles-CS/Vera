# Vera — Frontend Component Guide

Version: 1.0.0  
Last Updated: 2026-05-17  
Framework: Next.js 15 (App Router) + TypeScript + Tailwind CSS 4 + shadcn/ui

## 1. Project Structure

```txt
src/
├── app/
│   ├── (auth)/
│   │   ├── sign-in/
│   │   └── sign-up/
│   ├── (dashboard)/
│   │   ├── page.tsx
│   │   ├── projects/
│   │   ├── workflows/
│   │   ├── analytics/
│   │   └── settings/
│   ├── (team)/
│   ├── (admin)/
│   └── api/
│
├── components/
│   ├── ui/
│   ├── layout/
│   ├── dashboard/
│   ├── workflow/
│   ├── analytics/
│   ├── team/
│   ├── notifications/
│   └── shared/
│
├── lib/
│   ├── api/
│   ├── store/
│   ├── utils/
│   └── constants/
│
├── hooks/
├── types/
└── styles/
```

## 2. Design Tokens

```css
:root {
  --color-primary: #2563EB;
  --color-secondary: #0F172A;
  --color-surface: #FFFFFF;
  --color-muted: #F1F5F9;
  --color-border: #E2E8F0;
  --color-success: #16A34A;
  --color-warning: #D97706;
  --color-danger: #DC2626;

  --font-display: 'Inter', sans-serif;
  --font-body: 'Inter', sans-serif;
  --font-mono: 'JetBrains Mono', monospace;

  --space-1: 8px;
  --space-2: 16px;
  --space-3: 24px;
  --space-4: 32px;
  --space-6: 48px;

  --radius-sm: 6px;
  --radius-md: 12px;
  --radius-lg: 20px;

  --shadow-card: 0 2px 12px rgba(0,0,0,0.08);
}
```

## 3. Core Components

### 3.1 DashboardCard

Displays metrics and quick insights on dashboards.

```tsx
interface DashboardCardProps {
  title: string;
  value: string;
  description?: string;
  icon?: React.ReactNode;
}
```

### 3.2 WorkflowCard

Displays workflow summary and status.

```tsx
interface WorkflowCardProps {
  workflow: {
    id: string;
    name: string;
    status: 'active' | 'paused' | 'archived';
    updatedAt: string;
  };
}
```

### 3.3 AnalyticsChart

Reusable analytics visualization component.

```tsx
interface AnalyticsChartProps {
  title: string;
  data: unknown[];
  type: 'line' | 'bar' | 'area';
}
```

### 3.4 TeamMemberCard

Displays team member information and permissions.

```tsx
interface TeamMemberCardProps {
  member: {
    id: string;
    name: string;
    avatarUrl?: string;
    role: string;
  };
}
```

### 3.5 NotificationItem

Displays a single notification.

```tsx
interface NotificationItemProps {
  notification: {
    id: string;
    title: string;
    body: string;
    isRead: boolean;
  };
}
```

## 4. Page Patterns

### 4.1 Dashboard Page

```txt
<DashboardHeader>
<MetricsGrid>
<RecentActivity>
<AnalyticsOverview>
```

### 4.2 Workflow Page

```txt
<WorkflowHeader>
<WorkflowBuilder>
<WorkflowHistory>
<WorkflowActions>
```

### 4.3 Analytics Page

```txt
<AnalyticsHero>
<AnalyticsCharts>
<InsightsPanel>
<ExportActions>
```

## 5. State Management

### Zustand Stores

```ts
interface UIStore {
  sidebarOpen: boolean;
  toggleSidebar: () => void;
}

interface NotificationStore {
  notifications: Notification[];
  markAsRead: (id: string) => void;
}
```

## 6. Data Fetching Conventions

- Server Components for static pages
- React Query for interactive user data
- Optimistic updates for workflows and notifications
- Error boundaries for async sections

```tsx
async function DashboardPage() {
  const data = await getDashboardMetrics();

  return <Dashboard metrics={data} />;
}
```

## 7. Accessibility Standards

- ARIA labels required
- Minimum WCAG AA contrast
- Full keyboard navigation support
- Alt text required for images
- Proper form labels and descriptions

## 8. Performance Guidelines

- Use next/image for optimized images
- Lazy load large components
- Enable route prefetching
- Analyze bundles before release
