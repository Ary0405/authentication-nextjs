import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export async function createUser(user) {
    return prisma.User.create({
        data : user,
    });
}