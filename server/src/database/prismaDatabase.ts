import { PrismaClient } from "@prisma/client";

export const prisma = new PrismaClient();

export function startPrismaDatabase() {
  prisma
    .$connect()
    .then(() => {
      console.log("Connected to Prisma Database");
    })
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });
}
