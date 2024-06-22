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

## Implementation Details

### 1. Define User and Message Schemas (/src/model/User.ts)

**User Schema**
- Fields include `username`, `email`, `password`, `verifyCode`, and an array of `messages`.
- Uses Mongoose Schema to enforce data structure and validations.

**Message Schema**
- Fields include `sender`, `receiver`, `content`, and `timestamp`.
- Uses Mongoose Schema to enforce data structure and validations.

### 2. MongoDB Connection (/src/lib/dbConnect.ts)

- Establishes a connection to MongoDB using Mongoose.
- Includes error handling for database connection failures.

### 3. Validation Schemas (/src/schema)

- Defined various validation schemas using Zod.
- Schemas include validation for user data such as username, email, password, and custom validations.

### 4. MongoDB Connection (/src/lib/dbConnect.ts)

- Re-established the connection to MongoDB using Mongoose.
- Included error handling for database connection failures.

### 5. Email Verification for Signup

**Setup Email Service with Resend**
- Installed and configured the Resend package to handle email sending.
- Created a utility function to send verification emails to users.

**Handle User Signup and Email Verification**
- Modified the signup endpoint to include email verification logic.
- Checks if the user already exists by email.
  - If the user exists and is verified, returns `success: false`.
  - If the user exists but is not verified, updates the user's verification code and resends the verification email.
  - If the user does not exist, creates a new user with a verification code and sends a verification email.

**Save User Information**
- Saves the new or updated user information in the MongoDB database using the Mongoose model.


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


