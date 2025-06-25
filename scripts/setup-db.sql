-- ScholarSphere Database Setup Script
-- Run this script as MySQL root user or a user with CREATE DATABASE privileges

-- Create the database
CREATE DATABASE IF NOT EXISTS scholarsphere;

-- Create a dedicated user for the application
CREATE USER IF NOT EXISTS 'scholarsphere_user'@'localhost' IDENTIFIED BY 'your_secure_password_here';

-- Grant privileges to the user
GRANT ALL PRIVILEGES ON scholarsphere.* TO 'scholarsphere_user'@'localhost';

-- Grant additional privileges for migrations
GRANT CREATE, ALTER, DROP, INDEX ON scholarsphere.* TO 'scholarsphere_user'@'localhost';

-- Flush privileges to apply changes
FLUSH PRIVILEGES;

-- Show the created database and user
SHOW DATABASES LIKE 'scholarsphere';
SELECT User, Host FROM mysql.user WHERE User = 'scholarsphere_user';

-- Instructions for next steps:
-- 1. Update your .env file with the correct DATABASE_URL
-- 2. Run: npx prisma migrate dev
-- 3. Run: npx prisma generate 