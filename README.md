# Notetaker

This is a [T3 Stack](https://create.t3.gg/) project bootstrapped with `create-t3-app`. Based on this [video](https://www.youtube.com/watch?v=J1gzN1SAhyM)

I used Supabase as the database(postgreSQL) and registered two GitHub OAuth applications (for local and production).

## Envs

- DATABASE_URL => A supabase database url
- NEXTAUTH_SECRET => A random string (only needed for "production" environment)
- NEXTAUTH_URL => http://localhost:3000
- GITHUB_CLIENT_ID => You get it after registering an OAuth application in your GitHub account
- GITHUB_CLIENT_SECRET => You get it after registering an OAuth application in your GitHub account

## Stack

- [Next.js](https://nextjs.org)
- [NextAuth.js](https://next-auth.js.org)
- [Prisma](https://prisma.io)
- [Tailwind CSS](https://tailwindcss.com)
- [tRPC](https://trpc.io)
