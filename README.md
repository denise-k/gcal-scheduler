# Google Calendar Appointment Scheduler

A Next.js frontend for the [Google Calendar Appointment Scheduler](https://workspace.google.com/resources/appointment-scheduling/). This project provides an easy way to let visitors schedule appointments with you through a clean, modern interface.

## Features

- Toggle between different appointment types (30/60 minutes duration in the example)
- Direct integration with Google Calendar via embed URL
- Responsive, mobile-friendly design

## Setup

1. Clone this repository
2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Update the calendar URLs in `components/data.tsx` with your own Google Calendar embed URLs. To get your calendar embed URLs:
   - Open Google Calendar on your computer
   - Click Settings (⚙️) > Settings
   - On the left side, click the name of the calendar you want to embed
   - Find the "Integrate calendar" section
   - Copy the iframe code displayed
   - Extract the URL from the iframe code and update in `data.tsx`
   - Replace the placeholder URLs (`https://calendar.google.com/calendar/appointments/schedules/YOUR_CALENDAR_LINK_HERE`)

4. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

5. Open [http://localhost:3000](http://localhost:3000) to see your calendar scheduler

## Deployment

This application can be easily deployed using [Vercel](https://vercel.com). Simply:

1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket)
2. Import your repository to Vercel
3. Vercel will automatically detect Next.js and deploy your application

The application will be automatically built and deployed, with no additional configuration required.

## Customization

You can customize the appearance by modifying the Tailwind classes in `app/page.tsx`. The current design features:

- Gradient buttons
- Hover effects
- Smooth transitions
- Responsive layout

