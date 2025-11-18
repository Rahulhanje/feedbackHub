# FeedbackHub

<p align="center">
  <img src="public/LOGO.png" alt="FeedbackHub Logo" width="200"/>
</p>

<p align="center">
  <strong>Collect customer feedback seamlessly with embeddable widgets</strong>
</p>

<p align="center">
  A modern SaaS platform for collecting, managing, and analyzing user feedback with beautiful embeddable widgets
</p>

---

## 🎯 What is FeedbackHub?

FeedbackHub is a powerful feedback collection platform that allows you to integrate customizable feedback widgets into any website. Built with modern web technologies, it provides a complete solution for gathering user insights, managing feedback, and making data-driven decisions.

Simply create a project, get your embeddable code snippet, and start collecting feedback with ratings from your users instantly.

## ✨ Key Features

### 🚀 Easy Integration
- **One-line embed**: Get a simple code snippet to add to any website
- **Customizable widgets**: Seamlessly blend with your site's design
- **Zero configuration**: Works out of the box with minimal setup

### 📊 Comprehensive Feedback Management
- **Rating system**: Collect feedback with 1-5 star ratings
- **Search and filter**: Find specific feedback quickly
- **Sort by rating**: Prioritize feedback based on user satisfaction
- **Real-time updates**: See new feedback as it comes in

### 🔐 Secure & Scalable
- **User authentication**: Powered by Clerk for secure access
- **Subscription management**: Flexible pricing with Stripe integration
- **PostgreSQL database**: Reliable data persistence with Drizzle ORM
- **Protected routes**: Secure your dashboard and sensitive data

### 💎 Pricing Plans
- **Free tier**: Up to 3 projects with unlimited feedback
- **Monthly plan**: $6.99/month for unlimited projects
- **Yearly plan**: $39.99/year (save more!)

## 🎬 Demo

![FeedbackHub Demo](public/demo.gif)

## 🛠️ Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) - React framework with server-side rendering
- **Language**: [TypeScript](https://www.typescriptlang.org/) - Type-safe development
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- **Database**: [PostgreSQL](https://www.postgresql.org/) with [Drizzle ORM](https://orm.drizzle.team/)
- **Authentication**: [Clerk](https://clerk.com/) - Complete user management
- **Payments**: [Stripe](https://stripe.com/) - Subscription and payment processing
- **UI Components**: [Radix UI](https://www.radix-ui.com/) - Accessible component primitives
- **Icons**: [Lucide React](https://lucide.dev/) - Beautiful & consistent icons

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18 or higher)
- **npm** or **yarn** package manager
- **PostgreSQL** database (or use a hosted solution like Supabase)

You'll also need accounts and API keys for:
- [Clerk](https://clerk.com/) - For authentication
- [Stripe](https://stripe.com/) - For payment processing
- A PostgreSQL database connection string

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/Rahulhanje/feedbackHub.git
cd feedbackHub
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Set Up Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```env
# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key

# Stripe Payment Processing
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
STRIPE_SECRET_KEY=your_stripe_secret_key
STRIPE_WEBHOOK_SECRET=your_stripe_webhook_secret

# Stripe Price IDs (create these in your Stripe dashboard)
STRIPE_MONTHLY_PRICE_ID=your_monthly_price_id
STRIPE_YEARLY_PRICE_ID=your_yearly_price_id

# Database
DATABASE_URL=postgresql://username:password@host:port/database

# Widget Configuration
WIDGET_URL=your_widget_url
```

### 4. Set Up the Database

Run database migrations:

```bash
npm run db:push
```

To open the database studio:

```bash
npm run db:studio
```

### 5. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## 📖 Usage

### Creating Your First Project

1. **Sign up/Login**: Click "Get Started" and create an account
2. **Access Dashboard**: Navigate to your dashboard after logging in
3. **Create Project**: Click "New Project" and fill in:
   - Project name
   - Description
   - Website URL
4. **Get Embed Code**: Go to "Instructions" to get your widget code
5. **Embed Widget**: Add the code snippet to your website

### Embedding the Feedback Widget

After creating a project, you'll receive code like this:

```html
<my-widget project-id="YOUR_PROJECT_ID"></my-widget>
<script src="YOUR_WIDGET_URL/widget.umd.js"></script>
```

Simply paste this into your website's HTML, and the feedback widget will appear!

### Managing Feedback

- **View Feedback**: Access the project page to see all feedback
- **Filter & Search**: Use the search bar to find specific feedback
- **Sort by Rating**: Order feedback from lowest to highest ratings
- **Analyze Trends**: Review ratings to understand user satisfaction

### Subscription Management

- **Free Plan**: Start with 3 projects at no cost
- **Upgrade**: Visit the Payments page to subscribe
- **Manage**: Update or cancel subscriptions anytime
- **Billing Portal**: Access Stripe's customer portal for invoices

## 📁 Project Structure

```
feedbackHub/
├── app/                        # Next.js app directory
│   ├── (user)/                # Protected user routes
│   │   ├── dashboard/         # Dashboard page
│   │   ├── projects/          # Project management
│   │   └── payments/          # Subscription handling
│   ├── api/                   # API routes
│   │   └── stripe/            # Stripe webhooks & checkout
│   ├── landingpage/           # Landing page components
│   └── page.tsx               # Home page
├── components/                 # Reusable components
│   ├── ui/                    # UI component library
│   └── ...                    # Feature components
├── db/                        # Database configuration
│   ├── schema.ts              # Database schema
│   └── index.ts               # Database client
├── lib/                       # Utility functions
│   ├── payments.ts            # Payment helpers
│   └── stripe.ts              # Stripe configuration
├── public/                    # Static assets
└── middleware.ts              # Auth middleware
```

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run db:generate` - Generate database migrations
- `npm run db:push` - Push schema changes to database
- `npm run db:studio` - Open Drizzle Studio

## 🤝 Contributing

Contributions are welcome! If you'd like to contribute:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📞 Support

If you need help or have questions:

- **Email**: rahulhanje0.7@gmail.com
- **Issues**: [GitHub Issues](https://github.com/Rahulhanje/feedbackHub/issues)

## 👤 Maintainer

**Rahul Hanje**
- GitHub: [@Rahulhanje](https://github.com/Rahulhanje)
- Email: rahulhanje0.7@gmail.com

---

<p align="center">Made with ❤️ by Rahul Hanje</p>

