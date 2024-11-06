// app/actions/auth.ts
'use server'

import { cookies } from 'next/headers';
import { db } from '@/lib/db';
import { hashPassword, verifyPassword } from '@/lib/auth';

export async function signUp(formData: FormData) {
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;

  if (!email || !password) {
    return { error: 'Email and password are required' };
  }

  const existingUser = await db.getUserByEmail(email);
  if (existingUser) {
    return { error: 'User already exists' };
  }

  const hashedPassword = await hashPassword(password);
  const user = await db.createUser(email, hashedPassword);

  // Create a session
  cookies().set('session', user.id, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    maxAge: 60 * 60 * 24 * 7, // 1 week
    path: '/',
  });

  return { success: true };
}

export async function signIn(formData: FormData) {
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;

  if (!email || !password) {
    return { error: 'Email and password are required' };
  }

  const user = await db.getUserByEmail(email);
  if (!user) {
    return { error: 'Invalid credentials' };
  }

  const isValid = await verifyPassword(password, user.password);
  if (!isValid) {
    return { error: 'Invalid credentials' };
  }

  // Create a session
  cookies().set('session', user.id, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    maxAge: 60 * 60 * 24 * 7, // 1 week
    path: '/',
  });

  return { success: true };
}

export async function signOut() {
  cookies().delete('session');
  return { success: true };
}