Codrr is an intelligent web application that converts wireframe images into fully functional React frontend code using AI. It leverages modern UI libraries and developer-friendly features to simplify the process of turning designs into production-ready components.

🚀 Key Features
🖼️ Wireframe to Code (AI-Powered)
Upload a wireframe image

Choose from multiple AI models

Codrr generates React + Tailwind + shadcn/ui + lucide-react code

Instantly preview the generated UI within the app

Option to regenerate if you're not satisfied (like Claude)

🔐 Google Authentication
Sign in securely with your Google account

Track your usage and saved designs across sessions

📁 Design History & Reusability
All generated designs are:

Stored in the database

Rendered under the “Designs” tab in the UI

Avoid regenerating commonly used UI—access them anytime!

💳 Rate Limit System
Each user starts with 20 free credits

1 credit = 1 design generation

Rate limits ensure fair usage and control server load

🛠️ Automated Reset via GitHub Actions
A cron job runs on the 1st of every month

Resets user credits back to 20

Clears old designs from the database

Ensures Codrr remains free forever

🧑‍💻 Tech Stack
Category	     Tech Used
Frontend	     Nextjs, shadcn/ui, Tailwind CSS, lucide-react
Backend	         Nextjs
Database	     Neon DB
Authentication	 Google Authentication
Cron Automation	 GitHub Actions (Scheduled Cron Job)