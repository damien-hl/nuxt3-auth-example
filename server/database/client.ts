import pkg from '@prisma/client';

const { PrismaClient } = pkg;
const prisma = new PrismaClient({
  //   log: [
  //     {
  //       emit: 'stdout',
  //       level: 'query',
  //     },
  //     {
  //       emit: 'stdout',
  //       level: 'error',
  //     },
  //     {
  //       emit: 'stdout',
  //       level: 'info',
  //     },
  //     {
  //       emit: 'stdout',
  //       level: 'warn',
  //     },
  //   ],
});
export default prisma;
