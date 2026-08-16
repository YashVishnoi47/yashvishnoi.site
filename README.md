# Yash Vishnoi — Portfolio

A modern, full-stack personal portfolio built with **Next.js**, **React**, **Tailwind CSS**, **MongoDB**, and **Auth.js**.

The site is designed to showcase Yash Vishnoi's work, services, technical background, and projects while providing interactive features such as a guestbook, OAuth authentication, and appointment scheduling.

**Live website:** https://yashvishnoi.site  
**Repository:** https://github.com/YashVishnoi47/yashvishnoi.site

---

## Overview

This project is more than a static portfolio. It combines a responsive frontend with server-side functionality, database persistence, authentication, external integrations, SEO metadata, and animated UI.

The homepage is organized around several core sections:

- Hero / introduction
- Selected work and projects
- Web development services
- About section
- Frequently asked questions
- Booking CTA
- Guestbook

The application also includes dedicated routes for booking a call, viewing projects, and interacting with the guestbook.

---

## Features

### Portfolio

- Responsive personal portfolio
- Hero section with personal introduction
- Selected projects / work showcase
- Services section
- About section
- FAQ section
- Dedicated projects route
- Responsive navigation and footer
- Custom typography and visual styling

### Guestbook

Visitors can leave messages through the guestbook.

The guestbook is backed by MongoDB and stores:

- Name
- Message
- Profile image
- Authenticated user ID
- Creation / update timestamps

Messages are retrieved server-side and displayed on the guestbook page.

### Authentication

Authentication is implemented with **Auth.js / NextAuth**.

Supported providers:

- GitHub
- Google

The application uses the official MongoDB adapter to persist authentication-related data.

The authenticated user's database ID is also added to the session object for application use.

### Book a Call

The `/bookacall` route embeds a **Cal.com** scheduling interface, allowing visitors to schedule a 30-minute call directly from the portfolio.

### SEO & Discoverability

The application includes:

- Page metadata
- Canonical URL
- Open Graph metadata
- Twitter/X card metadata
- Robots directives
- JSON-LD structured data
- Person schema
- WebSite schema
- Sitemap
- `robots.txt`
- Open Graph image

The structured data connects the portfolio with the author's public GitHub and LinkedIn profiles.

### UI & Motion

The project uses several tools for interactive UI and animation, including:

- Framer Motion
- GSAP
- Lenis
- React Three Fiber
- Three.js
- OGL
- Radix UI
- shadcn/ui
- Lucide React

---

## Tech Stack

| Category | Technologies |
| --- | --- |
| Framework | Next.js 16 |
| UI | React 19 |
| Language | JavaScript / JSX |
| Styling | Tailwind CSS 4 |
| Database | MongoDB |
| ODM | Mongoose |
| Authentication | Auth.js / NextAuth |
| Auth Adapter | MongoDB Adapter |
| Scheduling | Cal.com |
| Animation | Framer Motion, GSAP |
| Smooth Scrolling | Lenis |
| 3D / Graphics | Three.js, React Three Fiber, OGL |
| UI Components | Radix UI, shadcn/ui |
| Notifications | Sonner |
| Deployment | Vercel-compatible Next.js deployment |

---

## Architecture

The application follows the Next.js App Router structure.

```text
yashvishnoi.site/
├── app/
│   ├── api/
│   │   ├── auth/
│   │   ├── createMessage/
│   │   └── getMessages/
│   ├── bookacall/
│   ├── guestbook/
│   ├── projects/
│   ├── globals.css
│   ├── layout.js
│   └── page.js
│
├── components/
│   ├── layout/
│   ├── pages/
│   │   ├── GuestBook/
│   │   └── HomePage/
│   └── ui/
│
├── lib/
│   ├── Database/
│   │   ├── models/
│   │   ├── connectDB.js
│   │   └── mongoDb.js
│   ├── funtion.js
│   ├── projects.js
│   └── utils.js
│
├── public/
│   ├── me/
│   ├── screenshots/
│   ├── socials/
│   ├── techIcons/
│   ├── og-image.png
│   ├── robots.txt
│   ├── sitemap.xml
│   └── website-logo.svg
│
├── auth.js
├── proxy.js
├── next.config.mjs
├── jsconfig.json
├── package.json
└── README.md
```

### Directory responsibilities

#### `app/`

Contains routes and server-side application entry points using the Next.js App Router.

#### `components/`

Contains reusable UI and page-specific React components.

The project separates general layout components from page-specific components.

#### `lib/`

Contains shared application logic, database utilities, project data, and helper functions.

#### `lib/Database/`

Responsible for MongoDB connectivity and Mongoose models.

#### `public/`

Contains static assets such as profile media, screenshots, icons, social assets, SEO files, and branding assets.

#### `auth.js`

Central Auth.js configuration. GitHub and Google are registered as OAuth providers and MongoDB is used as the authentication adapter.

#### `proxy.js`

Exports the Auth.js `auth` function as the Next.js proxy entry point.

---

## Application Flow

### Guestbook flow

```text
Visitor
   │
   ▼
Guestbook Page
   │
   ├── Fetch existing messages
   │        │
   │        ▼
   │     MongoDB
   │
   ▼
GuestList UI
```

When a visitor submits a message:

```text
Guestbook Form
      │
      ▼
POST /api/createMessage
      │
      ▼
CreateMessage()
      │
      ▼
MongoDB / Message model
      │
      ▼
Saved message
```

The API validates the required fields before creating the document.

### Authentication flow

```text
Visitor
   │
   ▼
Sign in
   │
   ├── GitHub
   └── Google
        │
        ▼
     Auth.js
        │
        ▼
 MongoDB Adapter
        │
        ▼
Authenticated Session
```

The authenticated user's database ID is exposed through the session object.

### Booking flow

```text
Portfolio
   │
   ▼
Book a Call
   │
   ▼
/bookacall
   │
   ▼
Cal.com Embed
   │
   ▼
30-minute scheduling page
```

---

## Database

The project uses MongoDB through both the native MongoDB driver and Mongoose.

### MongoDB connection

The application reads the MongoDB connection string from:

```env
MONGODB_URI=
```

Mongoose connections are cached in the application to avoid unnecessary repeated connections.

### Message model

The guestbook message model contains:

```text
Message
├── Name       String   required
├── message    String   required
├── image      String   required
├── userId     ObjectId required
└── timestamps
```

---

## API

### `POST /api/createMessage`

Creates a new guestbook message.

#### Request body

```json
{
  "name": "John Doe",
  "message": "Great portfolio!",
  "image": "https://example.com/avatar.png",
  "userId": "USER_ID"
}
```

All four fields are required.

#### Success response

```json
{
  "message": {
    "...": "created message"
  }
}
```

#### Possible status codes

| Status | Meaning |
| --- | --- |
| `200` | Message created successfully |
| `400` | Required data missing or message could not be created |
| `500` | Unexpected server error |

---

### `GET /api/getMessages`

Returns the messages stored in the guestbook.

#### Success response

```json
{
  "messages": []
}
```

---

## Environment Variables

Create a `.env.local` file in the project root.

```env
MONGODB_URI=your_mongodb_connection_string

AUTH_SECRET=your_auth_secret

AUTH_GITHUB_ID=your_github_client_id
AUTH_GITHUB_SECRET=your_github_client_secret

AUTH_GOOGLE_ID=your_google_client_id
AUTH_GOOGLE_SECRET=your_google_client_secret
```

> Never commit `.env.local` or OAuth credentials to the repository.

The exact OAuth credentials should be created in the respective GitHub and Google developer consoles.

---

## Getting Started

### Prerequisites

Make sure you have:

- Node.js installed
- npm installed
- A MongoDB database
- GitHub OAuth credentials if GitHub login is enabled
- Google OAuth credentials if Google login is enabled
- A Cal.com account / event configuration if booking is enabled

### 1. Clone the repository

```bash
git clone https://github.com/YashVishnoi47/yashvishnoi.site.git
```

### 2. Enter the project

```bash
cd yashvishnoi.site
```

### 3. Install dependencies

```bash
npm install
```

### 4. Configure environment variables

Create:

```text
.env.local
```

and add the required values.

### 5. Start the development server

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

---

## Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Starts the development server |
| `npm run build` | Creates a production build |
| `npm run start` | Starts the production server |
| `npm run lint` | Runs ESLint |

---

## Deployment

The application is designed to run as a standard Next.js production application and can be deployed on platforms such as Vercel.

### Production checklist

Before deploying:

1. Add all required environment variables.
2. Configure GitHub OAuth callback URLs.
3. Configure Google OAuth callback URLs.
4. Configure the production MongoDB connection.
5. Verify the Cal.com embed configuration.
6. Run a production build locally.

```bash
npm run build
```

Then deploy the application through your preferred Next.js hosting provider.

---

## Configuration

### Remote images

The Next.js image configuration allows images from:

- `avatars.githubusercontent.com`
- `lh3.googleusercontent.com`

These hosts are used for authenticated profile images.

### Fonts

The application loads:

- Inter
- Fraunces
- IBM Plex Mono

These fonts are configured through `next/font`.

---

## Project Data

Project showcase information is centralized in:

```text
lib/projects.js
```

Each project can contain:

- Project name
- Description
- Live URL
- GitHub URL
- Technology icons
- Screenshot
- Feature list

This makes it possible to update showcased work without changing the main page structure.

---

## Design Principles

The portfolio focuses on:

- Minimal visual hierarchy
- Strong typography
- Responsive layouts
- Smooth motion
- Fast page interactions
- Clear project presentation
- Conversion-focused CTAs
- Developer-oriented technical credibility

The implementation separates page content from reusable components so individual sections can be modified without rewriting the entire page.

---

## Security Notes

This repository is public, so sensitive configuration should never be committed.

Do not commit:

```text
.env
.env.local
OAuth client secrets
AUTH_SECRET
MongoDB credentials
Private API keys
```

Environment variables should be configured through the hosting provider for production deployments.

---

## Future Improvements

Potential improvements for the project include:

- Add automated tests
- Add API rate limiting for guestbook endpoints
- Add stronger server-side input validation
- Add guestbook moderation / spam protection
- Add richer project case-study pages
- Improve API error handling and logging
- Add CI checks through GitHub Actions
- Add a dedicated contribution guide if the project becomes open source

---

## Author

**Yash Vishnoi**

Full-Stack Next.js Developer focused on building modern, high-performance web applications.

- Portfolio: https://yashvishnoi.site
- GitHub: https://github.com/YashVishnoi47
- LinkedIn: https://www.linkedin.com/in/yash-vishnoi-654318384/

---

## License

This project is a personal portfolio. Unless a separate license is added to the repository, the source code should not be assumed to be freely reusable.

Copyright © Yash Vishnoi.
