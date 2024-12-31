# IEEE Student Branch PIET Technical Blog Platform

A modern technical blog platform built for IEEE Student Branch at Poornima Institute of Engineering & Technology. The platform enables students to share technical knowledge, learn from peers, and grow together in a collaborative environment.

![IEEE PIET Blog Platform](https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=1200&h=400)

## Features

- 📝 Rich Text Editor with support for:
  - Markdown shortcuts
  - Code syntax highlighting
  - Mathematical equations
  - Tables and lists
- 🤖 AI-powered writing suggestions
- 🔍 Plagiarism detection
- 🏆 Gamification with badges and leaderboard
- 👥 User roles (Admin, Author)
- 🎨 Dark/Light theme support
- 📱 Responsive design

## Database Structure

### Profiles Table
User profiles and authentication data
```sql
CREATE TABLE profiles (
  id uuid PRIMARY KEY REFERENCES auth.users ON DELETE CASCADE,
  full_name text,
  avatar_url text,
  points integer DEFAULT 0,
  role text DEFAULT 'user',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);
```

### Articles Table
Blog posts and their metadata
```sql
CREATE TABLE articles (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  content text NOT NULL,
  excerpt text,
  author_id uuid REFERENCES profiles(id) ON DELETE CASCADE NOT NULL,
  status text DEFAULT 'draft' CHECK (status IN ('draft', 'published', 'archived')),
  plagiarism_score float,
  published_at timestamptz,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);
```

### Article Tags Table
Many-to-many relationship between articles and tags
```sql
CREATE TABLE article_tags (
  article_id uuid REFERENCES articles(id) ON DELETE CASCADE,
  tag text NOT NULL,
  PRIMARY KEY (article_id, tag)
);
```

### Badges Table
Achievement badges that can be earned by users
```sql
CREATE TABLE badges (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text UNIQUE NOT NULL,
  description text,
  image_url text,
  points integer DEFAULT 0,
  criteria jsonb,
  created_at timestamptz DEFAULT now()
);
```

### User Badges Table
Tracks which badges have been awarded to users
```sql
CREATE TABLE user_badges (
  user_id uuid REFERENCES profiles(id) ON DELETE CASCADE,
  badge_id uuid REFERENCES badges(id) ON DELETE CASCADE,
  awarded_at timestamptz DEFAULT now(),
  PRIMARY KEY (user_id, badge_id)
);
```

### Plagiarism Reports Table
Stores results of plagiarism checks for articles
```sql
CREATE TABLE plagiarism_reports (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  article_id uuid REFERENCES articles(id) ON DELETE CASCADE,
  similarity_score float NOT NULL,
  report_details jsonb,
  status text CHECK (status IN ('pending', 'approved', 'rejected')) DEFAULT 'pending',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);
```

## Tech Stack

- **Frontend**: Next.js 13 (App Router)
- **UI Components**: shadcn/ui + Tailwind CSS
- **Database**: Supabase (PostgreSQL)
- **Authentication**: Supabase Auth
- **Editor**: Lexical
- **AI Integration**: OpenAI API
- **Icons**: Lucide React

## Prerequisites

- Node.js 18+ and npm
- Supabase account
- OpenAI API key

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/ieee-piet/ieee-piet-blog.git
   cd ieee-piet-blog
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   ```bash
   cp .env.example .env
   ```
   Update the following variables in `.env`:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `NEXT_PUBLIC_OPENAI_API_KEY`

4. Set up Supabase:
   - Create a new Supabase project
   - Run the migrations from `supabase/migrations/` folder
   - Enable Email/Password authentication
   - Configure RLS policies (already included in migrations)

5. Start the development server:
   ```bash
   npm run dev
   ```

## Database Schema

The project uses the following main tables:

- `profiles`: User profiles and roles
- `articles`: Blog posts and their metadata
- `badges`: Achievement badges
- `user_badges`: Badge assignments
- `plagiarism_reports`: Article plagiarism check results

## Authentication

The platform uses Supabase Authentication with:
- Email/Password sign up
- Automatic profile creation
- Role-based access control

## Development Guidelines

1. **Code Style**
   - Use TypeScript for type safety
   - Follow the Next.js App Router patterns
   - Keep components small and focused
   - Use custom hooks for shared logic

2. **State Management**
   - Use React hooks for local state
   - Leverage Supabase real-time subscriptions
   - Implement optimistic updates

3. **Security**
   - Always use RLS policies
   - Validate user permissions
   - Sanitize user input

## Deployment

1. Build the project:
   ```bash
   npm run build
   ```

2. Deploy to your preferred platform:
   - Vercel (recommended)
   - Netlify
   - Self-hosted

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- IEEE Student Branch PIET
- Poornima Institute of Engineering & Technology
- All contributors and maintainers

## Support

For support, email piet.ieeechapter@poornima.org or join our Discord server.
