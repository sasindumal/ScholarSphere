-- CreateTable
CREATE TABLE `User` (
    `user_id` INTEGER NOT NULL AUTO_INCREMENT,
    `first_name` VARCHAR(100) NOT NULL,
    `last_name` VARCHAR(100) NOT NULL,
    `email` VARCHAR(100) NOT NULL,
    `username` VARCHAR(50) NOT NULL,
    `password` VARCHAR(255) NOT NULL,
    `role` ENUM('student', 'coordinator', 'admin') NOT NULL DEFAULT 'student',
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `User_email_key`(`email`),
    PRIMARY KEY (`user_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Student` (
    `student_id` INTEGER NOT NULL AUTO_INCREMENT,
    `user_id` INTEGER NOT NULL,
    `full_name` VARCHAR(150) NOT NULL,
    `registration_no` VARCHAR(50) NOT NULL,
    `date_of_birth` DATETIME(3) NOT NULL,
    `permanent_address` VARCHAR(191) NOT NULL,
    `admission_date` DATETIME(3) NOT NULL,
    `year_of_study` INTEGER NOT NULL,
    `gender` ENUM('male', 'female', 'other') NOT NULL,
    `phone_number` VARCHAR(20) NOT NULL,
    `email` VARCHAR(100) NOT NULL,
    `school_name` VARCHAR(150) NOT NULL,
    `unmarried_siblings` INTEGER NOT NULL,

    UNIQUE INDEX `Student_user_id_key`(`user_id`),
    UNIQUE INDEX `Student_registration_no_key`(`registration_no`),
    PRIMARY KEY (`student_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ScholarshipProvider` (
    `provider_id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(150) NOT NULL,
    `contact_person` VARCHAR(100) NOT NULL,
    `phone` VARCHAR(20) NOT NULL,
    `email` VARCHAR(100) NOT NULL,
    `address` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`provider_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Scholarship` (
    `scholarship_id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(150) NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `amount` DECIMAL(10, 2) NOT NULL,
    `no_of_students` INTEGER NOT NULL,
    `application_deadline` DATETIME(3) NOT NULL,
    `start_date` DATETIME(3) NOT NULL,
    `end_date` DATETIME(3) NOT NULL,
    `provider_id` INTEGER NOT NULL,
    `is_active` BOOLEAN NOT NULL DEFAULT true,

    PRIMARY KEY (`scholarship_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `EligibilityCriteria` (
    `criteria_id` INTEGER NOT NULL AUTO_INCREMENT,
    `scholarship_id` INTEGER NOT NULL,
    `criteria_name` VARCHAR(100) NOT NULL,
    `criteria_description` VARCHAR(191) NOT NULL,
    `min_value` DECIMAL(10, 2) NOT NULL,
    `max_value` DECIMAL(10, 2) NOT NULL,
    `weight` INTEGER NOT NULL,

    PRIMARY KEY (`criteria_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Application` (
    `application_id` INTEGER NOT NULL AUTO_INCREMENT,
    `student_id` INTEGER NOT NULL,
    `scholarship_id` INTEGER NOT NULL,
    `submission_date` DATETIME(3) NOT NULL,
    `status` ENUM('pending', 'reviewed', 'approved', 'rejected') NOT NULL DEFAULT 'pending',
    `total_points` INTEGER NULL,
    `reviewer_comments` VARCHAR(191) NULL,
    `review_date` DATETIME(3) NULL,

    PRIMARY KEY (`application_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Document` (
    `document_id` INTEGER NOT NULL AUTO_INCREMENT,
    `application_id` INTEGER NOT NULL,
    `document_type` VARCHAR(50) NOT NULL,
    `file_name` VARCHAR(255) NOT NULL,
    `file_path` VARCHAR(191) NOT NULL,
    `upload_date` DATETIME(3) NOT NULL,
    `verification_status` ENUM('pending', 'verified', 'rejected') NOT NULL DEFAULT 'pending',

    PRIMARY KEY (`document_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `FamilyMember` (
    `member_id` INTEGER NOT NULL AUTO_INCREMENT,
    `student_id` INTEGER NOT NULL,
    `full_name` VARCHAR(150) NOT NULL,
    `age` INTEGER NOT NULL,
    `relationship` VARCHAR(50) NOT NULL,
    `designation` VARCHAR(100) NOT NULL,
    `annual_income` DECIMAL(10, 2) NOT NULL,
    `workplace` VARCHAR(150) NOT NULL,
    `phone_number` VARCHAR(20) NOT NULL,

    PRIMARY KEY (`member_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `OtherFunding` (
    `funding_id` INTEGER NOT NULL AUTO_INCREMENT,
    `student_id` INTEGER NOT NULL,
    `funding_name` VARCHAR(100) NOT NULL,
    `organization` VARCHAR(150) NOT NULL,
    `annual_amount` DECIMAL(10, 2) NOT NULL,
    `start_date` DATETIME(3) NOT NULL,
    `end_date` DATETIME(3) NOT NULL,

    PRIMARY KEY (`funding_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `CommitteeReview` (
    `review_id` INTEGER NOT NULL AUTO_INCREMENT,
    `application_id` INTEGER NOT NULL,
    `reviewer_id` INTEGER NOT NULL,
    `review_date` DATETIME(3) NOT NULL,
    `points_awarded` INTEGER NOT NULL,
    `comments` VARCHAR(191) NOT NULL,
    `status` ENUM('read', 'unread') NOT NULL DEFAULT 'unread',
    `is_read` BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY (`review_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Payment` (
    `payment_id` INTEGER NOT NULL AUTO_INCREMENT,
    `application_id` INTEGER NOT NULL,
    `amount` DECIMAL(10, 2) NOT NULL,
    `payment_date` DATETIME(3) NOT NULL,
    `payment_method` VARCHAR(50) NOT NULL,
    `transaction_id` VARCHAR(100) NOT NULL,
    `status` ENUM('pending', 'completed', 'failed') NOT NULL DEFAULT 'pending',

    PRIMARY KEY (`payment_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `SiblingEducation` (
    `education_id` INTEGER NOT NULL AUTO_INCREMENT,
    `student_id` INTEGER NOT NULL,
    `member_id` INTEGER NOT NULL,
    `institution` VARCHAR(150) NOT NULL,
    `year_grade` VARCHAR(50) NOT NULL,
    `registration_course` VARCHAR(100) NOT NULL,

    PRIMARY KEY (`education_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Notification` (
    `notification_id` INTEGER NOT NULL AUTO_INCREMENT,
    `user_id` INTEGER NOT NULL,
    `message` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `is_read` BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY (`notification_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Setting` (
    `key` VARCHAR(191) NOT NULL,
    `value` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`key`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Student` ADD CONSTRAINT `Student_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `User`(`user_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Scholarship` ADD CONSTRAINT `Scholarship_provider_id_fkey` FOREIGN KEY (`provider_id`) REFERENCES `ScholarshipProvider`(`provider_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `EligibilityCriteria` ADD CONSTRAINT `EligibilityCriteria_scholarship_id_fkey` FOREIGN KEY (`scholarship_id`) REFERENCES `Scholarship`(`scholarship_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Application` ADD CONSTRAINT `Application_student_id_fkey` FOREIGN KEY (`student_id`) REFERENCES `Student`(`student_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Application` ADD CONSTRAINT `Application_scholarship_id_fkey` FOREIGN KEY (`scholarship_id`) REFERENCES `Scholarship`(`scholarship_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Document` ADD CONSTRAINT `Document_application_id_fkey` FOREIGN KEY (`application_id`) REFERENCES `Application`(`application_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `FamilyMember` ADD CONSTRAINT `FamilyMember_student_id_fkey` FOREIGN KEY (`student_id`) REFERENCES `Student`(`student_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `OtherFunding` ADD CONSTRAINT `OtherFunding_student_id_fkey` FOREIGN KEY (`student_id`) REFERENCES `Student`(`student_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `CommitteeReview` ADD CONSTRAINT `CommitteeReview_application_id_fkey` FOREIGN KEY (`application_id`) REFERENCES `Application`(`application_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `CommitteeReview` ADD CONSTRAINT `CommitteeReview_reviewer_id_fkey` FOREIGN KEY (`reviewer_id`) REFERENCES `User`(`user_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Payment` ADD CONSTRAINT `Payment_application_id_fkey` FOREIGN KEY (`application_id`) REFERENCES `Application`(`application_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `SiblingEducation` ADD CONSTRAINT `SiblingEducation_student_id_fkey` FOREIGN KEY (`student_id`) REFERENCES `Student`(`student_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `SiblingEducation` ADD CONSTRAINT `SiblingEducation_member_id_fkey` FOREIGN KEY (`member_id`) REFERENCES `FamilyMember`(`member_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Notification` ADD CONSTRAINT `Notification_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `User`(`user_id`) ON DELETE RESTRICT ON UPDATE CASCADE;
