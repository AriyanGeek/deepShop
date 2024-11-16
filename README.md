# DeepShop

Full-stack e-commerce application built with Next.js and NestJS.

## Project Structure

- `/client` - Next.js frontend
- `/server` - NestJS backend

## Getting Started

### Frontend

bash
cd client
npm install
npm run dev

### Backend

bash
cd server
npm install
npm run start:dev


The frontend will run on http://localhost:3000
The backend will run on  http://localhost:3001

### Database
To set up the database and run migrations:

# Generate Prisma Client
npm run prisma:generate

# Run migrations
npm run prisma:migrate

# Seed the database
npm run db:seed

# (Optional) Open Prisma Studio to view/edit data
npm run prisma:studio


Make sure you have PostgreSQL installed and running locally, and update the DATABASE_URL in your .env file with your actual database credentials.