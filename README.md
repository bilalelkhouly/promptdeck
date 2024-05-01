# PromptDeck

## Description

PromptDeck is a website where users can share and discover useful AI prompts that they have used before. The platform encourages collaboration and sharing among AI enthusiasts to enhance productivity and creativity in AI interactions.

## Features

- **User Authentication**: Secure sign-in through Google using NextAuth.
- **Post Management**: Users can add, delete, and edit their posts.
- **User Profiles**: Personal profile pages display all of a user's posts, and users can view profiles of others to explore their posts.
- **Search Functionality**: Robust search feature allowing users to search for posts by tags, usernames, or specific text.
- **Copy to Clipboard**: Users can easily copy prompts to their clipboard for immediate use.

## Installation

To set up PromptDeck locally, follow these steps:

1. Clone the repository to your local machine.
2. Install the dependencies:
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```
3. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Technologies

- **Frontend**: React and Next.js
- **Styling**: Tailwind CSS
- **Backend**: MongoDB
- **Authentication**: NextAuth for handling Google sign-in
