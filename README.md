# 🎯 FeedbackHub

<div align="center">

![FeedbackHub Demo](./public/demo.gif)

**A Modern, Production-Ready Feedback Management Platform**

[![Next.js](https://img.shields.io/badge/Next.js-14.2-black?style=flat&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8?style=flat&logo=tailwind-css)](https://tailwindcss.com/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-Latest-blue?style=flat&logo=postgresql)](https://www.postgresql.org/)

</div>

---

## 📑 Table of Contents

- [Overview](#overview)
- [Key Features](#key-features)
- [Architecture](#architecture)
- [Technology Stack](#technology-stack)
- [Getting Started](#getting-started)
- [Environment Configuration](#environment-configuration)
- [Database Setup](#database-setup)
- [Widget Integration](#widget-integration)
- [Production Deployment](#production-deployment)
- [API Documentation](#api-documentation)
- [Project Structure](#project-structure)
- [Usage Guide](#usage-guide)
- [Security](#security)
- [Troubleshooting](#troubleshooting)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

---

## 🎯 Overview

**FeedbackHub** is an enterprise-grade, full-stack SaaS platform designed to streamline feedback collection and management for modern web applications. Built with Next.js 14, TypeScript, and a robust PostgreSQL database, FeedbackHub enables businesses to seamlessly gather, organize, and analyze customer feedback through an embeddable widget that can be integrated into any website.

The platform combines powerful features including multi-project management, real-time feedback collection, advanced filtering and search capabilities, subscription-based monetization, and comprehensive analytics—all wrapped in a modern, responsive UI built with Tailwind CSS and shadcn/ui components.

### What Makes FeedbackHub Unique?

- **🔌 Embeddable Widget**: Drop-in JavaScript widget that works on any website
- **🎨 Modern UI/UX**: Sleek, responsive interface built with Tailwind CSS and Radix UI primitives
- **⚡ Lightning Fast**: Server-side rendering with Next.js 14 App Router for optimal performance
- **🔐 Enterprise Security**: Secure authentication via Clerk with role-based access control
- **💳 Monetization Ready**: Integrated Stripe payments with flexible subscription tiers
- **📊 Advanced Analytics**: Rating-based feedback with sorting, filtering, and search
- **🗄️ Type-Safe Database**: PostgreSQL with Drizzle ORM for type-safe database operations
- **🚀 Production Ready**: Built with best practices for scalability and maintainability

---

## ✨ Key Features

### 🎨 **User Experience**

#### Landing Page
- **Hero Section**: Eye-catching introduction with call-to-action buttons
- **Features Showcase**: Highlights platform capabilities with clear value propositions
- **Pricing Plans**: Transparent pricing with Free, Monthly ($6.99), and Yearly ($39.99) tiers
- **Responsive Design**: Fully optimized for desktop, tablet, and mobile devices

#### Authentication & Authorization
- **Secure Login/Signup**: Powered by Clerk with support for multiple providers
- **Protected Routes**: Middleware-based route protection for dashboard, projects, and payments
- **Session Management**: Persistent sessions with automatic token refresh
- **Role-Based Access**: User-specific data isolation and access control

### 📊 **Project Management**

#### Dashboard
- **Project Overview**: Grid/list view of all user projects
- **Quick Actions**: Create new projects with one-click access
- **Project Cards**: Visual cards displaying project name, description, and URL
- **Project Statistics**: View feedback count and engagement metrics

#### Project Creation
- **Simple Form**: Name, description, and URL input fields
- **Instant Setup**: Automatic project ID generation and widget code creation
- **Redirect to Instructions**: Immediate access to integration instructions after creation

#### Project Details
- **Comprehensive View**: Project information with clickable website link
- **Embed Code Access**: Direct link to widget integration instructions
- **Feedback Table**: Sortable, filterable, and searchable feedback display
- **Rating Visualization**: Star-based rating system with visual indicators

### 📝 **Feedback Collection & Management**

#### Embeddable Widget
- **Universal Compatibility**: Works on any HTML website with simple script tag
- **Customizable**: Project-specific widget identified by unique project ID
- **Popover Interface**: Non-intrusive feedback form in an elegant popover
- **Form Fields**:
  - User name input
  - Email address input
  - Star rating selector (1-5 stars)
  - Message/feedback textarea
  - Submit button with validation

#### Feedback Dashboard
- **Data Table**: Powered by TanStack Table for high-performance rendering
- **Columns**:
  - Username
  - Email address
  - Rating (visual star display)
  - Message content
- **Advanced Filtering**:
  - Text search across all fields
  - Numeric range filters for ratings
  - Column-specific filtering
- **Sorting**: Click column headers to sort ascending/descending
- **Pagination**: Navigate through large datasets with configurable page size
- **Responsive**: Mobile-friendly table layout

### 💳 **Subscription & Payments**

#### Pricing Tiers
1. **Free Plan** ($0/month)
   - 3 projects maximum
   - Unlimited users
   - 2GB storage
   - Priority support

2. **Monthly Plan** ($6.99/month)
   - Unlimited projects
   - Unlimited users
   - 5GB storage
   - Priority support
   - Most popular option

3. **Yearly Plan** ($39.99/year)
   - Unlimited projects
   - Unlimited users
   - 50GB storage
   - 24/7 premium support
   - Best value (save ~52%)

#### Payment Processing
- **Stripe Integration**: Secure payment processing with PCI compliance
- **Checkout Sessions**: Hosted checkout pages with automatic invoice generation
- **Subscription Management**: User portal for updating payment methods and plans
- **Webhook Handling**: Real-time subscription status updates
- **Customer Portal**: Stripe-managed portal for subscription changes and cancellations

### 🎨 **UI Components**

Built with **shadcn/ui** and **Radix UI** primitives:
- **Buttons**: Primary, secondary, outline, ghost variants
- **Dialogs**: Modal dialogs for project creation
- **Tooltips**: Contextual help and information
- **Labels**: Accessible form labels
- **Inputs**: Text, email, URL inputs with validation
- **Textareas**: Multi-line feedback input
- **Tables**: Advanced data tables with sorting and filtering
- **Dropdown Menus**: User menu and navigation
- **Copy Button**: One-click clipboard copy for embed codes

---

## 🏗️ Architecture

FeedbackHub follows a modern, scalable architecture pattern:

```
┌─────────────────────────────────────────────────────────────┐
│                        Client Layer                          │
│  ┌──────────────┐    ┌──────────────┐   ┌──────────────┐   │
│  │   Browser    │    │  Embeddable  │   │   Mobile     │   │
│  │   (React)    │◄───┤    Widget    │   │   Devices    │   │
│  └──────────────┘    └──────────────┘   └──────────────┘   │
└────────────────────────────┬────────────────────────────────┘
                             │
                             ▼
┌─────────────────────────────────────────────────────────────┐
│                     Next.js App Router                       │
│  ┌──────────────────────────────────────────────────────┐   │
│  │  Server Components (RSC) │ API Routes │ Middleware   │   │
│  └──────────────────────────────────────────────────────┘   │
└─────────────┬───────────────────────┬───────────────────────┘
              │                       │
              ▼                       ▼
┌─────────────────────────┐  ┌──────────────────────┐
│   Authentication Layer   │  │   Payment Gateway    │
│     (Clerk SDK)         │  │  (Stripe API)        │
└─────────────────────────┘  └──────────────────────┘
              │
              ▼
┌─────────────────────────────────────────────────────────────┐
│                    Data Access Layer                         │
│  ┌────────────────────────────────────────────────────┐     │
│  │         Drizzle ORM (Type-Safe Queries)            │     │
│  └──────────────────────────┬─────────────────────────┘     │
└─────────────────────────────┼─────────────────────────────┬─┘
                              │                             │
                              ▼                             ▼
                   ┌──────────────────┐         ┌──────────────────┐
                   │   PostgreSQL     │         │  External APIs   │
                   │    Database      │         │  (Widget CDN)    │
                   └──────────────────┘         └──────────────────┘
```

### Architecture Highlights

**1. Next.js App Router (RSC)**
- Server-side rendering for optimal SEO and performance
- React Server Components for reduced client-side JavaScript
- Streaming and suspense for improved loading states
- API routes for backend functionality

**2. Database Layer**
- PostgreSQL for reliable, ACID-compliant data storage
- Drizzle ORM for type-safe database operations
- Schema-first approach with TypeScript types
- Migrations managed via Drizzle Kit

**3. Authentication Flow**
- Clerk handles all authentication logic
- JWT tokens for secure API requests
- Middleware for route protection
- User context available in server and client components

**4. Widget Architecture**
- Standalone JavaScript bundle hosted on CDN
- Custom web component (`<my-widget>`)
- Communicates with API via fetch requests
- Isolated styles to prevent conflicts

---

## 🛠️ Technology Stack

### **Frontend**
| Technology | Version | Purpose |
|-----------|---------|---------|
| **Next.js** | 14.2.14 | React framework with App Router |
| **React** | 18.x | UI library |
| **TypeScript** | 5.x | Type-safe JavaScript |
| **Tailwind CSS** | 3.4.1 | Utility-first CSS framework |
| **shadcn/ui** | Latest | Pre-built accessible components |
| **Radix UI** | Latest | Unstyled, accessible UI primitives |
| **Lucide React** | 0.447.0 | Icon library |
| **TanStack Table** | 8.20.5 | Headless table library |

### **Backend**
| Technology | Version | Purpose |
|-----------|---------|---------|
| **Node.js** | 20.x | JavaScript runtime |
| **PostgreSQL** | Latest | Relational database |
| **Drizzle ORM** | 0.33.0 | TypeScript ORM |
| **Drizzle Kit** | 0.24.2 | Database migration tool |

### **Authentication & Payments**
| Service | SDK Version | Purpose |
|---------|-------------|---------|
| **Clerk** | 5.7.1 | User authentication |
| **Stripe** | 17.1.0 | Payment processing |
| **@stripe/stripe-js** | 4.7.0 | Client-side Stripe |

### **Development Tools**
- **ESLint**: Code linting
- **PostCSS**: CSS processing
- **npm**: Package management
- **Git**: Version control

---

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js**: Version 20.x or higher ([Download](https://nodejs.org/))
- **npm**: Comes with Node.js (or use yarn/pnpm)
- **PostgreSQL**: Version 14.x or higher ([Download](https://www.postgresql.org/download/))
- **Git**: For cloning the repository ([Download](https://git-scm.com/))

### Installation Steps

#### 1. Clone the Repository

```bash
git clone https://github.com/Rahulhanje/feedbackHub.git
cd feedbackHub
```

#### 2. Install Dependencies

```bash
npm install
```

This will install all required packages including Next.js, React, Tailwind CSS, Drizzle ORM, and all other dependencies.

#### 3. Set Up Environment Variables

Create a `.env.local` file in the root directory:

```bash
touch .env.local
```

See the [Environment Configuration](#environment-configuration) section below for required variables.

#### 4. Set Up the Database

See the [Database Setup](#database-setup) section for detailed instructions.

#### 5. Run the Development Server

```bash
npm run dev
```

The application will be available at `http://localhost:3000`.

#### 6. Build for Production

```bash
npm run build
```

This command also runs ESLint to ensure code quality.

#### 7. Start Production Server

```bash
npm start
```

---

## 🔧 Environment Configuration

### Required Environment Variables

Create a `.env.local` file with the following variables:

```env
# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_xxxxxxxxxxxxxxxxxxxxxxxxxxxxx
CLERK_SECRET_KEY=sk_test_xxxxxxxxxxxxxxxxxxxxxxxxxxxxx

# Stripe Payments
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_xxxxxxxxxxxxxxxxxxxxxxxxxxxxx
STRIPE_SECRET_KEY=sk_test_xxxxxxxxxxxxxxxxxxxxxxxxxxxxx
STRIPE_WEBHOOK_SECRET=whsec_xxxxxxxxxxxxxxxxxxxxxxxxxxxxx

# Database
DATABASE_URL=postgresql://username:password@host:5432/feedbackhub

# Widget
WIDGET_URL=https://feebackhub-widget.vercel.app/

# Application
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

### Environment Variables Explained

#### **Clerk (Authentication)**

1. Create an account at [clerk.com](https://clerk.com)
2. Create a new application
3. Navigate to API Keys section
4. Copy the Publishable Key and Secret Key

**NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY**
- Client-side key for Clerk SDK
- Safe to expose in browser
- Format: `pk_test_` or `pk_live_`

**CLERK_SECRET_KEY**
- Server-side key for Clerk SDK
- Keep secret, never expose
- Format: `sk_test_` or `sk_live_`

#### **Stripe (Payments)**

1. Create an account at [stripe.com](https://stripe.com)
2. Navigate to Developers → API Keys
3. Copy the Publishable Key and Secret Key
4. Set up webhook endpoint for subscription events

**NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY**
- Client-side key for Stripe.js
- Safe to expose in browser
- Format: `pk_test_` or `pk_live_`

**STRIPE_SECRET_KEY**
- Server-side key for Stripe API
- Keep secret, never expose
- Format: `sk_test_` or `sk_live_`

**STRIPE_WEBHOOK_SECRET**
- Webhook signing secret
- Used to verify webhook authenticity
- Format: `whsec_xxxxx`
- Get from Stripe Dashboard → Webhooks

#### **Database**

**DATABASE_URL**
- PostgreSQL connection string
- Format: `postgresql://username:password@host:port/database`
- Example: `postgresql://admin:password@localhost:5432/feedbackhub`
- For production, use connection pooling (e.g., Supabase, Neon)

#### **Widget**

**WIDGET_URL**
- Base URL where widget JavaScript is hosted
- Include trailing slash
- Default: `https://feebackhub-widget.vercel.app/`
- For custom deployment, update this URL

#### **Application**

**NEXT_PUBLIC_APP_URL**
- Base URL of your application
- Used for redirects and absolute URLs
- Development: `http://localhost:3000`
- Production: Your deployed domain

### Environment Variable Security

⚠️ **Important Security Notes:**
- Never commit `.env.local` to version control
- Use different keys for development and production
- Rotate keys regularly
- Use environment variables in your deployment platform
- Never expose secret keys in client-side code

---

## 🗄️ Database Setup

### Database Schema

FeedbackHub uses PostgreSQL with Drizzle ORM. The schema consists of three main tables:

#### **1. Projects Table**

```typescript
projects {
  id: serial (Primary Key)
  name: text
  description: text
  url: text
  userId: varchar
}
```

**Purpose**: Stores project information created by users.

#### **2. Feedbacks Table**

```typescript
feedbacks {
  id: serial (Primary Key)
  projectId: integer (Foreign Key → projects.id)
  username: text
  userEmail: text
  message: text
  rating: integer (1-5)
}
```

**Purpose**: Stores feedback submitted through embedded widgets.

#### **3. Subscriptions Table**

```typescript
subscriptions {
  id: serial (Primary Key)
  userId: varchar
  stripeCustomerId: text
  stripeSubscriptionId: text
  subscribed: boolean (default: false)
}
```

**Purpose**: Tracks user subscription status and Stripe customer information.

### Database Setup Steps

#### **1. Create PostgreSQL Database**

**Option A: Local PostgreSQL**

```bash
# Install PostgreSQL (if not already installed)
# macOS
brew install postgresql@14
brew services start postgresql@14

# Ubuntu/Debian
sudo apt-get install postgresql-14
sudo service postgresql start

# Create database
createdb feedbackhub

# Or using psql
psql postgres
CREATE DATABASE feedbackhub;
\q
```

**Option B: Cloud PostgreSQL (Recommended for Production)**

Popular options:
- **Supabase**: Free tier, built-in pooling ([supabase.com](https://supabase.com))
- **Neon**: Serverless PostgreSQL ([neon.tech](https://neon.tech))
- **Railway**: Simple deployment ([railway.app](https://railway.app))
- **Vercel Postgres**: Integrated with Vercel ([vercel.com](https://vercel.com))

#### **2. Configure Database Connection**

Update your `.env.local` with the connection string:

```env
DATABASE_URL=postgresql://username:password@host:5432/feedbackhub
```

For connection pooling (recommended):
```env
DATABASE_URL=postgresql://username:password@host:5432/feedbackhub?pgbouncer=true
```

#### **3. Generate Database Schema**

Generate migration files from schema:

```bash
npm run db:generate
```

This creates migration files in the `drizzle/` directory.

#### **4. Push Schema to Database**

Apply the schema to your database:

```bash
npm run db:push
```

This creates all tables, relationships, and constraints.

#### **5. Verify Database Setup**

Start Drizzle Studio to inspect your database:

```bash
npm run db:studio
```

Access at `https://local.drizzle.studio`

### Database Commands

```bash
# Generate migrations from schema changes
npm run db:generate

# Push schema directly to database (development)
npm run db:push

# Run migrations (production)
npm run db:migrate

# Open Drizzle Studio (database GUI)
npm run db:studio
```

### Database Migrations (Production)

For production deployments, use migrations:

1. Make schema changes in `db/schema.ts`
2. Generate migration: `npm run db:generate`
3. Review generated SQL in `drizzle/` folder
4. Apply migration: `npm run db:migrate`

### Database Relationships

```
projects (1) ←→ (many) feedbacks
  - One project can have many feedbacks
  - Each feedback belongs to one project
  - Cascade delete: Deleting a project removes all feedbacks

users (Clerk) (1) ←→ (many) projects
  - One user can create many projects
  - Each project belongs to one user
  - User ID stored as varchar (Clerk user ID)

users (Clerk) (1) ←→ (1) subscriptions
  - One user has one subscription record
  - Subscription linked via Clerk user ID
```

---

## 🔌 Widget Integration

### Overview

The FeedbackHub widget is a lightweight, embeddable JavaScript component that allows visitors to submit feedback directly from your website.

### How to Integrate

#### **Step 1: Create a Project**

1. Sign in to your FeedbackHub dashboard
2. Click "New Project" button
3. Fill in:
   - **Name**: Your project name
   - **URL**: Your website URL
   - **Description**: Optional description
4. Click "Create"
5. You'll be redirected to the instructions page

#### **Step 2: Get Embed Code**

After creating a project, you'll receive a unique embed code:

```html
<my-widget project-id="YOUR_PROJECT_ID"></my-widget>
<script src="https://feebackhub-widget.vercel.app/widget.umd.js"></script>
```

Replace `YOUR_PROJECT_ID` with your actual project ID (e.g., "62").

#### **Step 3: Add to Your Website**

Add the code just before the closing `</body>` tag in your HTML:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>My Website</title>
</head>
<body>
  <!-- Your website content -->
  
  <!-- FeedbackHub Widget -->
  <my-widget project-id="62"></my-widget>
  <script src="https://feebackhub-widget.vercel.app/widget.umd.js"></script>
</body>
</html>
```

#### **Step 4: Test the Widget**

1. Load your website
2. Look for the feedback button (usually in bottom-right corner)
3. Click to open the feedback form
4. Submit test feedback
5. Check your FeedbackHub dashboard to see the feedback

### Widget Features

- **🎨 Customizable Appearance**: Matches your website's design
- **📱 Mobile Responsive**: Works on all devices
- **⚡ Lightweight**: Minimal impact on page load time
- **🔒 Secure**: HTTPS-only communication
- **♿ Accessible**: Keyboard navigation and screen reader support
- **🌐 Cross-Browser**: Works on all modern browsers

### Widget Configuration

The widget accepts the following attributes:

| Attribute | Required | Description | Example |
|-----------|----------|-------------|---------|
| `project-id` | Yes | Your unique project ID | `project-id="62"` |

### Widget Form Fields

The widget collects:
- **Name**: User's full name
- **Email**: User's email address
- **Rating**: 1-5 star rating
- **Message**: Detailed feedback text

### Technical Details

**Widget Technology:**
- Built as a Web Component (Custom Element)
- Zero dependencies on your website
- Isolated CSS (no style conflicts)
- Async script loading (non-blocking)

**Browser Support:**
- Chrome/Edge: Latest 2 versions
- Firefox: Latest 2 versions
- Safari: Latest 2 versions
- Mobile browsers: iOS Safari 12+, Chrome Android

**Performance:**
- Script size: ~15KB (gzipped)
- Load time: <100ms
- No jQuery or heavy frameworks

### Troubleshooting Widget Issues

**Widget not appearing?**
1. Check browser console for errors
2. Verify project ID is correct
3. Ensure script URL is accessible
4. Check for Content Security Policy (CSP) restrictions

**Styling conflicts?**
- Widget uses Shadow DOM to isolate styles
- Should not conflict with your CSS
- If issues persist, check for global CSS resets

**Feedback not submitting?**
1. Check browser network tab for failed requests
2. Verify project ID exists in your dashboard
3. Check CORS settings if self-hosting widget

---

## 🚀 Production Deployment

### Deployment Platforms

FeedbackHub can be deployed to various platforms. Here are the most popular options:

#### **1. Vercel (Recommended)**

Vercel is the creator of Next.js and provides seamless deployment.

**Steps:**

```bash
# Install Vercel CLI
npm install -g vercel

# Login to Vercel
vercel login

# Deploy
vercel --prod
```

**Or via GitHub Integration:**
1. Push code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Import your repository
4. Configure environment variables
5. Deploy automatically on every push

**Environment Variables:**
Add all variables from `.env.local` in Vercel Dashboard → Settings → Environment Variables

#### **2. Netlify**

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login
netlify login

# Build
npm run build

# Deploy
netlify deploy --prod
```

**Configuration:** Create `netlify.toml`:

```toml
[build]
  command = "npm run build"
  publish = ".next"

[[plugins]]
  package = "@netlify/plugin-nextjs"
```

#### **3. Docker**

Create `Dockerfile`:

```dockerfile
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV production
COPY --from=builder /app/next.config.mjs ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
EXPOSE 3000
CMD ["npm", "start"]
```

**Build and Run:**

```bash
docker build -t feedbackhub .
docker run -p 3000:3000 --env-file .env.local feedbackhub
```

#### **4. VPS (Ubuntu/Debian)**

```bash
# SSH into your server
ssh user@your-server-ip

# Install Node.js
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs

# Clone repository
git clone https://github.com/Rahulhanje/feedbackHub.git
cd feedbackHub

# Install dependencies
npm ci --production

# Build
npm run build

# Install PM2 for process management
sudo npm install -g pm2

# Start application
pm2 start npm --name "feedbackhub" -- start

# Set up autostart
pm2 startup
pm2 save

# Configure Nginx as reverse proxy
sudo apt-get install nginx
```

**Nginx Configuration:**

```nginx
server {
    listen 80;
    server_name yourdomain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

### Production Checklist

Before deploying to production:

- [ ] Set all environment variables in production
- [ ] Use production database (not development)
- [ ] Enable production mode (`NODE_ENV=production`)
- [ ] Configure Stripe webhook endpoint
- [ ] Set up SSL certificate (HTTPS)
- [ ] Configure CORS if needed
- [ ] Set up error tracking (e.g., Sentry)
- [ ] Configure analytics (e.g., Google Analytics)
- [ ] Test all payment flows with Stripe test mode
- [ ] Switch to Stripe live mode for production
- [ ] Set up database backups
- [ ] Configure CDN for static assets
- [ ] Enable Clerk production mode
- [ ] Set up monitoring and alerts
- [ ] Review and optimize bundle size
- [ ] Test widget on production domain

### Database Migration for Production

When deploying for the first time:

```bash
# Generate migrations
npm run db:generate

# Apply migrations to production database
DATABASE_URL=your_production_db_url npm run db:migrate
```

### Stripe Webhook Setup

1. Go to Stripe Dashboard → Developers → Webhooks
2. Click "Add endpoint"
3. Enter: `https://yourdomain.com/api/stripe/webhook`
4. Select events:
   - `checkout.session.completed`
   - `customer.subscription.created`
   - `customer.subscription.updated`
   - `customer.subscription.deleted`
5. Copy webhook signing secret
6. Add to environment variables as `STRIPE_WEBHOOK_SECRET`

### Performance Optimization

**Next.js Optimizations:**
- Enable SWC minification (default in Next.js 14)
- Use Image Optimization (`next/image`)
- Implement static generation where possible
- Enable compression middleware

**Database Optimizations:**
- Use connection pooling (PgBouncer)
- Add indexes on frequently queried columns
- Implement caching layer (Redis) for hot data

**CDN Setup:**
- Serve static assets from CDN
- Cache widget JavaScript
- Use edge caching for API responses

---

## 📚 API Documentation

### API Routes

FeedbackHub exposes several API endpoints for internal use:

#### **Stripe Checkout Session**

**Endpoint:** `POST /api/stripe/checkout-session`

**Purpose:** Create a Stripe checkout session for subscription

**Request Body:**
```json
{
  "plan": "monthly" | "yearly"
}
```

**Response:**
```json
{
  "url": "https://checkout.stripe.com/session/xxx"
}
```

**Usage:**
```javascript
const response = await fetch('/api/stripe/checkout-session', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ plan: 'monthly' })
});
const { url } = await response.json();
window.location.href = url;
```

#### **Stripe Webhook**

**Endpoint:** `POST /api/stripe/webhook`

**Purpose:** Handle Stripe webhook events

**Events Handled:**
- `checkout.session.completed`: Create subscription record
- `customer.subscription.updated`: Update subscription status
- `customer.subscription.deleted`: Mark subscription as cancelled

**Security:** Webhook signature verification using `STRIPE_WEBHOOK_SECRET`

#### **Create Customer Portal**

**Endpoint:** `GET /api/create-portal`

**Purpose:** Generate Stripe customer portal URL for subscription management

**Response:**
```json
{
  "url": "https://billing.stripe.com/session/xxx"
}
```

### Server Actions

FeedbackHub uses Next.js Server Actions for form submissions:

#### **createProject**

**File:** `actions/createProject.tsx`

**Purpose:** Create a new project

**Parameters:**
```typescript
FormData {
  name: string
  url: string
  description?: string
}
```

**Returns:** Redirects to `/projects/[projectId]/instructions`

**Usage:**
```tsx
<form action={createProject}>
  <input name="name" />
  <input name="url" />
  <textarea name="description" />
  <button type="submit">Create</button>
</form>
```

### Database Queries

All database operations use Drizzle ORM for type safety:

**Find Projects by User:**
```typescript
const projects = await db.query.projects.findMany({
  where: eq(projects.userId, userId)
});
```

**Find Project with Feedbacks:**
```typescript
const project = await db.query.projects.findFirst({
  where: eq(projects.id, projectId),
  with: {
    feedbacks: true
  }
});
```

**Find User Subscription:**
```typescript
const subscription = await db.query.subscriptions.findFirst({
  where: eq(subscriptions.userId, userId)
});
```

---

## 📁 Project Structure

```
feedbackHub/
├── actions/                  # Server actions
│   ├── createProject.tsx    # Project creation logic
│   └── userSubscriptions.ts # Subscription helpers
├── app/                     # Next.js App Router
│   ├── (user)/             # Protected routes
│   │   ├── dashboard/      # Dashboard pages
│   │   ├── projects/       # Project pages
│   │   │   └── [projectId]/
│   │   │       ├── page.tsx           # Project detail
│   │   │       └── instructions/      # Embed instructions
│   │   └── payments/       # Payment pages
│   ├── api/                # API routes
│   │   ├── create-portal/  # Stripe portal
│   │   └── stripe/         # Stripe webhooks
│   ├── landingpage/        # Landing page components
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Homepage
│   └── globals.css         # Global styles
├── components/              # React components
│   ├── ui/                 # shadcn/ui components
│   ├── copy-btn.tsx        # Copy to clipboard
│   ├── headermenu.tsx      # Header menu
│   ├── newproj.tsx         # New project dialog
│   ├── page-header.tsx     # Page header
│   ├── rating.tsx          # Star rating display
│   ├── submitproj.tsx      # Submit button
│   └── table.tsx           # Feedback table
├── db/                      # Database
│   ├── index.ts            # Database connection
│   └── schema.ts           # Drizzle schema
├── drizzle/                 # Database migrations
├── lib/                     # Utilities
│   └── utils.ts            # Helper functions
├── public/                  # Static assets
│   ├── LOGO.png
│   ├── LOGO1.png
│   └── demo.gif
├── .env.local              # Environment variables (not in repo)
├── .eslintrc.json          # ESLint configuration
├── .gitignore              # Git ignore rules
├── components.json         # shadcn/ui config
├── drizzle.config.ts       # Drizzle configuration
├── middleware.ts           # Route middleware
├── next.config.mjs         # Next.js configuration
├── package.json            # Dependencies
├── postcss.config.mjs      # PostCSS configuration
├── tailwind.config.ts      # Tailwind configuration
└── tsconfig.json           # TypeScript configuration
```

### Key Directories Explained

**`app/`**: Next.js 14 App Router structure
- `(user)/`: Grouped route for authenticated pages
- `api/`: Backend API endpoints
- `landingpage/`: Landing page components

**`components/`**: Reusable React components
- `ui/`: shadcn/ui components (Button, Dialog, etc.)
- Custom components for specific features

**`db/`**: Database layer
- `schema.ts`: Table definitions with Drizzle ORM
- `index.ts`: Database connection setup

**`actions/`**: Server Actions for form handling

**`middleware.ts`**: Clerk authentication middleware

---

## 📖 Usage Guide

### For End Users

#### **1. Sign Up / Sign In**

1. Visit the FeedbackHub homepage
2. Click "Get Started" or "Sign In"
3. Choose authentication method:
   - Email + Password
   - Google OAuth
   - GitHub OAuth
4. Complete profile setup

#### **2. Create Your First Project**

1. Navigate to Dashboard
2. Click "New Project" button
3. Fill in project details:
   - **Name**: e.g., "My Awesome App"
   - **URL**: e.g., "https://myapp.com"
   - **Description**: Optional details about your project
4. Click "Create"
5. You'll see integration instructions

#### **3. Integrate Widget**

1. Copy the provided embed code
2. Paste it into your website's HTML before `</body>`
3. Deploy your website changes
4. Test by submitting feedback from your site

#### **4. View Feedback**

1. Go to Dashboard
2. Click on your project
3. View feedback in the table:
   - Sort by clicking column headers
   - Filter using search boxes
   - View ratings as stars
   - Read full messages

#### **5. Manage Subscription**

1. Navigate to "Payments"
2. View current plan (Free, Monthly, or Yearly)
3. Click "Manage Subscription" to:
   - Upgrade/downgrade plan
   - Update payment method
   - View billing history
   - Cancel subscription

### For Developers

#### **Adding a New Feature**

1. Create database schema changes in `db/schema.ts`
2. Generate migration: `npm run db:generate`
3. Push to database: `npm run db:push`
4. Create UI components in `components/`
5. Add pages in `app/` directory
6. Create Server Actions in `actions/`
7. Test thoroughly

#### **Customizing the UI**

**Colors:**
Edit `tailwind.config.ts`:
```typescript
theme: {
  extend: {
    colors: {
      primary: '#your-color',
      // ... more colors
    }
  }
}
```

**Components:**
All UI components are in `components/ui/` and can be customized using Tailwind classes.

#### **Adding New Payment Plans**

Edit `app/landingpage/pricing-section.tsx`:
```typescript
export const pricingPlans: PricingPlan[] = [
  // ... existing plans
  {
    title: "Enterprise",
    price: 99.99,
    description: "For large organizations",
    isPopular: false,
    url: "/payments/subscribe?plan=enterprise",
    features: [...]
  }
];
```

---

## 🔒 Security

### Security Features

**1. Authentication**
- Clerk handles all authentication
- JWT tokens with automatic refresh
- Secure session management
- Protection against CSRF attacks

**2. Authorization**
- Middleware-based route protection
- User-specific data isolation
- Database queries filtered by user ID

**3. Payment Security**
- PCI-compliant via Stripe
- No credit card data stored locally
- Webhook signature verification
- Secure checkout sessions

**4. Database Security**
- Parameterized queries via Drizzle ORM
- Protection against SQL injection
- Connection string encryption
- Database user with limited permissions

**5. Environment Variables**
- Secrets stored in environment variables
- Not committed to version control
- Different keys for dev/prod

### Security Best Practices

✅ **Do:**
- Keep dependencies updated: `npm audit fix`
- Use HTTPS in production
- Implement rate limiting for API routes
- Validate all user inputs
- Use CSP headers
- Enable CORS only for trusted domains
- Regularly rotate API keys
- Monitor for suspicious activity
- Implement logging and audit trails

❌ **Don't:**
- Commit secrets to Git
- Use default/weak passwords
- Expose API keys in client code
- Skip webhook signature verification
- Allow SQL injection vulnerabilities
- Store sensitive data without encryption

### Reporting Security Issues

If you discover a security vulnerability, please email: **rahulhanje0.7@gmail.com**

Do not create public GitHub issues for security vulnerabilities.

---

## 🐛 Troubleshooting

### Common Issues

#### **1. Database Connection Fails**

**Error:** `Error: Connection terminated unexpectedly`

**Solutions:**
- Verify `DATABASE_URL` is correct
- Check PostgreSQL is running: `pg_isready`
- Ensure database exists: `psql -l`
- Check network connectivity
- Verify firewall rules for cloud databases

#### **2. Clerk Authentication Not Working**

**Error:** `Clerk: Missing publishable key`

**Solutions:**
- Verify `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` is set
- Check environment variables are loaded
- Restart development server after adding env vars
- Ensure keys match the correct Clerk instance

#### **3. Stripe Checkout Fails**

**Error:** `No such checkout session`

**Solutions:**
- Verify `STRIPE_SECRET_KEY` is correct
- Check Stripe dashboard for test mode vs live mode
- Ensure webhook endpoint is configured
- Verify `STRIPE_WEBHOOK_SECRET` matches dashboard

#### **4. Widget Not Appearing**

**Solutions:**
- Check browser console for JavaScript errors
- Verify project ID in widget code is correct
- Ensure widget script URL is accessible
- Check for Content Security Policy restrictions
- Clear browser cache

#### **5. Build Fails**

**Error:** `Type error: ...`

**Solutions:**
- Run `npm install` to ensure all dependencies are installed
- Delete `.next/` and `node_modules/`, then reinstall
- Check TypeScript errors: `npx tsc --noEmit`
- Verify Node.js version: `node --version` (should be 20.x)

#### **6. Feedback Not Saving**

**Solutions:**
- Check database connection
- Verify project ID exists in database
- Check browser network tab for API errors
- Ensure database schema is up to date: `npm run db:push`

### Debug Mode

Enable debug logging:

```env
# .env.local
NODE_ENV=development
DEBUG=*
```

### Getting Help

1. Check documentation above
2. Search existing GitHub issues
3. Create a new issue with:
   - Clear description of problem
   - Steps to reproduce
   - Expected vs actual behavior
   - Environment details (Node version, OS, etc.)
   - Error messages/logs

---

## 🤝 Contributing

We welcome contributions! Here's how you can help:

### Ways to Contribute

- 🐛 Report bugs
- 💡 Suggest new features
- 📝 Improve documentation
- 🔧 Submit pull requests
- ⭐ Star the repository
- 📢 Share with others

### Development Workflow

1. **Fork the repository**
   ```bash
   # Click "Fork" on GitHub
   ```

2. **Clone your fork**
   ```bash
   git clone https://github.com/YOUR_USERNAME/feedbackHub.git
   cd feedbackHub
   ```

3. **Create a branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

4. **Make changes**
   - Write code
   - Add tests if applicable
   - Update documentation

5. **Test your changes**
   ```bash
   npm run lint
   npm run build
   # Test manually
   ```

6. **Commit changes**
   ```bash
   git add .
   git commit -m "feat: add your feature description"
   ```

7. **Push to your fork**
   ```bash
   git push origin feature/your-feature-name
   ```

8. **Create Pull Request**
   - Go to original repository
   - Click "New Pull Request"
   - Select your branch
   - Describe your changes

### Commit Message Guidelines

Follow conventional commits:

- `feat:` New feature
- `fix:` Bug fix
- `docs:` Documentation changes
- `style:` Code style changes (formatting)
- `refactor:` Code refactoring
- `test:` Adding tests
- `chore:` Maintenance tasks

Example: `feat: add email notifications for new feedback`

### Code Style

- Use TypeScript for type safety
- Follow ESLint rules: `npm run lint`
- Use Prettier for formatting
- Write clear, descriptive variable names
- Add comments for complex logic
- Keep functions small and focused

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 📞 Contact

For questions, support, or collaboration:

- **Email**: rahulhanje0.7@gmail.com
- **GitHub**: [@Rahulhanje](https://github.com/Rahulhanje)
- **Project Repository**: [github.com/Rahulhanje/feedbackHub](https://github.com/Rahulhanje/feedbackHub)

---

<div align="center">

**Built with ❤️ using Next.js, TypeScript, and PostgreSQL**

[⬆ Back to Top](#-feedbackhub)

</div>

