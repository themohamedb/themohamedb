# Nasiye Ticketing System (Skeleton)

This repository contains a minimal skeleton for a web and backend ticketing system for **Nasiye**. It is not production ready but outlines the general structure.

## Structure
- `server/` - Node.js/Express API skeleton
- `web/` - Next.js front‑end skeleton with Tailwind CSS

## Setup

Due to network restrictions in this environment, dependencies cannot be installed automatically. To use this project locally:

```bash
cd server && npm install
cd ../web && npm install
```

Then run the development servers:

```bash
cd server && npm start
cd web && npm run dev
```

## Mobile App
A mobile client can be built with React Native or SwiftUI. This repository does not include a mobile implementation.

## Notes
- Payment integration, authentication, and complete features need to be implemented.
- Use environment variables to configure secrets and API keys.
