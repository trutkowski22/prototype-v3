import { compare } from 'bcryptjs';

export async function verifyPassword(password, hashedPassword) {
  try {
    return await compare(password, hashedPassword);
  } catch (error) {
    console.error('Password verification failed:', error);
    return false;
  }
}
