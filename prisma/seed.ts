import { PrismaClient } from '../src/generated/prisma';
import { hashPassword } from '../src/lib/auth';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Starting database seeding...');

  // Create a test user
  const hashedPassword = await hashPassword('password123');
  
  const testUser = await prisma.user.upsert({
    where: { email: 'test@eng.jfn.ac.lk' },
    update: {},
    create: {
      first_name: 'Test',
      last_name: 'User',
      username: 'testuser',
      email: 'test@eng.jfn.ac.lk',
      password: hashedPassword,
      role: 'student',
    },
  });

  // Create a scholarship provider
  const provider = await prisma.scholarshipProvider.create({
    data: {
      name: 'University Engineering Department',
      contact_person: 'Dr. John Smith',
      phone: '+94-11-123-4567',
      email: 'info@university.edu',
      address: 'Faculty of Engineering, University of Jaffna',
    },
  });

  // Create some scholarships
  const scholarship1 = await prisma.scholarship.create({
    data: {
      name: 'Engineering Excellence Scholarship',
      description: 'Awarded to outstanding engineering students with exceptional academic performance and leadership qualities.',
      amount: 50000.00,
      no_of_students: 5,
      application_deadline: new Date('2024-12-31'),
      start_date: new Date('2024-01-01'),
      end_date: new Date('2024-12-31'),
      provider_id: provider.provider_id,
      is_active: true,
    },
  });

  const scholarship2 = await prisma.scholarship.create({
    data: {
      name: 'Academic Merit Award',
      description: 'For students with outstanding academic achievements and research potential.',
      amount: 25000.00,
      no_of_students: 10,
      application_deadline: new Date('2024-11-30'),
      start_date: new Date('2024-01-01'),
      end_date: new Date('2024-12-31'),
      provider_id: provider.provider_id,
      is_active: true,
    },
  });

  // Create eligibility criteria
  await prisma.eligibilityCriteria.create({
    data: {
      scholarship_id: scholarship1.scholarship_id,
      criteria_name: 'GPA Requirement',
      criteria_description: 'Minimum GPA of 3.5 out of 4.0',
      min_value: 3.5,
      max_value: 4.0,
      weight: 40,
    },
  });

  await prisma.eligibilityCriteria.create({
    data: {
      scholarship_id: scholarship1.scholarship_id,
      criteria_name: 'Leadership Experience',
      criteria_description: 'Demonstrated leadership in student organizations or community service',
      min_value: 0,
      max_value: 100,
      weight: 30,
    },
  });

  console.log('✅ Database seeded successfully!');
  console.log('📧 Test user email: test@eng.jfn.ac.lk');
  console.log('🔑 Test user password: password123');
}

main()
  .catch((e) => {
    console.error('❌ Error seeding database:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  }); 