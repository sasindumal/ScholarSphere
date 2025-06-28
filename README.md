# 🎓 ScholarSphere

A comprehensive scholarship management system that connects students, coordinators, and administrators in a seamless platform for managing scholarship applications, reviews, and payments.

## 🌟 Features

### 👨‍🎓 Student Features
- **📝 Application Management**: Submit and track scholarship applications
- **🎯 Available Scholarships**: Browse and filter available scholarship opportunities
- **📊 Dashboard**: View application status, payments, and statistics
- **📁 Document Upload**: Upload required documents for applications
- **💰 Payment Tracking**: Monitor scholarship payments and history
- **🔔 Notifications**: Real-time updates on application status
- **👤 Profile Management**: Update personal and academic information

### 👨‍💼 Coordinator Features
- **📋 Application Review**: Review and evaluate student applications
- **📈 Reports & Analytics**: Generate comprehensive reports
- **👥 Student Management**: Manage student profiles and information
- **🏆 Scholarship Management**: Oversee scholarship programs
- **📊 Committee Reviews**: Coordinate review processes

### 👨‍💻 Admin Features
- **👥 User Management**: Manage all system users
- **🏢 Provider Management**: Manage scholarship providers
- **⚙️ System Settings**: Configure system parameters
- **💳 Payment Administration**: Oversee payment processes
- **📊 System Analytics**: Comprehensive system overview

## 🛠️ Tech Stack

### Backend
- **🚀 Node.js** - Runtime environment
- **⚡ Express.js** - Web framework
- **🗄️ MySQL** - Database
- **🔧 Prisma** - ORM and database toolkit
- **🔐 JWT** - Authentication
- **🔒 bcryptjs** - Password hashing
- **📁 Multer** - File upload handling

### Frontend
- **⚛️ React.js** - UI library
- **🛣️ React Router** - Client-side routing
- **🎨 CSS3** - Styling
- **📱 Responsive Design** - Mobile-friendly interface

### DevOps
- **🐳 Docker** - Containerization
- **📦 Docker Compose** - Multi-container orchestration

## 📋 Prerequisites

Before running this application, make sure you have the following installed:

- **Node.js** (v16 or higher)
- **npm** or **yarn**
- **Docker** and **Docker Compose**
- **MySQL** (if running locally)

## 🚀 Installation

### Option 1: Using Docker (Recommended)

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/scholarsphere.git
   cd scholarsphere
   ```

2. **Set up environment variables**
   ```bash
   # Create .env file in backend directory
   cp backend/.env.example backend/.env
   # Edit the .env file with your database credentials
   ```

3. **Run with Docker Compose**
   ```bash
   docker-compose up --build
   ```

4. **Access the application**
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:5001
   - Database: localhost:3306

### Option 2: Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/scholarsphere.git
   cd scholarsphere
   ```

2. **Set up the database**
   ```bash
   # Start MySQL service
   # Create database: scholarspheredb
   ```

3. **Install backend dependencies**
   ```bash
   cd backend
   npm install
   ```

4. **Set up environment variables**
   ```bash
   cp .env.example .env
   # Edit .env with your database credentials
   ```

5. **Run database migrations**
   ```bash
   npx prisma migrate dev
   npx prisma generate
   ```

6. **Start the backend server**
   ```bash
   npm start
   ```

7. **Install frontend dependencies**
   ```bash
   cd ../frontend
   npm install
   ```

8. **Start the frontend application**
   ```bash
   npm start
   ```

## 📊 Database Schema

The application uses a comprehensive database schema with the following main entities:

- **👤 Users** - Authentication and role management
- **🎓 Students** - Student profiles and information
- **🏆 Scholarships** - Available scholarship programs
- **📝 Applications** - Student scholarship applications
- **📄 Documents** - Application supporting documents
- **👨‍👩‍👧‍👦 Family Members** - Student family information
- **💰 Payments** - Scholarship payment tracking
- **📋 Reviews** - Application review process
- **🔔 Notifications** - System notifications

## 🔐 Authentication & Authorization

The system implements role-based access control with three user roles:

- **👨‍🎓 Student**: Can submit applications, view scholarships, track payments
- **👨‍💼 Coordinator**: Can review applications, manage students, generate reports
- **👨‍💻 Admin**: Can manage users, providers, system settings

## 📱 API Endpoints

### Authentication
- `POST /api/auth/signup` - User registration
- `POST /api/auth/login` - User login
- `POST /api/auth/forgot-password` - Password reset
- `PUT /api/auth/password` - Update password

### Users
- `GET /api/user/profile` - Get user profile
- `PUT /api/user/profile` - Update user profile

### Scholarships
- `GET /api/scholarships` - Get all scholarships
- `GET /api/scholarships/:id` - Get specific scholarship
- `POST /api/scholarships` - Create scholarship (admin/coordinator)
- `PUT /api/scholarships/:id` - Update scholarship

### Applications
- `GET /api/applications` - Get user applications
- `POST /api/applications` - Submit application
- `GET /api/applications/:id` - Get specific application
- `PUT /api/applications/:id` - Update application

### Payments
- `GET /api/payments/history` - Get payment history
- `GET /api/payments/total` - Get total payments

## 🎨 UI/UX Features

- **📱 Responsive Design**: Works seamlessly on desktop, tablet, and mobile
- **🎨 Modern Interface**: Clean and intuitive user interface
- **⚡ Real-time Updates**: Live notifications and status updates
- **🔍 Advanced Filtering**: Search and filter scholarships and applications
- **📊 Data Visualization**: Charts and statistics for better insights

## 🧪 Testing

```bash
# Run backend tests
cd backend
npm test

# Run frontend tests
cd frontend
npm test
```

## 📦 Deployment

### Production Build

```bash
# Build frontend for production
cd frontend
npm run build

# Start production server
cd backend
npm start
```

### Environment Variables

Create a `.env` file in the backend directory:

```env
DATABASE_URL="mysql://username:password@localhost:3306/scholarspheredb"
JWT_SECRET="your-secret-key"
PORT=5001
```

## 🤝 Contributing

1. **Fork the repository**
2. **Create a feature branch** (`git checkout -b feature/amazing-feature`)
3. **Commit your changes** (`git commit -m 'Add some amazing feature'`)
4. **Push to the branch** (`git push origin feature/amazing-feature`)
5. **Open a Pull Request**

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.


## 📞 Support

If you have any questions or need support, please:

- 📧 Email: support@scholarsphere.com
- 🐛 Report bugs: [GitHub Issues](https://github.com/sasindumal/scholarsphere/issues)
- 💬 Discussions: [GitHub Discussions](https://github.com/sasindumal/scholarsphere/discussions)

## 🔄 Version History

- **v1.0.0** - Initial release with core features
- **v1.1.0** - Added payment tracking and notifications
- **v1.2.0** - Enhanced reporting and analytics
- **v1.3.0** - Mobile responsiveness improvements

---

⭐ **Star this repository if you find it helpful!** 