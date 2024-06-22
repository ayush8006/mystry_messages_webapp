## Mystery Message WebApp

### Description

Mystery Message is a web application designed to facilitate secure and engaging communication. Users can sign up, send encrypted messages, and verify their accounts through email verification. The application ensures data integrity and security using MongoDB for storage and Resend for email services.

### Features

- **User Registration and Authentication:** Secure user signup with email verification.
- **Email Verification:** Users receive a verification email upon signup to activate their account.
- **Message Sending:** Users can send messages to other users, which are securely stored in the database.
- **Data Validation:** Ensures data integrity with validation schemas defined using Zod.
- **MongoDB Integration:** Efficiently stores user and message data with robust error handling.

### Technology Stack

- **Backend:** Node.js, Express.js
- **Database:** MongoDB, Mongoose
- **Email Service:** Resend
- **Validation:** Zod
- **Front-end:** React.js (optional based on implementation)

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/ayush8006/mystery-message-webapp.git

## Setting Up and Running the Mystery Message Webapp

## Steps

1. **Navigate to the Project Directory**

    ```sh
    cd mystery-message-webapp
    ```

2. **Install the Dependencies**

    ```sh
    npm install
    ```

3. **Set Up Environment Variables**

    1. Create a `.env` file in the root directory.
    2. Add your MongoDB connection string and Resend API key:

        ```env
        MONGODB_URI=your_mongodb_connection_string
        RESEND_API_KEY=your_resend_api_key
        ```

4. **Running the Application**

    1. Start the MongoDB server.
    2. Run the application:

        ```sh
        npm start
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


## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.


