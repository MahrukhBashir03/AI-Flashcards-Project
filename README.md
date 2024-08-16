# Flashcard SaaS

This project is a simple Flashcard SaaS application built using Next.js, Clerk for authentication, Firebase for data storage, OpenAI for content generation, and Stripe for payment processing.

## Features

- **Next.js**: A React framework used for building the front-end of the application.
- **Clerk**: Handles user authentication and account management.
- **Firebase**: Provides the back-end services like database and hosting.
- **OpenAI**: Generates content for the flashcards.
- **Stripe**: Manages payments and subscriptions.

## Getting Started

### Prerequisites

- Node.js (version 14.x or later)
- npm (version 6.x or later)
- A Clerk account for authentication
- A Firebase project for database services
- An OpenAI API key for generating flashcard content
- A Stripe account for handling payments

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/your-repo-name.git
   cd your-repo-name
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:

   Create a `.env.local` file in the root of your project and add the following:
   ```bash
   NEXT_PUBLIC_API_KEY=your-openai-api-key
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) with your browser to see the application in action.

## Project Structure

- `pages/`: Contains the main pages of the application.
- `components/`: Reusable components used across the application.
- `utils/`: Utility functions and configurations.
- `next.config.js`: Configuration file for Next.js.

## Contributing

Feel free to fork this project and submit pull requests. Contributions are welcome!

## License

This project is open-source and available under the MIT License.
