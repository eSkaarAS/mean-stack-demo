import { PrismaClient } from "@prisma/client";

export const prisma = new PrismaClient();

export function startPrismaDatabase() {
  prisma.$connect().catch((error) => {
    console.error(error);
    process.exit(1);
  });
}
