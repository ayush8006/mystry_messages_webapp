This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```


## Steps Completed
1. Implemented MongoDB Connection (/src/lib/dbConnect.ts)
Added dbConnect.ts file to establish a connection to MongoDB using Mongoose.
Included error handling for database connection failures.
2. Created Validation Schemas (/src/schema)
Defined various validation schemas using Zod in the /src/schema directory.
Schemas include validation for user data such as username, email, password, and custom validations.
3. Defined User Model (/src/model/User.ts)
Created User.ts file defining the Mongoose model for users.
Defined fields such as username, email, password, verify code, and message array.
Used Mongoose Schema to enforce data structure and validations defined in Zod schemas.
4. Implemented MongoDB Connection (/src/lib/dbConnect.ts)
Added dbConnect.ts file to establish a connection to MongoDB using Mongoose.
Included error handling for database connection failures.



Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.


