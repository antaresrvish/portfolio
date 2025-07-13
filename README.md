# Portfolio Project

This is a [Storyblok](https://www.storyblok.com/) CMS-based portfolio project built with [Next.js](https://nextjs.org). It features an extensible architecture that is open to adding new components and further development.

## Setup

### 1. Create Storyblok Space
- Login to your [Storyblok](https://www.storyblok.com/) account
- Create a new space

### 2. Environment Configuration
Copy the information from `.env.example` to your `.env` file:

```bash
cp .env.example .env
```

### 3. Storyblok CLI Installation
```bash
npm install -g storyblok
storyblok login
```

### 4. Push Components to Storyblok
After login:
```bash
npm run storyblok:push
```

This will push components and presets to your space.

### 5. Start Development Server
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the project.

### 6. Build for Production
To build the application for production:

```bash
npm run build
# or
yarn build
# or
pnpm build
# or
bun build
```

## Usage

You can make changes by adding components and selecting their presets in Storyblok CMS. The project will update in real-time.

## Features

- Storyblok CMS integration
- Next.js based
- TypeScript support
- Tailwind CSS
- Component-based architecture