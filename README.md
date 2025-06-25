# ScholarSphere

A comprehensive scholarship management system built with Next.js, Prisma, and MySQL.

## Features

- 🔐 **Secure Authentication**: JWT-based authentication with bcrypt password hashing
- 👥 **User Management**: Student, Coordinator, and Admin roles
- 📚 **Scholarship Management**: Browse and apply for scholarships
- 📊 **Dashboard**: Real-time statistics and activity tracking
- 🔒 **Route Protection**: Middleware-based authentication guards
- 📱 **Responsive Design**: Modern UI with Tailwind CSS

## Tech Stack

- **Frontend**: Next.js 15, React 18, TypeScript
- **Styling**: Tailwind CSS, shadcn/ui components
- **Database**: MySQL with Prisma ORM
- **Authentication**: JWT tokens with HTTP-only cookies
- **State Management**: Zustand
- **Form Handling**: React Hook Form with Zod validation

## Prerequisites

- Node.js 18+ 
- MySQL 8.0+
- npm or yarn

## Setup Instructions

### 1. Clone the Repository

```bash
git clone <repository-url>
cd ScholarSphere
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Environment Configuration

Copy the environment template and configure your variables:

```bash
cp env.example .env
```

Update the `.env` file with your configuration:

```env
# Database
DATABASE_URL="mysql://username:password@localhost:3306/scholarsphere"

# JWT Secret (generate a secure random string)
JWT_SECRET="your-super-secret-jwt-key-here"

# Next.js
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-nextauth-secret-here"

# Environment
NODE_ENV="development"
```

### 4. Database Setup

#### Create MySQL Database

```sql
CREATE DATABASE scholarsphere;
CREATE USER 'scholarsphere_user'@'localhost' IDENTIFIED BY 'your_password';
GRANT ALL PRIVILEGES ON scholarsphere.* TO 'scholarsphere_user'@'localhost';
FLUSH PRIVILEGES;
```

#### Run Database Migrations

```bash
# Generate Prisma client
npx prisma generate

# Run migrations
npx prisma migrate dev

# (Optional) Seed the database
npx prisma db seed
```

### 5. Start Development Server

```bash
npm run dev
```

The application will be available at `http://localhost:3000`

## API Endpoints

### Authentication

- `POST /api/auth/signup` - User registration
- `POST /api/auth/login` - User login
- `POST /api/auth/logout` - User logout
- `GET /api/auth/me` - Get current user info

### Request/Response Examples

#### Signup
```json
POST /api/auth/signup
{
  "firstName": "John",
  "lastName": "Doe",
  "username": "johndoe",
  "email": "20XXeXXX@eng.jfn.ac.lk",
  "password": "securepassword123"
}
```

#### Login
```json
POST /api/auth/login
{
  "email": "20XXeXXX@eng.jfn.ac.lk",
  "password": "securepassword123"
}
```

## Database Schema

The application uses a comprehensive database schema with the following main entities:

- **Users**: Authentication and user management
- **Students**: Student-specific information
- **Scholarships**: Available scholarship opportunities
- **Applications**: Student scholarship applications
- **Documents**: Application supporting documents
- **Payments**: Scholarship payment tracking
- **Reviews**: Application review process

## Authentication Flow

1. **Registration**: Users sign up with university email
2. **Login**: JWT token stored in HTTP-only cookie
3. **Route Protection**: Middleware validates tokens
4. **Logout**: Clears authentication cookie

## Security Features

- Password hashing with bcrypt (12 rounds)
- JWT tokens with expiration
- HTTP-only cookies for token storage
- CSRF protection
- Input validation with Zod
- SQL injection prevention with Prisma

## Development

### Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run typecheck    # Run TypeScript check
```

### Database Commands

```bash
npx prisma generate  # Generate Prisma client
npx prisma migrate dev  # Run migrations
npx prisma studio    # Open database GUI
npx prisma db push   # Push schema changes
```

## Deployment

### Environment Variables

Ensure all environment variables are set in production:

- `DATABASE_URL`: Production MySQL connection string
- `JWT_SECRET`: Strong secret key for JWT signing
- `NODE_ENV`: Set to "production"

### Database Migration

```bash
npx prisma migrate deploy
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Support

For support and questions, please open an issue in the repository.
