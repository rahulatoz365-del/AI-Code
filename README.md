# Codrr – AI-Powered Wireframe-to-Code Platform

## 1. Overview

Codrr is an intelligent web application that converts wireframe images into production-ready React frontend code using AI. It streamlines the transition from low-fidelity design to implementation by generating fully functional UI components based on uploaded wireframes.

Codrr leverages modern UI libraries and a developer-centric workflow to help teams accelerate prototyping, reduce manual coding effort, and maintain a consistent design system.

---

## 2. Core Capabilities

### 2.1 AI-Powered Wireframe to Code

- Upload a wireframe image (e.g., hand-drawn sketch, low-fidelity mockup).
- Select from multiple AI models to guide the generation process.
- Automatically generate React code that leverages:
  - Tailwind CSS
  - `shadcn/ui`
  - `lucide-react`
- Instantly preview the generated UI directly within the application.
- Regenerate variations if the initial output is not satisfactory, allowing iterative refinement.

### 2.2 Authentication and User Accounts

- Secure authentication via Google.
- Each user has a persistent account and profile.
- Usage, designs, and history are bound to the authenticated Google account, ensuring continuity across sessions and devices.

### 2.3 Design History and Reusability

- All generated designs are stored in the database.
- Designs are accessible under a dedicated “Designs” section within the UI.
- Users can:
  - Review previously generated UIs.
  - Reuse or adapt existing designs without re-running generation.
  - Avoid duplicative work on commonly used layouts or components.

### 2.4 Rate Limiting and Credit System

- Each user starts with an allocated pool of 20 free credits.
- Credit model:
  - 1 credit = 1 design generation request.
- Rate limiting ensures:
  - Fair usage across all users.
  - Predictable load on backend services.
  - Protection against abuse and unintended high-volume usage.

### 2.5 Automated Monthly Maintenance (via GitHub Actions)

- A scheduled GitHub Actions workflow runs on the first day of each month.
- The automated job:
  - Resets user credits back to 20.
  - Cleans up older designs from the database according to configured retention rules.
- This automated process supports a sustainable, recurring free tier by managing storage growth and resource utilization.

---

## 3. Architecture and Technology Stack

Codrr is implemented as a modern full-stack web application powered by Next.js, combining both frontend UI and backend API capabilities within a unified codebase.

### 3.1 High-Level Architecture

- **Client Application:** Next.js (App/Pages Router-based React UI)
- **Server-Side Logic:** Next.js API routes
- **Database:** Neon (PostgreSQL-based managed database)
- **Authentication:** Google-based authentication
- **Automation:** GitHub Actions (scheduled workflows)

### 3.2 Technology Stack Details

| Category         | Technologies                     | Purpose                                                      |
|------------------|----------------------------------|--------------------------------------------------------------|
| Frontend         | Next.js                         | React-based framework for SSR/SSG and routing                |
| UI Components    | `shadcn/ui`                     | Reusable, accessible UI component library                    |
| Styling          | Tailwind CSS                    | Utility-first CSS for rapid, consistent styling              |
| Icons            | `lucide-react`                  | Icon set for modern, scalable vector icons                   |
| Backend          | Next.js API routes              | Server-side logic, AI integration, and REST-like endpoints   |
| Database         | Neon DB (PostgreSQL)            | Storage for users, designs, and credits                      |
| Authentication   | Google Authentication            | Secure login and identity management                         |
| Automation       | GitHub Actions (Cron Scheduling) | Monthly credit reset and data maintenance tasks              |

---

## 4. User Workflow

1. **Sign In**
   - User signs in via Google to create or access their account.
   - Usage history and design data are associated with this identity.

2. **Upload Wireframe**
   - User uploads an image of a wireframe or low-fidelity design.
   - Selects the preferred AI model or configuration.

3. **Generate Code**
   - Codrr processes the image and generates:
     - React component structure
     - Tailwind CSS styling
     - Integration with `shadcn/ui` and `lucide-react` where applicable
   - A live preview is rendered within the application.

4. **Review and Iterate**
   - User reviews the output and:
     - Accepts and saves it, or
     - Requests regeneration to explore alternative implementations (consuming additional credits).

5. **Access Design History**
   - Saved designs appear under the “Designs” section.
   - Users can revisit, copy, or reuse generated code at any time, subject to retention policies.

---

## 5. Credit and Rate-Limit Model

- **Initial Allocation:** Each new user receives 20 credits.
- **Consumption:** Each design generation (including regenerations) consumes 1 credit.
- **Enforcement:** Rate limiting is enforced at the user level to:
  - Limit excessive traffic from any single account.
  - Maintain responsive performance for all users.

### 5.1 Monthly Reset

- A GitHub Actions cron job:
  - Runs on the first day of every month.
  - Restores each user’s credit balance to 20.
  - Cleans up older design records as configured.
- This provides a recurring, predictable free usage tier while controlling long-term resource consumption.

---

## 6. Getting Started (High-Level)

> Note: Adjust repository names, commands, and environment variables to match your internal implementation.

### 6.1 Prerequisites

- Node.js (LTS version recommended)
- npm or yarn
- Neon DB (or equivalent PostgreSQL instance)
- Google Cloud credentials for OAuth (Client ID and Client Secret)
- GitHub repository with GitHub Actions enabled (for scheduled jobs)

### 6.2 Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/your-organization/codrr.git
   cd codrr
   ```

2. **Install Dependencies**

   ```bash
   npm install
   # or
   # yarn install
   ```

### 6.3 Configuration

Create an `.env.local` file (or equivalent configuration) at the project root. Typical variables may include (adapt names to your implementation):

```env
DATABASE_URL=your_neon_db_connection_string
GOOGLE_CLIENT_ID=your_google_oauth_client_id
GOOGLE_CLIENT_SECRET=your_google_oauth_client_secret
NEXTAUTH_SECRET=your_auth_secret_or_session_key
NEXT_PUBLIC_APP_URL=https://your-app-url.example.com
```

### 6.4 Running the Application

Start the development server:

```bash
npm run dev
# or
# yarn dev
```

By default, the application will be available at a URL such as:

```text
http://localhost:3000
```

---

## 7. Automation and Operations

- **GitHub Actions Workflow:**
  - A scheduled workflow (cron) is configured in the repository to:
    - Run on the 1st of each month.
    - Connect to the database.
    - Reset user credit balances.
    - Optionally delete or archive designs older than a defined threshold.
- **Operational Considerations:**
  - Monitor database size and performance.
  - Track error rates and latency for AI generation endpoints.
  - Review GitHub Actions logs to ensure monthly jobs run successfully.
