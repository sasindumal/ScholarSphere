const { PrismaClient, Role, Gender, ApplicationStatus, VerificationStatus, ReviewStatus, PaymentStatus } = require('../src/generated/prisma');
const { faker } = require('@faker-js/faker');
const bcrypt = require('bcryptjs');

const prisma = new PrismaClient();

const sriLankanFirstNames = ['Amara', 'Bhanu', 'Chamari', 'Dasun', 'Eshara', 'Geeth', 'Hiruni', 'Indika', 'Janith', 'Kavya'];
const sriLankanLastNames = ['Perera', 'Silva', 'Fernando', 'Bandara', 'Jayasinghe', 'Wickramasinghe', 'Herath', 'Karunaratne', 'Rajapaksa', 'Dias'];
const sriLankanCities = ['Colombo', 'Kandy', 'Galle', 'Jaffna', 'Matara', 'Negombo', 'Anuradhapura', 'Polonnaruwa', 'Trincomalee', 'Batticaloa'];
const sriLankanSchools = ['Royal College', 'Ananda College', 'Nalanda College', 'Visakha Vidyalaya', 'D.S. Senanayake College', 'Trinity College', 'St. Thomas\' College', 'Mahinda College'];

async function main() {
  console.log('Start seeding ...');

  // --- Clean up existing data ---
  // The order is important to avoid foreign key constraint errors
  await prisma.notification.deleteMany();
  await prisma.siblingEducation.deleteMany();
  await prisma.payment.deleteMany();
  await prisma.committeeReview.deleteMany();
  await prisma.otherFunding.deleteMany();
  await prisma.familyMember.deleteMany();
  await prisma.document.deleteMany();
  await prisma.application.deleteMany();
  await prisma.eligibilityCriteria.deleteMany();
  await prisma.scholarship.deleteMany();
  await prisma.scholarshipProvider.deleteMany();
  await prisma.student.deleteMany();
  await prisma.user.deleteMany();

  console.log('Database cleaned.');

  // --- Create Users ---
  const users = [];
  const hashedPassword = await bcrypt.hash('password123', 10);
  for (let i = 0; i < 10; i++) { // Create more users for variety
    const firstName = faker.helpers.arrayElement(sriLankanFirstNames);
    const lastName = faker.helpers.arrayElement(sriLankanLastNames);
    const user = await prisma.user.create({
      data: {
        first_name: firstName,
        last_name: lastName,
        email: faker.internet.email({ firstName, lastName }),
        username: faker.internet.userName({ firstName, lastName }),
        password: hashedPassword,
        role: i < 7 ? 'student' : (i < 9 ? 'coordinator' : 'admin'), // 7 students, 2 coordinators, 1 admin
      },
    });
    users.push(user);
  }
  console.log(`Created ${users.length} users.`);

  // --- Create Students ---
  const students = [];
  const studentUsers = users.filter(u => u.role === 'student');
  for (const user of studentUsers) {
    const student = await prisma.student.create({
      data: {
        user_id: user.user_id,
        full_name: `${user.first_name} ${user.last_name}`,
        registration_no: `UGC/${faker.string.alphanumeric(3).toUpperCase()}/${faker.number.int({ min: 1000, max: 9999 })}`,
        date_of_birth: faker.date.birthdate({ min: 18, max: 25, mode: 'age' }),
        permanent_address: `${faker.location.streetAddress()}, ${faker.helpers.arrayElement(sriLankanCities)}`,
        admission_date: faker.date.past({ years: 4 }),
        year_of_study: faker.number.int({ min: 1, max: 4 }),
        gender: faker.helpers.arrayElement(['male', 'female']),
        phone_number: faker.phone.number('+94 7# ### ####'),
        email: user.email,
        school_name: faker.helpers.arrayElement(sriLankanSchools),
        unmarried_siblings: faker.number.int({ min: 0, max: 4 }),
      },
    });
    students.push(student);
  }
  console.log(`Created ${students.length} students.`);

  // --- Create Scholarship Providers ---
  const providers = [];
  for (let i = 0; i < 5; i++) {
    const provider = await prisma.scholarshipProvider.create({
      data: {
        name: `${faker.company.name()} Foundation`,
        contact_person: `${faker.helpers.arrayElement(sriLankanFirstNames)} ${faker.helpers.arrayElement(sriLankanLastNames)}`,
        phone: faker.phone.number('+94 ## ### ####'),
        email: faker.internet.email(),
        address: `${faker.location.streetAddress()}, ${faker.helpers.arrayElement(sriLankanCities)}`,
      },
    });
    providers.push(provider);
  }
  console.log(`Created ${providers.length} scholarship providers.`);

  // --- Create Scholarships ---
  const scholarships = [];
  for (let i = 0; i < 5; i++) {
    const scholarship = await prisma.scholarship.create({
      data: {
        name: `${faker.word.adjective()} ${faker.word.noun()} Scholarship`,
        description: faker.lorem.paragraph(),
        amount: faker.finance.amount({ min: 50000, max: 200000, dec: 2 }),
        no_of_students: faker.number.int({ min: 1, max: 10 }),
        application_deadline: faker.date.future({ years: 1 }),
        start_date: faker.date.future({ years: 1 }),
        end_date: faker.date.future({ years: 2 }),
        provider_id: faker.helpers.arrayElement(providers).provider_id,
        is_active: true,
      },
    });
    scholarships.push(scholarship);
  }
  console.log(`Created ${scholarships.length} scholarships.`);

  // --- Create Eligibility Criteria ---
  for (const scholarship of scholarships) {
    await prisma.eligibilityCriteria.create({
      data: {
        scholarship_id: scholarship.scholarship_id,
        criteria_name: 'Minimum GPA',
        criteria_description: 'The minimum Grade Point Average required.',
        min_value: 3.0,
        max_value: 4.0,
        weight: 40,
      },
    });
    await prisma.eligibilityCriteria.create({
      data: {
        scholarship_id: scholarship.scholarship_id,
        criteria_name: 'Family Annual Income',
        criteria_description: 'Maximum annual family income.',
        min_value: 0,
        max_value: 500000,
        weight: 60,
      },
    });
  }
  console.log(`Created eligibility criteria for all scholarships.`);

  // --- Create Applications ---
  const applications = [];
  for (let i = 0; i < 5; i++) {
    const application = await prisma.application.create({
      data: {
        student_id: faker.helpers.arrayElement(students).student_id,
        scholarship_id: faker.helpers.arrayElement(scholarships).scholarship_id,
        submission_date: faker.date.past({ years: 1 }),
        status: faker.helpers.arrayElement(['pending', 'reviewed', 'approved', 'rejected']),
      },
    });
    applications.push(application);
  }
  console.log(`Created ${applications.length} applications.`);

  // --- Create Documents ---
  for (const application of applications) {
    await prisma.document.create({
      data: {
        application_id: application.application_id,
        document_type: 'Birth Certificate',
        file_name: faker.system.fileName({ extension: 'pdf' }),
        file_path: faker.system.filePath(),
        upload_date: application.submission_date,
        verification_status: faker.helpers.arrayElement(['pending', 'verified', 'rejected']),
      },
    });
  }
  console.log(`Created documents for all applications.`);

  // --- Create Family Members ---
  const familyMembers = [];
  for (const student of students) {
    const father = await prisma.familyMember.create({
      data: {
        student_id: student.student_id,
        full_name: `${faker.person.firstName('male')} ${faker.helpers.arrayElement(sriLankanLastNames)}`,
        age: faker.number.int({ min: 40, max: 60 }),
        relationship: 'Father',
        designation: faker.person.jobTitle(),
        annual_income: faker.finance.amount({ min: 300000, max: 1500000, dec: 2 }),
        workplace: faker.company.name(),
        phone_number: faker.phone.number('+94 7# ### ####'),
      }
    });
    familyMembers.push(father);
  }
  console.log(`Created ${familyMembers.length} family members.`);

  // --- Create Notifications ---
  for (const user of users) {
    await prisma.notification.create({
      data: {
        user_id: user.user_id,
        message: `Welcome to ScholarSphere, ${user.first_name}!`,
        is_read: false,
      },
    });
  }
  console.log(`Created welcome notifications for all users.`);

  // --- Update Admin and Coordinator Passwords ---
  const adminUser = await prisma.user.create({
    data: {
      first_name: 'Arjuna',
      last_name: 'Wickramasinghe',
      email: 'admin@eng.jfn.ac.lk',
      username: 'admin',
      password: '$2b$10$ypKxRFiqKMFynVk/wBiT5OyfoXpV2.QD0gGlbSom6TzjIhvxBtJAq', // password: 12345678
      role: Role.admin,
    },
  });

  const coordinatorUser = await prisma.user.create({
    data: {
      first_name: 'Priya',
      last_name: 'Fernando',
      email: 'coordinator@eng.jfn.ac.lk',
      username: 'coordinator',
      password: '$2b$10$ypKxRFiqKMFynVk/wBiT5OyfoXpV2.QD0gGlbSom6TzjIhvxBtJAq', // password: 12345678
      role: Role.coordinator,
    },
  });

  console.log('Seeding finished.');
}

main()
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
